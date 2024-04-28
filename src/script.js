import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import TWEEN, { remove } from '@tweenjs/tween.js';
import Stats from 'stats.js';
//import typefaceFont from 'three/examples/fonts/helvetiker_regular.typeface.json';

import { onPageLoad, authorizationReq, setFestivalPlaylist, setTimeRangeLong, setTimeRangeMid, setTimeRangeShort } from "./spotify.js";
import { color, log, tangentGeometry } from 'three/examples/jsm/nodes/Nodes.js';

let sizes, canvas, scene, camera, helper, renderer, controls, trackControls, hemiLightHelper, lastCamPosition, inhaltGroup, heavyRotGroup, lastIntersected;
var inEinemBereich = false;
var tweenAktiviert = false;
var freeMovement = true;
const targetPoints = {};
const bereichOffsetVorne = 400;
const bereichDampingVorne = bereichOffsetVorne / 2;
const bereichOffsetHinten = 100;
const bereichDampingHinten = bereichOffsetHinten / 1.2;
const zoomSpeedNorm = 0.3;
const zoomSpeedBereich = 0.02;
const tweenStartDistance = 10;
const cameraTargetDistance = 100;

const stats = new Stats();
// stats.showPanel(0);
document.body.appendChild(stats.dom);

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

function init() {

    onPageLoad();

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
    camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
    camera.position.z = 3000;
    camera.far = 10;
    camera.focus = 1000;
    scene.add(camera);
    lastCamPosition = camera.position.z;
    


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

    //Listener setzen
    window.addEventListener('resize', onWindowResize);
    document.getElementById("closebtn").addEventListener("click", closeOverlay);
    document.getElementById("help").addEventListener("click", openOverlay);
    document.getElementById("delete").addEventListener("click", deleteGroup);
    document.getElementById("create").addEventListener("click", createAll);
    document.getElementById("auth").addEventListener("click", authorizationReq);
    document.getElementById("playlist").addEventListener("click", setFestivalPlaylist);
    
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
        console.log(this.value);
        if (this.value == "long_term") {
            setTimeRangeLong();
        }
        if (this.value == "medium_term") {
            setTimeRangeMid();
        }
        if (this.value == "short_term") {
            setTimeRangeShort();
        }
        //Das ist vielleicht nicht die eleganteste Lösung, aber das Ding muss halt auf die aktualisierten Werte warten, da die ja neu von spotify abgerufen werden.

        setTimeout(function () {
            createAll();
            console.log("halllllo");
        }, 250);
    });

    window.addEventListener('mousemove', (event) => {
        cursor.x = event.clientX / sizes.width - 0.5;
        cursor.y = event.clientY / sizes.height - 0.5;
    })

    //Alle Geometrien mit den Spotify Daten erstellen
    if (localStorage.getItem("access_token") != undefined) {
        console.log("access token ist am start, create all.")
        createAll();
    }
}

/* Getter Fnktionen für alle Daten aus dem Local Storage */

//Profil Getter
function getProfil() {
    const profil = JSON.parse(localStorage.getItem("myProfil")) || [];
    return profil;
}

//RecentlyPlayed Getter
function getRecentlyPlayed() {
    const recentlyPlayed = JSON.parse(localStorage.getItem("recentlyPlayed")) || [];
    return recentlyPlayed;
}

//TopArtist Getter
function getTopArtists() {
    const topArtists = JSON.parse(localStorage.getItem("topArtists")) || [];
    return topArtists;
}

//TopSongs Getter
function getTopSongs() {
    const topSongs = JSON.parse(localStorage.getItem("topSongs")) || [];
    return topSongs;
}

//OnRepeat Getter
function getOnRepeat() {
    const onRepeat = JSON.parse(localStorage.getItem("onRepeat")) || [];
    // console.log(onRepeat[0].name);
    return onRepeat;
}

