// import * as THREE from 'three';
// import TWEEN from '@tweenjs/tween.js';

import { THREE, TWEEN } from './imports.js';

import { updateRaycasterInteraction } from './interaction.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'stats.js';
//import typefaceFont from 'three/examples/fonts/helvetiker_regular.typeface.json';

import { onPageLoad, authorizationReq, setFestivalPlaylist, setTimeRangeLong, setTimeRangeMid, setTimeRangeShort } from "./spotify.js";
import { log } from 'three/examples/jsm/nodes/Nodes.js';

let sizes, canvas, scene, camera, helper, renderer, controls, trackControls, hemiLightHelper, lastCamPosition, inhaltGroup, heavyRotGroup, lastIntersected;
export {camera, heavyRotGroup, inhaltGroup, scene};
export const minCameraZ = 1000;
export const maxCameraZ = 1500;
let inEinemBereich = false;
let tweenAktiviert = false;
let freeMovement = true;
export const targetPoints = {};
const bereichOffsetVorne = 400;
const bereichDampingVorne = bereichOffsetVorne / 2;
const bereichOffsetHinten = 100;
const bereichDampingHinten = bereichOffsetHinten / 1.2;
const zoomSpeedNorm = 0.3;
const zoomSpeedBereich = 0.02;
const tweenStartDistance = 10;
const cameraTargetDistance = 300;
// let lastIntersected = null;


const stats = new Stats();
// stats.showPanel(0);
document.body.appendChild(stats.dom);

/** Raycaster */
export const raycaster = new THREE.Raycaster();
export let mouse = new THREE.Vector2();

window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    // handleMouseMove();
}, false);

/**
 * Berechnet die Position der Maus im 3D-Raum relativ zur aktuellen Kameraposition und der Mausposition auf dem Bildschirm.
 * @param {THREE.Vector2} mouse - Der Mausvektor, normalisiert (-1 bis 1 in beiden Achsen).
 * @param {THREE.Camera} camera - Die verwendete Kamera in der Szene.
 * @returns {THREE.Vector3} Die berechnete Position der Maus im 3D-Raum.
 */
export function getMouse3DPosition(mouse, camera) {
    // Erstelle einen neuen 3D-Vektor, der den normalisierten Mausvektor aufnimmt
    const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5); // z=0.5 stellt sicher, dass der Vektor in den Raum vor der Kamera projiziert wird.

    // Die Funktion unproject transformiert den normalisierten Gerätekoordinatenvektor in Weltkoordinaten
    vector.unproject(camera); 

    // Berechne die Richtung vom Kamerastandpunkt zum Mausvektor
    const dir = vector.sub(camera.position).normalize(); 

    // Berechne die Distanz zur z=0 Ebene, basierend auf der Annahme, dass die Kamera in Richtung der negativen z-Achse sieht
    const distance = -camera.position.z / dir.z; 

    // Berechne die genaue Position im 3D-Raum, indem die berechnete Distanz entlang der Richtungsvektor von der aktuellen Kameraposition aus angewendet wird
    const pos = camera.position.clone().add(dir.multiplyScalar(distance));

    return pos; // Gibt die berechnete 3D-Position der Maus zurück
}



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
    camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 75, 700 );
    camera.position.z = 3000;
    // camera.far = 500;
    // camera.focus = 1000;
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
    if((pos <= (targetPoints.topSong + bereichOffsetVorne)) && (pos >= (targetPoints.topSong - bereichOffsetHinten))){
        handleBereich(pos, targetPoints.topSong);
    }

    //Bereich OnRepeat
    if ((pos <= (targetPoints.onRepeat + bereichOffsetVorne)) && (pos >= (targetPoints.onRepeat - bereichOffsetHinten))) {
        handleBereich(pos, targetPoints.onRepeat);
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

    lastIntersected = updateRaycasterInteraction(raycaster, mouse, camera, heavyRotGroup, lastIntersected);
    
    // aktualiseren der TrackballControls und der TWEEN-Animationen
    trackControls.update();
    TWEEN.update(); //!! Bereitet gerade Probleme, bounced zurück beim scrollen !!

    // Rendern der Szene und anfordern einer neuen Animation
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
    // console.log(camera.position.z);
}



