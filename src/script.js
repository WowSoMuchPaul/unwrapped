import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import TWEEN, { remove } from '@tweenjs/tween.js';
import Stats from 'stats.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DirectionalLight } from 'three';
import { AmbientLight } from 'three';
import { HemisphereLight } from 'three';
import { PMREMGenerator } from 'three';

import { onPageLoad, setFestivalPlaylist, getMe, getTopSongs, getTopArtists, getOnRepeat, getRecentlyPlayed, loginWithSpotifyClick, refreshToken ,logoutClick } from "./spotify.js";
import { log } from 'three/examples/jsm/nodes/Nodes.js';

let sizes, canvas, scene, camera, helper, renderer, controls, trackControls, hemiLightHelper, lastCamPosition, inhaltGroup, heavyRotGroup, lastIntersected;
var inEinemBereich = false;
var tweenAktiviert = false;
var freeMovement = true;

//Navigation Konstanten
var timeRange = "long_term";
const targetPoints = {};
const bereichOffsetVorne = 400;
const bereichDampingVorne = bereichOffsetVorne / 2;
const bereichOffsetHinten = 100;
const bereichDampingHinten = bereichOffsetHinten / 1.2;
const zoomSpeedNorm = 0.3;
const zoomSpeedBereich = 0.02;
const tweenStartDistance = 10;
const cameraTargetDistance = 100;
// Textgrößen Konstanten
const headlineSize = 40;
const textSize = 10;
const textSmallSize = 5;
const textBigSize = 20;

const stats = new Stats();

const textHeight = 0;
const textWidth = 0;
const textDepth = 0;
// stats.showPanel(0);
//document.body.appendChild(stats.dom);

/** Raycaster */
const raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();

window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}, false);


/**cursor */
const cursor = {};

init();

async function init() {

    /**
     * Sizes
     */
    sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    // Canvas
    canvas = document.querySelector('canvas.webgl')

    // Scene
    scene = new THREE.Scene();
    //let backgroundColor = new THREE.Color('skyblue');
    //scene.background = new THREE.Color( 0xff0000 );

    /**
     * Camera
     */
    camera = new THREE.PerspectiveCamera(92, sizes.width / sizes.height)
    //kamera setup mit far und focus für bessere Darstellung
    // camera = new THREE.PerspectiveCamera(92, sizes.width / sizes.height, 0.2,520)
    camera.position.z = 3000;
    // camera.far = 10;
    // camera.focus = 1000;
    scene.add(camera);
    lastCamPosition = camera.position.z;
    // let light = new THREE.DirectionalLight(0xffff00, 5);
    //   scene.add(light);
    // let ambientLight = new THREE.AmbientLight(0x404040, 2);
    // scene.add(ambientLight);

    // const pmremGenerator = new THREE.PMREMGenerator(renderer);

    // pmremGenerator.compileEquirectangularShader();


    // new THREE.RGBELoader()
    //     .setDataType(THREE.UnsignedByteType)
    //     .load('../110_hdrmaps_com_free_1K.exr', function (texture) {
    //         const envMap = pmremGenerator.fromEquirectangular(texture).texture;
    //         scene.environment = envMap;
    //         texture.dispose();
    //         pmremGenerator.dispose();
    //     });

    //Hemisphären Licht
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 3, 1);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    // helper = new THREE.CameraHelper(camera);
    // scene.add(helper);


    /**
    * Axis Helper 
    */
    // const axesHelper = new THREE.AxesHelper( 100 );
    // scene.add( axesHelper );

    // Seiten Target
    targetPoints.profil = camera.position.z - (camera.position.z / 6);
    targetPoints.topArtist = camera.position.z - (2 * (camera.position.z / 6));
    targetPoints.topSong = camera.position.z - (3 * (camera.position.z / 6));
    targetPoints.onRepeat = camera.position.z - (4 * (camera.position.z / 6));
    targetPoints.playlist = camera.position.z - (5 * (camera.position.z / 6));

    /**
     * Cursor auf NULL
     * */
    cursor.x = 0;
    cursor.y = 0;

    /**
     * Renderer
     */
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0xffffff, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(sizes.width, sizes.height);
    document.body.appendChild(renderer.domElement);

    //Track Controls
    trackControls = new TrackballControls(camera, renderer.domElement);
    trackControls.noRotate = true;
    trackControls.noPan = true;
    trackControls.noZoom = false;
    trackControls.zoomSpeed = zoomSpeedNorm;
    trackControls.staticMoving = false;
    trackControls.dynamicDampingFactor = 0.04;


    //Erstelle alle Geometrien, wenn Nutzer bereits authentifiziert ist
    if (await (onPageLoad())) {
        await createAll();
    }else{
        
    }

    //Listener setzen
    window.addEventListener('resize', onWindowResize);
    document.getElementById("closebtn").addEventListener("click", closeOverlay);
    document.getElementById("help").addEventListener("click", openOverlay);
    document.getElementById("delete").addEventListener("click", deleteGroup);
    document.getElementById("create").addEventListener("click", createAll);
    document.getElementById("auth").addEventListener("click", loginWithSpotifyClick);
    document.getElementById("refreshToken").addEventListener("click", refreshToken);
    document.getElementById("playlist").addEventListener("click", () => {
        setFestivalPlaylist(timeRange);
    });
    
    //Nav Bar Listener
    document.getElementById("navPlaylist").addEventListener("click", e => {
        bringeZumBereich(e.target);
    });
    document.getElementById("navOnRepeat").addEventListener("click", e => {
        bringeZumBereich(e.target);
    });
    document.getElementById("navSongs").addEventListener("click", e => {
        bringeZumBereich(e.target);
    });
    document.getElementById("navArtists").addEventListener("click", e => {
        bringeZumBereich(e.target);
    });
    document.getElementById("navProfil").addEventListener("click", e => {
        bringeZumBereich(e.target);
    });

    document.getElementById("timeRange").addEventListener("change", function() {
        deleteGroup();
        timeRange = this.value;
        createAll();
    });

    window.addEventListener('mousemove', (event) => {
        cursor.x = event.clientX / sizes.width - 0.5;
        cursor.y = event.clientY / sizes.height - 0.5;
    })

}