//Playlist Getter
function getPlaylist() {
    const playlist = JSON.parse(localStorage.getItem("playlist")) || [];
    return playlist;
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
        // const rotText = createTextMesh( intersectedObject.userData.name, 10, intersectedObject.position.x, intersectedObject.position.y -50, targetPoints.onRepeat , 0);
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

    //Animate camera
    const parallaxX = cursor.x * 50;
    const parallaxY = - cursor.y * 50;
    camera.position.x += (parallaxX - camera.position.x) * 5 * deltaTime;
    camera.position.y += (parallaxY - camera.position.y) * 5 * deltaTime;

    if (lastCamPosition != Math.round(camera.position.z) && freeMovement) {
        checkCamPosition();
        //console.log("Es bewegt sich. " + Math.round(camera.position.z));
    }
    lastCamPosition = Math.round(camera.position.z);
     //console.log("Checking position:", lastCamPosition, "vs", targetPoints.onRepeat);
    //  if(lastCamPosition <= targetPoints.)
    if(lastCamPosition < targetPoints.onRepeat){
        createPlaylistButton();
    }
     

    

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


function createTextMesh(text, fontsize, x, y, z) {
    const fontLoader = new FontLoader()
    fontLoader.load(
        '../fonts/W95FA_Regular.typeface.json',
        (font) => {
            const textGeometry = new TextGeometry(
                text, {
                    font: font,
                    size: fontsize,
                    height: 0.2,
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
                //textMesh.receiveShadow = true;
                inhaltGroup.add(textMesh);
                textMesh.position.x = x;
                textMesh.position.y = y;
                textMesh.position.z = z;
                //textMesh.rotateY(rotationY * (Math.PI / 180))
                //resolve(textMesh); // Lösen Sie die Promise mit textMesh
            },
            // undefined, // onProgress callback not needed
            // (error) => reject(error) // Reject the Promise on error
        )
    };
    stats.end();

    function createIconMesh(text, fontsize, x, y, z, rotationX, rotationY, color, opacity) {
        const fontLoader = new FontLoader()
        fontLoader.load(
            '../fonts/Yarndings 12_Regular.json',
            (font) => {
                const iconGeometry = new TextGeometry(
                    text, {
                        font: font,
                        size: fontsize,
                        height: 0.2,
                        curveSegments: 12,
                        bevelEnabled: true,
                        bevelThickness: 0.03,
                        bevelSize: 0.02,
                        bevelOffset: 0,
                        bevelSegments: 5
                    }
                    )
                    const iconMaterial = new THREE.MeshBasicMaterial();
                    let iconMesh = new THREE.Mesh(iconGeometry, iconMaterial);
                    //iconMesh.receiveShadow = true;
                    inhaltGroup.add(iconMesh);
                    iconMesh.position.x = x;
                    iconMesh.position.y = y;
                    iconMesh.position.z = z;
                    iconMaterial.color = color;
                    iconMaterial.opacity = opacity;
                    
                    iconMesh.rotateX(rotationY * (Math.PI / 180));
                    iconMesh.rotateY(rotationY * (Math.PI / 180));
                    //resolve(iconMesh); // Lösen Sie die Promise mit textMesh
                },
                // undefined, // onProgress callback not needed
                // (error) => reject(error) // Reject the Promise on error
            )
        };
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

   const material = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide, wireframe: false });
   const frameMesh = new THREE.Mesh(frameGeometry, material);
   inhaltGroup.add(frameMesh);

   frameMesh.position.x = x;
   frameMesh.position.y = y;
   frameMesh.position.z = z;
   frameMesh.rotateY(rotationY * (Math.PI/180));
   frameMesh.rotateX(rotationX * (Math.PI/180));
    frameMesh.material.color = color;

   return frameMesh;
}