// Funktion zum erstellen von TextMeshes
export async function createTextMesh(text, fontsize, x, y, z, rotationY) {
    return new Promise((resolve, reject) => {
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
            inhaltGroup.add(textMesh);
            // Positionierung des TextMeshes
            textMesh.position.x = x;
            textMesh.position.y = y;
            textMesh.position.z = z;
            //Rotation um Y-Achse bei angebenem Winkel
            if (rotationY) {
                textMesh.rotateY(rotationY * Math.PI / 180);
            }

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

function createCube(options) {
    const geometry = new THREE.BoxGeometry();
    const materials = options.materials.map(material => {
        if (typeof material === 'string' && (material.startsWith('http') || material.match(/\.(jpeg|jpg|gif|png)$/))) {
            return new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(material) });
        } else {
            return new THREE.MeshBasicMaterial({ color: material });
        }
    });

    const cube = new THREE.Mesh(geometry, materials);
    cube.rotation.y = Math.PI + (Math.PI / 2);
    cube.scale.set(options.scale, options.scale, options.scale);
    cube.position.z = options.positionZ;
    scene.add(cube);

    return cube;
}

function createProfil() {
    let profil = getProfil();
    let recentlyPlayed = getRecentlyPlayed();
    let winkel = 0;
    createBildMesh(profil.imageUrl, + 80, 0, targetPoints.profil, winkel, 50);
    createTextMesh("Hey \n" + profil.name + " !", 10, -80, 30, targetPoints.profil, 0);
    createTextMesh("Followers: " + profil.follower.toString(), 3, 55, -30, targetPoints.profil, winkel);

    let recGroupX = -80;
    let recGroupY = 0;
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
    let artistPics = [];
    let i = 0;
    //console.log("createTopArtists, hier sind sie: " + topArtists);
    //console.log("Diese Profil gehört: " + profil.name);
    createTextMesh(profil.name + "'s", 20, -300, -90, targetPoints.topArtist, 0);
    let headlineTwo = createTextMesh("\nTop Artists", 40, -300, -80, targetPoints.topArtist, 0);
    while (i < topArtists.length) {
        let x = 200 + i * -20;
        let y = -60 + i * 40;
        let z = targetPoints.topArtist - (i * 100);
        // let BildMesh = createBildMesh(topArtists[i].imageUrl, x, y, z, 0, 100);
        artistPics.push(topArtists[i].imageUrl);
        // topArtists[i].mesh = BildMesh;//zwischenspeichern des Meshes im Array
        let artistName = createTextMesh(topArtists[i].name, 5, x + 45, y + 17, z, 0);
        i++;
    }

    const cubeOptions = {
        materials: [],
        positionZ: targetPoints.topArtist,
        scale: 100,
        //rotationY: 2
    };

    for (let i = 0; i < artistPics.length; i++) {
        cubeOptions.materials.push(artistPics[i]);
    }
    const myCube = createCube(cubeOptions);
    console.log(myCube);    
}

// Funktion zum Erstellen der Heavy Rotation
async function createHeavyRotation() {
    const heavyRotation = getOnRepeat();
    heavyRotGroup = new THREE.Group();
    heavyRotGroup.position.set(110, 0, targetPoints.onRepeat - 50);
    inhaltGroup.add(heavyRotGroup);
    scene.add(heavyRotGroup);

    const baseRadius = 150;
    const radialOffset = 30; // Zusätzliche Radialverschiebung für jedes zweite Element
    const numElements = heavyRotation.length;

    for (let e = 0; e < numElements; e++) {
        let theta = (2 * Math.PI / numElements) * e;
        let effectiveRadius = baseRadius + ((e % 2 === 0) ? radialOffset : 0); // Erhöhe Radius für jedes zweite Element
        let x = effectiveRadius * Math.cos(theta);
        let y = effectiveRadius * Math.sin(theta);
        // Berechnet z-Position basierend auf der Position des Elements
        let z = - 5; // Standardwert
        if (e % 3 === 1) {
            z = 20; // Zweites Element, 20 Einheiten nach vorne
        } else if (e % 3 === 2) {
            z = 10; // Drittes Element, 10 Einheiten nach vorne
        }

        // Erstelle BildMesh und füge der Heavy Rotation Group hinzu
        let bildMesh = createBildMesh(heavyRotation[e].image, x, y, z, -2, 60);
        heavyRotation[e].mesh = bildMesh;
        bildMesh.userData.name = heavyRotation[e].name;
        bildMesh.userData.artists = heavyRotation[e].artists;
        bildMesh.userData.originalX = x;
        bildMesh.userData.originalY = y;
        bildMesh.userData.originalZ = z;
        heavyRotGroup.add(bildMesh);
    }

    await createTextMesh("Your Heavy \nRotation", 40, -350, 100, targetPoints.onRepeat - 20, 30);
    await createTextMesh("Hover to see more", 20, -350, 0, targetPoints.onRepeat - 20, 30);
    console.log("create heavy rotation");
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

// Funktion zum Erstellen der Playlist
function createPlaylist() {
    let playlist = getPlaylist();
    let i = 0;
    createTextMesh("Your \nunwrapped \nPlaylist", 10, -85, 20, targetPoints.playlist);
    //createButton 
    
}

function createAll() {
    console.log("createAll aufgerufen");
    inhaltGroup = new THREE.Group();
    inhaltGroup.name = "inhaltGroup";
    createProfil();
    createTopArtist();
    createTopSongs();
    createHeavyRotation();
    createPlaylist();
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