function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
}

function openOverlay() {
    document.getElementById("overlay").style.display = "block";
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function checkCamPosition() {
    //Aktuelle Kamera Position
    const pos = Math.round(camera.position.z);

    //Bereich Profil
    if ((pos <= (targetPoints.profil + bereichOffsetVorne)) && (pos >= (targetPoints.profil - bereichOffsetHinten))) {
        handleBereich(pos, targetPoints.profil);
    }

    //Bereich Artists
    if ((pos <= (targetPoints.topArtist + bereichOffsetVorne)) && (pos >= (targetPoints.topArtist - bereichOffsetHinten))) {
        handleBereich(pos, targetPoints.topArtist);
    }

    //Bereich Songs
    if((pos <= (targetPoints.topSong + bereichOffsetVorne)) && (pos >= (targetPoints.topSong - bereichOffsetHinten)))
    {
        handleBereich(pos, targetPoints.topSong);
    }

    //Bereich Playlist
    if ((pos <= (targetPoints.playlist + bereichOffsetVorne)) && (pos >= (targetPoints.playlist - bereichOffsetHinten))) {
        handleBereich(pos, targetPoints.playlist);
    }
}

function handleBereich(pos, tp) {

    //Kamera ist im Eintritts-Damping
    if ((pos <= (tp + bereichOffsetVorne)) && (pos >= (tp + bereichOffsetVorne - bereichDampingVorne))) {
        trackControls.zoomSpeed = zoomSpeedBereich + (pos - ((tp + bereichOffsetVorne) - bereichDampingVorne)) * ((zoomSpeedBereich - zoomSpeedNorm) / (-bereichDampingVorne));
        //console.log("Damping. ZoomSpeed: " + trackControls.zoomSpeed);
    }

    //Kamera ist im Bereich Playlist
    if ((pos <= (tp + bereichOffsetVorne - bereichDampingVorne)) && (pos >= (tp - bereichOffsetHinten + bereichDampingHinten))) {
        //Kamera betritt Bereich Playlist
        if (!inEinemBereich) {
            inEinemBereich = true;
            //trackControls.zoomSpeed = zoomSpeedBereich;
            //console.log("BEREICH BETRETEN " + pos);
        }
        //TWEEN zur Camera Target Position
        if ((pos <= (tp + bereichOffsetVorne - bereichDampingVorne - tweenStartDistance)) && (pos >= (tp - bereichOffsetHinten + bereichDampingHinten + tweenStartDistance)) && (!tweenAktiviert)) {
            tweenAktiviert = true;
            TrackballControls.noZoom = true;
            new TWEEN.Tween(camera.position).to(
                {
                    z: tp + cameraTargetDistance
                }, 5000
            )
                .easing(TWEEN.Easing.Exponential.Out)
                .start().onComplete(() => {
                    TrackballControls.noZoom = false;

                });
        }
    }
    //Kamera verlaesst Bereich Playlist
    if (((pos > (tp + bereichOffsetVorne - bereichDampingVorne)) || (pos < (tp - bereichOffsetHinten + bereichDampingHinten))) && inEinemBereich) {
        inEinemBereich = false;
        tweenAktiviert = false;
        //trackControls.zoomSpeed = zoomSpeedNorm;
        //console.log("BEREICH VERLASSEN " + pos);
    }

    //Kamera ist im Austritts-Damping
    if ((pos >= (tp - bereichOffsetHinten)) && (pos <= (tp - bereichOffsetHinten + bereichDampingHinten))) {
        trackControls.zoomSpeed = zoomSpeedBereich - (pos - ((tp - bereichOffsetHinten) + bereichDampingHinten)) * ((zoomSpeedBereich - zoomSpeedNorm) / (-bereichDampingHinten));
        //console.log("Damping Hinten. ZoomSpeed: " + trackControls.zoomSpeed);
    }
}

function bringeZumBereich(origin) {
    let target;
    if(origin.id == "navPlaylist") {
        target = targetPoints.playlist;
    } else if (origin.id == "navOnRepeat") {
        target = targetPoints.onRepeat;
    } else if (origin.id == "navSongs") {
        target = targetPoints.topSong;
    } else if (origin.id == "navArtists") {
        target = targetPoints.topArtist;
    } else if (origin.id == "navProfil") {
        target = targetPoints.profil;
    }
    target += cameraTargetDistance;

    freeMovement = false;
    TrackballControls.noZoom = true;

    new TWEEN.Tween(camera.position).to(
        {
            z: target
        }, 5000
    )
        .easing(TWEEN.Easing.Exponential.Out)
        .start().onComplete(() => {
            TrackballControls.noZoom = false;
            freeMovement = true;
        });
}

const clock = new THREE.Clock();
let previousTime = 0;

// Funktion zum bewegen des aktuell getroffenen Objekts
function handleIntersectedObject(intersectedObject) {
    // Überprüfen, ob das aktuell getroffene Objekt nicht gehovert ist
    if (!intersectedObject.isHovered) {
        // Erstellen einer Tween-Animation, um das aktuell getroffene Objekt nach vorne zu bewegen
        new TWEEN.Tween(intersectedObject.position)
            .to({ z: intersectedObject.position.z + 40 }, 300)
            .easing(TWEEN.Easing.Exponential.Out)
            .start();
        // aktuelles Objekt als gehovert setzen
        intersectedObject.isHovered = true;
        // Erstellen von Künstler:innen Name neben den Bildern 
        // console.log(intersectedObject.userData.name);
        // const rotText = createTextMesh( intersectedObject.userData.name, textSize , intersectedObject.position.x, intersectedObject.position.y -50, targetPoints.onRepeat ,0,0,0x000000, 1,'W95FA_Regular.typeface');
        // console.log(rotText);
    }
    // aktualisieren des letzten getroffenen Objekts
    lastIntersected = intersectedObject;

}

// Funktion zum zurücksetzen des letzten getroffenen Objekts
function resetIntersectedObject(intersectedObject) {
    // Erstellen einer Tween-Animation, um das letzte getroffene Objekt zurück zu seiner ursprünglichen Position zu bewegen
    new TWEEN.Tween(intersectedObject.position)
        .to({ z: intersectedObject.position.z - 40 }, 300)
        .easing(TWEEN.Easing.Exponential.Out)
        .start();
    // letztes Objekt als nicht mehr gehovert setzen
    intersectedObject.isHovered = false;
    //clearThree(rotText);
}

// Funktion zum animieren der Szene
const tick = () => {
    stats.begin();
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - previousTime;
    previousTime = elapsedTime;
    lastCamPosition = Math.round(camera.position.z);

    //Animate camera
    const parallaxX = cursor.x * 50;
    const parallaxY = - cursor.y * 50;
    camera.position.x += (parallaxX - camera.position.x) * 5 * deltaTime;
    camera.position.y += (parallaxY - camera.position.y) * 5 * deltaTime;

        if (lastCamPosition != Math.round(camera.position.z) && freeMovement) {
            checkCamPosition();
        }
        
        if(lastCamPosition <= targetPoints.onRepeat){
            if(document.getElementById("createPlaylist-btn") == null){
                createPlaylistButton();
            }
        }

        // if (lastCamPosition >= targetPoints.playlist && lastCamPosition <= targetPoints.onRepeat) {  
        //     console.log(lastCamPosition);  
        //     createPlaylistButton();
        //     document.getElementById("createPlaylist-btn").style.display = "block";
        //         console.log("createPlaylistButton");
        //     if(document.getElementById("createPlaylist-btn") != null){
        //         document.getElementById("createPlaylist-btn").style.display = "none";
        //     } else {

        //     }
        // }

        if (lastCamPosition >= targetPoints.onRepeat){    
            if(document.getElementById("createPlaylist-btn") != null){
                document.getElementById("createPlaylist-btn").style.display = "none";
            }
            }

        if (lastCamPosition <= targetPoints.playlist){    
            if(document.getElementById("createPlaylist-btn") != null){
                document.getElementById("createPlaylist-btn").style.display = "none";
            }
            }

    iconAnimationPl()

    //console.log(lastCamPosition);
   

    // Raycaster-Update
    /*
    raycaster.setFromCamera(mouse, camera);
    let intersects = raycaster.intersectObjects(heavyRotGroup.children);

    // Überprüfen, ob ein Objekt getroffen wurde
    if (intersects.length > 0) {
        if (lastIntersected && lastIntersected !== intersects[0].object) {
            resetIntersectedObject(lastIntersected);
        }
        handleIntersectedObject(intersects[0].object);
    }
    else if (lastIntersected) {
        resetIntersectedObject(lastIntersected);
        lastIntersected = null;
    }
    */

    // aktualiseren der TrackballControls und der TWEEN-Animationen
    trackControls.update();
    TWEEN.update();

    // Rendern der Szene und anfordern einer neuen Animation
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
}


// function createTextMesh(text, fontsize, x, y, z, rotationX, rotationY, color, opacity, fontName) {
//     const fontLoader = new FontLoader()
//     fontLoader.load(
//         `../fonts/${fontName}.json`,
//         (font) => {
//             const textGeometry = new TextGeometry(
//                 text, {
//                     font: font,
//                     size: fontsize,
//                     height: 1,
//                     curveSegments: 12,
//                     bevelEnabled: true,
//                     bevelThickness: 0.03,
//                     bevelSize: 0.02,
//                     bevelOffset: 0,
//                     bevelSegments: 5
//                 }
//                 )
//                 const textMaterial = new THREE.MeshBasicMaterial();
//                 let textMesh = new THREE.Mesh(textGeometry, textMaterial);
//                 //textMesh.receiveShadow = true;
//                 inhaltGroup.add(textMesh);
//                 textMesh.position.x = x;
//                 textMesh.position.y = y;
//                 textMesh.position.z = z;
//                 textMesh.rotateY(rotationY * (Math.PI / 180))
//                 textMesh.rotateX(rotationX * (Math.PI / 180));
//                 textMaterial.color = color || new THREE.Color(0xffffff);
//                 textMaterial.opacity = opacity || 1;

//                 //resolve(textMesh); // Lösen Sie die Promise mit textMesh
//             },
//             // undefined, // onProgress callback not needed
//             // (error) => reject(error) // Reject the Promise on error
//         )
//     };

    // Funktion zum erstellen von TextMeshes
    
export async function createTextMesh(text, fontsize, x, y, z,  rotationX, rotationY, color, opacity, fontName) {
    return new Promise((resolve, reject) => {
    const fontLoader = new FontLoader()
    fontLoader.load(
        `../fonts/${fontName}.json`,
        (font) => {
            const textGeometry = new TextGeometry(
                text, {
                    font: font,
                    size: fontsize,
                    height: 1,
                    curveSegments: 12,
                    bevelEnabled: true,
                    bevelThickness: 0.03,
                    bevelSize: 0.02,
                    bevelOffset: 0,
                    bevelSegments: 5
                }
            )
            const textMaterial = new THREE.MeshBasicMaterial();
            let textMesh = new THREE.Mesh(textGeometry, textMaterial);
            inhaltGroup.add(textMesh);
            // Positionierung des TextMeshes
            textMesh.position.x = x;
            textMesh.position.y = y;
            textMesh.position.z = z;
            textMesh.rotateY(rotationY * (Math.PI / 180))
            textMesh.rotateX(rotationX * (Math.PI / 180));
            textMaterial.transparent = true;
            textMaterial.materialColor = color || new THREE.Color(0xffffff);
            textMaterial.opacity = opacity || 1;

            // textGeometry.computeBoundingBox();
            // textWidth = textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x;
            // textHeight = textGeometry.boundingBox.max.y - textGeometry.boundingBox.min.y;
            // textDepth = textGeometry.boundingBox.max.z - textGeometry.boundingBox.min.z;


            // Fügt das TextMesh der inhaltGroup hinzu
            inhaltGroup.add(textMesh);
            // Auflösen des Promises mit dem erstellten TextMesh
            textMesh.userData.name = text;
            resolve(textMesh);
        },
        undefined,
        (error) => {  // onError Handler
            reject(error);
        }
    );
});
}

stats.end();

function createBildMesh(bildUrl, x, y, z, rotationY, bildGroesse) {
    //Bildtextur
    const texture = new THREE.TextureLoader().load(bildUrl);//'https://3.bp.blogspot.com/-Ol0cP_dxq7U/VWjIWBW2QpI/AAAAAAAAJxg/8ackwAwAYIE/s1600/JPx7R.jpg' );
    //Plane Geometry erstellen
    const geometry = new THREE.PlaneGeometry(bildGroesse, bildGroesse);
    const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
    //Geometry und Material vereinen und der Scene hinzufühen
    let bildMesh = new THREE.Mesh(geometry, material);
    inhaltGroup.add(bildMesh);
    bildMesh.position.x = x;
    bildMesh.position.y = y;
    bildMesh.position.z = z;
    bildMesh.rotateY(rotationY * (Math.PI / 180));
    bildMesh.isHovered = false;
    return bildMesh;
}

function createRingMesh(x,y,z,rotationY,rotationX, farbe, inRad, outRad ){

    const geometry = new THREE.RingGeometry( inRad, outRad, 90 ); 
    const material = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide });
    const ringMesh = new THREE.Mesh( geometry, material );
    inhaltGroup.add(ringMesh);
    ringMesh.position.x = x;
    ringMesh.position.y = y;
    ringMesh.position.z = z;
    ringMesh.rotateY(rotationY * (Math.PI/180));
    ringMesh.rotateX(rotationX * (Math.PI/180));
    material.transparent = true;
    material.color = farbe;

    return ringMesh;
}