function createProfil() {
    let profil = getProfil();
    let recentlyPlayed = getRecentlyPlayed();
    let winkel = 0;
    createBildMesh(profil.imageUrl, + 80, 0, targetPoints.profil, winkel, 50);
    createTextMesh("Hey \n" + profil.name + " !", 10, -80, 30, targetPoints.profil, 0);
    createTextMesh("Followers: " + profil.follower.toString(), 3, 55, -30, targetPoints.profil, winkel);

    let recGroupX = -80;
    let recGroupY = -17;
    let recText = 2;
    let recBildG = 25;
    let recBildRot = 0;

    createTextMesh("Recently Played Songs", 5, recGroupX, recGroupY, targetPoints.profil, recBildRot);

    createBildMesh(recentlyPlayed[0].image, recGroupX + 13, recGroupY - 18, targetPoints.profil, recBildRot, recBildG);
    createTextMesh(recentlyPlayed[0].name, recText, recGroupX + 1, recGroupY - 34, targetPoints.profil, recBildRot);

    createBildMesh(recentlyPlayed[1].image, recGroupX + 43, recGroupY - 18, targetPoints.profil, recBildRot, recBildG);
    createTextMesh(recentlyPlayed[1].name, recText, recGroupX + 31, recGroupY - 34, targetPoints.profil, recBildRot);

    createBildMesh(recentlyPlayed[2].image, recGroupX + 13, recGroupY - 48, targetPoints.profil, recBildRot, recBildG);
    createTextMesh(recentlyPlayed[2].name, recText, recGroupX + 1, recGroupY - 64, targetPoints.profil, recBildRot);

    createBildMesh(recentlyPlayed[3].image, recGroupX + 43, recGroupY - 48, targetPoints.profil, recBildRot, recBildG);
    createTextMesh(recentlyPlayed[3].name, recText, recGroupX + 31, recGroupY - 64, targetPoints.profil, recBildRot);
}


function createTopArtist() {
    let profil = getProfil();
    let topArtists = getTopArtists();
    let i = 0;
    //console.log("createTopArtists, hier sind sie: " + topArtists);
    //console.log("Diese Profil gehört: " + profil.name);
    createTextMesh(profil.name + "'s", 20, -300, 110, targetPoints.topArtist - 200, 0);
    let headlineTwo = createTextMesh("\nTop Artists", 40, -300, 110, targetPoints.topArtist - 200, 0);
    while (i < topArtists.length) {
        let x = 100 + i * -15;
        let y = -60 + i * 25;
        let z = targetPoints.topArtist - (100 + i * 55);
        let BildMesh = createBildMesh(topArtists[i].imageUrl, x, y, z, 0, 65, 0);
        topArtists[i].mesh = BildMesh;//zwischenspeichern des Meshes im Array
        let artistName = createTextMesh(topArtists[i].name, 5, x + 45, y + 17, z, 0);
        i++;
    }
}

// Funktion zum erstellen der Heavy Rotation
function createHeavyRotation() {
    // Heavy Rotation aus dem Local Storage holen
    const heavyRotation = getOnRepeat();
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
    createTextMesh("Your \nHeavy Rotation", 40, -200, 0, targetPoints.onRepeat - 300, 0);
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
    //console.log(songs);
    createTextMesh("Deine Top 3 Songs", 5, -55, 15, targetPoints.topSong);
    createBildMesh(songs[0].imageUrl, 0, 0, targetPoints.topSong, 0, 20);
    createTextMesh("1: " + songs[0].name, 2, -10, -15, targetPoints.topSong);
    createBildMesh(songs[1].imageUrl, -30, -5, targetPoints.topSong, 0, 20);
    createTextMesh("2: " + songs[1].name, 2, -40, -20, targetPoints.topSong);
    createBildMesh(songs[2].imageUrl, 30, -10, targetPoints.topSong, 0, 20);
    createTextMesh("3: " + songs[2].name, 2, 20, -25, targetPoints.topSong);
}

function createPlaylist(){
    createTextMesh("Deine \nunwrapped \nPlaylist", 5, -55, 15, targetPoints.playlist);
    
}

function createPlaylistButton(){
    console.log('bin drinn')
    const button  = document.createElement('button');
    button.id = 'createPlaylist-btn';
    button.textContent = 'Create Playlist';
    // button.style.textAlign = 'start';
    button.style.display = 'block';
    document.getElementById('playlistBttnContainer').appendChild(button);
    document.getElementById("createPlaylist-btn").addEventListener("click",setFestivalPlaylist);
}

// function playlistBtn(){
//     if(lastCamPosition < 1000){
//         console.log("bin drinn");
//         console.log(button.name)
// }
// }

function createEND(){
    createTextMesh("THE END", 8, 0, 0, targetPoints.playlist-500);
    createRingMesh(15,0,targetPoints.playlist-500,-55,25,0xffffff,150,160);
    
    createQuaderMesh(0,0,targetPoints.playlist-500,20,10, 120, 0x8043E2);
}

function createAll() {
    console.log("createAll aufgerufen");
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