function createQuaderMesh(x,y,z,rotationX, rotationY, size, color){
   // Square frame geometry
   const frameGeometry = new THREE.BufferGeometry();
    let outSqu = size;
    let inSqu = outSqu-(outSqu/10);
   // Define vertices for an outer and inner square (counter-clockwise winding)
   const vertices = new Float32Array([

       // Outer square vertices
       -outSqu, -outSqu, 0.0,  // bottom left
       outSqu, -outSqu, 0.0,   // bottom right
       outSqu, outSqu, 0.0,    // top right
       -outSqu, outSqu, 0.0,   // top left
       // Inner square vertices
       -inSqu, -inSqu, 0.0,  // bottom left
       inSqu, -inSqu, 0.0,   // bottom right
       inSqu, inSqu, 0.0,    // top right
       -inSqu, inSqu, 0.0    // top left
   ]);

   // Define the indices that make up the two square faces (two triangles per face)
   const indices = new Uint16Array([
       // Outer square triangle 1
       0, 1, 4,
       1, 5, 4,
       // Outer square triangle 2
       1, 2, 5,
       2, 6, 5,
       // Outer square triangle 3
       2, 3, 6,
       3, 7, 6,
       // Outer square triangle 4
       3, 0, 7,
       0, 4, 7
   ]);

   // Create attribute and set geometry indices
   frameGeometry.setIndex(new THREE.BufferAttribute(indices, 1));
   frameGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

   const material = new THREE.MeshBasicMaterial({ color :color , side: THREE.DoubleSide, wireframe: false });
   const frameMesh = new THREE.Mesh(frameGeometry, material);
   inhaltGroup.add(frameMesh);

   frameMesh.position.x = x;
   frameMesh.position.y = y;
   frameMesh.position.z = z;
   frameMesh.rotateY(rotationY * (Math.PI/180));
   frameMesh.rotateX(rotationX * (Math.PI/180));
   material.transparent = true;
    material.color = color;
   return frameMesh;
}

async function createProfil() {
    const profil = await getMe();
    const recentlyPlayed = await getRecentlyPlayed();
    let winkel = 0;
    createBildMesh(profil.imageUrl, + 80, 0, targetPoints.profil, winkel, 50);
    createTextMesh("Hey \n" + profil.name + " !", textBigSize, -80, 30, targetPoints.profil,0,0,0x000000, 1,'Jersey 15_Regular');
    createTextMesh("Followers: " + profil.follower.toString(), textSmallSize, 55, -30, targetPoints.profil,winkel,0,0x000000, 1,'W95FA_Regular.typeface');

    let recGroupX = -80;
    let recGroupY = -17;
    let recText = 2;
    let recBildG = 25;
    let recBildRot = 0;

    for(let i = 0; i < recentlyPlayed.length; i++){
        if(recentlyPlayed[i].name.length >= 20){
            recentlyPlayed[i].name = recentlyPlayed[i].name.substring(0,20) + "...";
        }
    }
    
    console.log(recentlyPlayed);

    createTextMesh("Recently Played Songs", textSize, recGroupX, recGroupY, targetPoints.profil,0, 0, 0x000000,1,'Jersey 15_Regular');

    createBildMesh(recentlyPlayed[0].image, recGroupX + 13, recGroupY - 18, targetPoints.profil, recBildRot, recBildG);
    createTextMesh(recentlyPlayed[0].name, recText, recGroupX + 1, recGroupY - 34, targetPoints.profil, recBildRot,0,0x000000, 1,'W95FA_Regular.typeface');

    createBildMesh(recentlyPlayed[1].image, recGroupX + 43, recGroupY - 18, targetPoints.profil, recBildRot, recBildG);
    createTextMesh(recentlyPlayed[1].name, recText, recGroupX + 31, recGroupY - 34, targetPoints.profil, recBildRot,0,0x000000, 1,'W95FA_Regular.typeface');

    createBildMesh(recentlyPlayed[2].image, recGroupX + 13, recGroupY - 48, targetPoints.profil, recBildRot, recBildG);
    createTextMesh(recentlyPlayed[2].name, recText, recGroupX + 1, recGroupY - 64, targetPoints.profil, recBildRot,0,0x000000, 1,'W95FA_Regular.typeface');

    createBildMesh(recentlyPlayed[3].image, recGroupX + 43, recGroupY - 48, targetPoints.profil, recBildRot, recBildG);
    createTextMesh(recentlyPlayed[3].name, recText, recGroupX + 31, recGroupY - 64, targetPoints.profil, recBildRot,0,0x000000, 1,'W95FA_Regular.typeface');

    createTextMesh("j", textBigSize, 45, -35, targetPoints.profil+40,0, -25, 0x000000,0.4,'Yarndings 12_Regular');
    createTextMesh("k", textSize,-80, -95, targetPoints.profil+20,0, 12, 0x000000,0.4,'Yarndings 12_Regular');
    createTextMesh("y", textBigSize-8, -30, 20, targetPoints.profil-40,-5, 15, 0x000000,0.3,'Yarndings 12_Regular');

    createGLTFMesh(0, -90, targetPoints.profil, 0, Math.PI, 0, 20, 'DP_Frame_001');
}


async function createTopArtist() {
    let profil = await getMe();
    let topArtists = await getTopArtists(timeRange);
    let i = 0;
    //console.log("createTopArtists, hier sind sie: " + topArtists);
    //console.log("Diese Profil gehört: " + profil.name);
    createTextMesh(profil.name + "'s", textBigSize, -300, 110, targetPoints.topArtist - 200,0,0,0x000000, 1,'W95FA_Regular.typeface');
    let headlineTwo = createTextMesh("\nTop Artists", headlineSize, -300, 110, targetPoints.topArtist - 200,0, 0, 0x000000,1,'Jersey 15_Regular');
    while (i < topArtists.length) {
        let x = 100 + i * -15;
        let y = -60 + i * 25;
        let z = targetPoints.topArtist - (100 + i * 55);
        let BildMesh = createBildMesh(topArtists[i].imageUrl, x, y, z, 0, 65, 0);
        topArtists[i].mesh = BildMesh;//zwischenspeichern des Meshes im Array
        let artistName = createTextMesh(topArtists[i].name, textSmallSize, x + 45, y + 17, z,0,0,0x000000, 1,'W95FA_Regular.typeface');
        i++;
    }
}

// Funktion zum erstellen der Heavy Rotation
async function createHeavyRotation() {
    // Heavy Rotation aus dem Local Storage holen
    const heavyRotation = await getOnRepeat();
    // Heavy Rotation Group erstellen
    heavyRotGroup = new THREE.Group();
    // Heavy Rotation Group positionieren
    heavyRotGroup.position.z = targetPoints.onRepeat;
    // heavyRotGroup der Scene & inhaltGroup hinzufügen
    scene.add(heavyRotGroup);
    inhaltGroup.add(heavyRotGroup);
    // Anzahl der Elemente in der Heavy Rotation, basierend auf der Anzahl der Songs
    const anzahlElemente = heavyRotation.length;
    let radius = 250;
    let vektor = { x: 0, y: 0, z: 0 };

    const objektPositionen = [];
    // Positionen der einzelnen Elemente berechnen
    for (let e = 0; e < anzahlElemente; e++) {
        let theta = (2 * Math.PI / anzahlElemente) * e;
        let x = vektor.x + radius * Math.cos(theta);
        let y = vektor.y + radius * Math.sin(theta);
        let z = vektor.z;
        // Positionen in Array speichern
        const objektPosition = { x: x, y: y, z: z };
        objektPositionen.push(objektPosition);
        // BildMesh erstellen und der Heavy Rotation Group hinzufügen, dabei die Positionen aus dem Array verwenden
        let bildMesh = createBildMesh(heavyRotation[e].image, objektPositionen[e].x, objektPositionen[e].y, objektPositionen[e].z, 25, 100);
        heavyRotation[e].mesh = bildMesh;
        bildMesh.userData.name = heavyRotation[e].name;
        heavyRotGroup.add(bildMesh);
    }
    createTextMesh("Your \nHeavy Rotation", headlineSize, -200, 0, targetPoints.onRepeat - 300,0, 0, 0x000000,1,'Jersey 15_Regular');
}

async function createGLTFMesh(x, y, z, rotationX, rotationY, rotationZ, scale, name) {
    return new Promise((resolve, reject) => {
        const gltfloader = new GLTFLoader();
        gltfloader.load(
            `../models/${name}.glb`,
            (gltf) => {
                gltf.scene.scale.set(scale, scale, scale);
                gltf.scene.position.set(x, y, z);
                gltf.scene.rotateX(rotationX * (Math.PI / 180));
                gltf.scene.rotateY(rotationY * (Math.PI / 180));
                gltf.scene.rotateZ(rotationZ * (Math.PI / 180));
                inhaltGroup.add(gltf.scene);
                resolve(gltf.scene);
            },
            undefined,
            (error) => {
                reject(error);
            }
        );
    });
}


// Funktion zu Erstellen aller Hauptgruppen der Szene
function createTopSongs() {
    let songs;
    if (localStorage.getItem("topSongs") == undefined) {
        console.log("Top Songs noch nicht ermittelt.");
        return;
    }else{
        songs = JSON.parse(localStorage.getItem("topSongs"));
    }
    // let y = -sizes.height / 3;
    // let x = -sizes.width / 3;
    // console.log(x);
    // console.log(y);
    // let z = targetPoints.topSong;
    
    //console.log(songs);
    createTextMesh("Your Top Songs", headlineSize, -150, -100, targetPoints.topSong ,0, 0, 0x000000,1,'Jersey 15_Regular');
    
    createBildMesh(songs[0].imageUrl, 0, 10, targetPoints.topSong-100, 0, 70);
    createTextMesh("1: " + songs[0].name, textSize, -35, 50, targetPoints.topSong-100,0,0,0x000000, 1,'W95FA_Regular.typeface');
    createGLTFMesh(0, -90, targetPoints.topSong-100, 0, 0, 0, 50);

    createBildMesh(songs[1].imageUrl, -120, -5, targetPoints.topSong-55,20, 70);
    createTextMesh("2: " + songs[1].name, textSize, -155, 35, targetPoints.topSong-45,0,20,0x000000, 1,'W95FA_Regular.typeface');
    createGLTFMesh(-120, -110, targetPoints.topSong-55, 0,20, 0, 50);

    createBildMesh(songs[2].imageUrl, 110, -15, targetPoints.topSong-35, -20, 70);
    createTextMesh("3: " + songs[2].name, textSize, 75,25, targetPoints.topSong-35,0,-20,0x000000, 1,'W95FA_Regular.typeface');
    createGLTFMesh(110, -120, targetPoints.topSong-35, 0, -20, 0, 50);
}

async function iconAnimationPl(){
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - previousTime;
    previousTime = elapsedTime;

    // Modelle
    const iconAl = null;
    const iconRob = null;
    
//     if(iconAl == null && iconRob == null){
//         console.log("i m a shit in this 1");
//     const iconAl = await createTextMesh("w", textBigSize-5, 55, 85, targetPoints.playlist,0, -25, 0x000000,0.3,'Yarndings 12_Regular');
//     const iconRob = await createTextMesh("x", textBigSize-10, -120, -75, targetPoints.playlist,0, 15, 0x000000,0.2,'Yarndings 12_Regular');
//         //animation der Modelle
//         // console.log(iconAl);
//         // console.log(iconRob);
//         // console.log(iconAl.rotation.y);
//         // console.log(elapsedTime)
//         //  iconAl.rotation.y  += Math.sin(elapsedTime) * 0.9;
//         //iconAl.rotation.x += Math.cos(elapsedTime) * 0.5;
//         // iconAl.y = Math.sin(elapsedTime) * 5;
//         console.log(iconAl.x);
//         iconAl.x = Math.cos(elapsedTime) * -0.5;
//         // iconRob.rotationY = Math.sin(elapsedTime) * 2;
//         // iconRob.rotationX = Math.cos(elapsedTime) * 3;   
//         // iconRob.y = Math.sin(elapsedTime) * 5;
//         // iconRob.x = Math.cos(elapsedTime) * 5;
//     }
} 

async function createPlaylist(){
    await createTextMesh("Deine \nunwrapped \nPlaylist", headlineSize, -250, 85, targetPoints.playlist-40,0,25,0x000000, 1,'Jersey 15_Regular');
    createTextMesh("w", textBigSize, 55, 85, targetPoints.playlist,0, -25, 0x000000,0.3,'Yarndings 12_Regular');
    createTextMesh("x", textBigSize,-120, -75, targetPoints.playlist,0, 15, 0x000000,0.2,'Yarndings 12_Regular');
    createTextMesh("a", 1000, -580,-500, targetPoints.playlist-20,0,0,0x000000,0.1,'Yarndings 12_Regular');
}

function createPlaylistButton(){
    const button  = document.createElement('button');
    button.id = 'createPlaylist-btn';
    button.textContent = 'Create Playlist';
    button.style.display = 'block';
    document.getElementById('playlistBttnContainer').appendChild(button);
    document.getElementById("createPlaylist-btn").addEventListener("click",setFestivalPlaylist);
}

async function createEND(){
    await createTextMesh("THE END", headlineSize, -40, 0, targetPoints.playlist-500,0, 0, 0x000000,1,'Jersey 15_Regular');
    // createRingMesh(15,0,targetPoints.playlist-500,-35,15,0x42887E,150,160);
    // createQuaderMesh(0,0,targetPoints.playlist-500,20,10, 120, 0xffffff);
    createTextMesh("v", 150, -150,-100,targetPoints.playlist-470 ,0,0,0x000000,0.1,'Yarndings 12_Regular');
}

async function createAll() {
    inhaltGroup = new THREE.Group();
    inhaltGroup.name = "inhaltGroup";
    createProfil();
    createTopArtist();
    createHeavyRotation()
    createTopSongs();
    createPlaylist()
    createEND();
    // Hinzufügen der "inhaltGroup" zur Haupt-Szene
    scene.add(inhaltGroup);
}

function deleteGroup() {
    //console.log(inhaltGroup);
    clearThree(inhaltGroup);
}

function clearThree(obj) {
    while (obj.children.length > 0) {
        clearThree(obj.children[0]);
        obj.remove(obj.children[0]);
    }
    if (obj.geometry) obj.geometry.dispose();

    if (obj.material) {
        //in case of map, bumpMap, normalMap, envMap ...
        Object.keys(obj.material).forEach(prop => {
            if (!obj.material[prop])
                return;
            if (obj.material[prop] !== null && typeof obj.material[prop].dispose === 'function')
                obj.material[prop].dispose();
        })
        obj.material.dispose();
    }
}

tick();