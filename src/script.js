import { THREE, TWEEN } from './imports.js';

// import { updateRaycasterInteraction } from './heavyRotInteraction.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'stats.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DirectionalLight } from 'three';
import { AmbientLight } from 'three'; 
import { HemisphereLight } from 'three';
import { PMREMGenerator } from 'three';

import { onPageLoad, setFestivalPlaylist, getMe, getTopSongs, getTopArtists, getOnRepeat, getRecentlyPlayed, loginWithSpotifyClick, refreshToken ,logoutClick } from "./spotify.js";
import fensterTutorialImg from '../static/images/vapor.png';
import profilPlaceholder from '../static/images/profil_placeholder.png';
import offlineImage from '../static/images/offline.png';
import onlineImage from '../static/images/online.png';
import help from '../static/images/help.png';
import navProfilIcon from '../static/images/nav_profil_icon.png';
import navArtistsIcon from '../static/images/nav_artists_icon.png';
import navSongsIcon from '../static/images/nav_songs_icon.png';
import navRotationIcon from '../static/images/nav_rotation_icon.png';
import navPlaylistIcon from '../static/images/nav_playlist_icon.png';
import { log } from 'three/examples/jsm/nodes/Nodes.js'; 

let sizes, canvas, scene, camera, helper, renderer, controls, trackControls, hemiLightHelper, lastCamPosition, inhaltGroup, heavyRotCircleGroup, lastIntersected, topArtistsCube, topArtistCountText;
// export {camera, heavyRotCircleGroup as heavyRotCircleGroup, inhaltGroup, scene};
export const targetPoints = {};
let inEinemBereich = false;
let tweenAktiviert = false; 
let freeMovement = true;
let timeRange = "long_term";
let topArtistsRotationIndex;
let initCubeAnimationPlayed = false;
const gesamtTiefe = 3000;
const bereichOffsetVorne = 400;
const bereichDampingVorne = bereichOffsetVorne / 2;
const bereichOffsetHinten = 100;
const bereichDampingHinten = bereichOffsetHinten / 1.2;
const zoomSpeedNorm = 0.3;
const zoomSpeedBereich = 0.02;
const tweenStartDistance = 10;
const cameraTargetDistance = 100;
const progBarBottom = 2;

let topArtistsRank = new THREE.Mesh;
let topArtistsName = new THREE.Mesh;

const stats = new Stats();
// Textgrößen Konstanten
const headlineSize = 40;
const textSize = 10;
const textSmallSize = 5;
const textBigSize = 20;

const textHeight = 0;
const textWidth = 0;
const textDepth = 0;


// stats.showPanel(0);
//document.body.appendChild(stats.dom); 

/** Raycaster */
export const raycaster = new THREE.Raycaster();
export let mouse = new THREE.Vector2();

window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}, false);

/**
 * Berechnet die Position der Maus im 3D-Raum auf der z=0 Ebene.
 * @param {THREE.Vector2} mouse - Der Mausvektor, normalisiert (-1 bis 1 in beiden Achsen).
 * @param {THREE.PerspectiveCamera} camera - Die verwendete Kamera in der Szene.
 * @returns {THREE.Vector3} Die berechnete Position der Maus auf der z=0 Ebene.
 */
export function getMouse3DPosition(mouse, camera) {
    // Projiziert den normalisierten Gerätekoordinatenvektor (mouse.x, mouse.y) auf die z=0 Ebene
    const planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    // Finde den Schnittpunkt des Strahls mit der z=0 Ebene
    const intersects = new THREE.Vector3();
    raycaster.ray.intersectPlane(planeZ, intersects);
    // console.log("Maus aus 3D: ", intersects);
    return intersects; // Gibt die berechnete 3D-Position der Maus zurück
}


/**cursor */
const cursor = {};

const loadingManager = new THREE.LoadingManager();
const loadingLabel = document.getElementById('progress-bar-label');
const progressBar = document.getElementById('progress-bar');
const progressBarContainer = document.querySelector('.progress-bar-container');

// loadingManager.onStart = function(url, itemsLoaded, itemsTotal) {
//     loadingLabel.innerText = "Nearly done...";
// }

// let lastProgress = 0; 
// loadingManager.onProgress = function(url, itemsLoaded, itemsTotal) {
//     let currentProgress = (itemsLoaded / itemsTotal) * 100;

//     if(currentProgress > lastProgress) {
//         progressBar.value = currentProgress;
//         lastProgress = currentProgress;
//     }
// };

// loadingManager.onLoad = function() {
//     setTimeout(() => {
//             progressBarContainer.style.display = 'none';
//     }, 1500);
// }

await init(); // Starte die Initialisierung der Szene


/**
 * Initialisiert die Anwendung.
 * Erstellt alle nötigen Elemente und fügt sie der Szene hinzu.
 * @async
 * @function init
 * @returns {Promise<void>}
 */
async function init() {
    console.log("Init");
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

    /**
     * Camera
     */
    camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 10, 550 );
    camera.position.z = gesamtTiefe;
    scene.add(camera);
    lastCamPosition = camera.position.z;
    // let light = new THREE.DirectionalLight(0xffff00, 5);
    //   scene.add(light);
    // let ambientLight = new THREE.AmbientLight(0x404040, 2);
    // scene.add(ambientLight);

    //Inhalt Group definieren
    inhaltGroup = new THREE.Group();
    inhaltGroup.name = "inhaltGroup";
    scene.add(inhaltGroup);
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
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: canvas});
    renderer.setClearColor(0xffffff, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(sizes.width, sizes.height);
    //document.body.appendChild(renderer.domElement);

    //Track Controls
    trackControls = new TrackballControls(camera, renderer.domElement);
    trackControls.noRotate = true;
    trackControls.noPan = true;
    trackControls.noZoom = false;
    trackControls.zoomSpeed = zoomSpeedNorm;
    trackControls.staticMoving = false;
    trackControls.dynamicDampingFactor = 0.04;

    //Help Button
    document.getElementById("help").src = help;
    document.getElementById("help").style.display = "none";

    //Nav Bar
    document.getElementById("navProgress").style.bottom = progBarBottom + "%";
    document.getElementById("navBar").style.display = "none";

    document.getElementById("navProfil").style.bottom = (1 - (targetPoints.profil + cameraTargetDistance) / gesamtTiefe) * 100 + "%";
    document.getElementById("navProfilImg").src = navProfilIcon;
    document.getElementById("navArtists").style.bottom = (1 - (targetPoints.topArtist + cameraTargetDistance) / gesamtTiefe) * 100 + "%";
    document.getElementById("navArtistsImg").src = navArtistsIcon;
    document.getElementById("navSongs").style.bottom = (1 - (targetPoints.topSong + cameraTargetDistance) / gesamtTiefe) * 100 + "%";
    document.getElementById("navSongsImg").src = navSongsIcon;
    document.getElementById("navOnRepeat").style.bottom = (1 - (targetPoints.onRepeat + cameraTargetDistance) / gesamtTiefe) * 100 + "%";
    document.getElementById("navOnRepeatImg").src = navRotationIcon;
    document.getElementById("navPlaylist").style.bottom = (1 - (targetPoints.playlist + cameraTargetDistance) / gesamtTiefe) * 100 + "%";
    document.getElementById("navPlaylistImg").src = navPlaylistIcon;


    //Erstelle alle Geometrien, wenn Nutzer bereits authentifiziert ist
    if (await (onPageLoad())) {
        const profil = await getMe();
        document.getElementById("fensterHeadline").innerText = "Welcome, " + profil.name + "!";
        document.getElementById("fensterTutorialImg").src = fensterTutorialImg;
        document.getElementById("profilImage").src = profil.imageUrl;
        document.getElementById("profilImage").classList.add("windows95edgesImage");
        document.getElementById("loginStatusImage").src = onlineImage;
        document.getElementById("loginStatusLabel").innerText = "online";
        document.getElementById("spotifyConnectButton").innerText = "Start unwrapped!"
        document.getElementById("spotifyConnectButton").addEventListener("click", closeOverlay);
        document.getElementById("logoutButton").addEventListener("click", logoutClick);
        document.getElementById("timeRange").addEventListener("change", function() {
            deleteGroup();
            timeRange = this.value;
            createAll();
        });
        await createAll();
    }else{
       document.getElementById("fensterTutorialImg").src = fensterTutorialImg;
       document.getElementById("profilImage").src = profilPlaceholder;
       document.getElementById("loginStatusImage").src = offlineImage;
       document.getElementById("loginStatusLabel").innerText = "offline";
       document.getElementById("spotifyConnectButton").addEventListener("click", loginWithSpotifyClick);
       document.getElementById("timeRangeDiv").style.display = "none";
       document.getElementById("logoutButton").style.display = "none";
    }

    //Listener setzen
    window.addEventListener('resize', onWindowResize);
    // document.getElementById("closebtn").addEventListener("click", closeOverlay);
    document.getElementById("help").addEventListener("click", openOverlay);
    // document.getElementById("delete").addEventListener("click", deleteGroup);
    // document.getElementById("create").addEventListener("click", createAll);
    // document.getElementById("refreshToken").addEventListener("click", refreshToken);
    // document.getElementById("playlist").addEventListener("click", () => {
    //     setFestivalPlaylist(timeRange);
    // });
    
    //Nav Bar Listener
    document.getElementById("navPlaylist").addEventListener("click", () => {
        bringeZumBereich(targetPoints.playlist);
    });
    document.getElementById("navOnRepeat").addEventListener("click", () => {
        bringeZumBereich(targetPoints.onRepeat);
    });
    document.getElementById("navSongs").addEventListener("click", () => {
        bringeZumBereich(targetPoints.topSong);
    });
    document.getElementById("navArtists").addEventListener("click", () => {
        bringeZumBereich(targetPoints.topArtist);
    });
    document.getElementById("navProfil").addEventListener("click", () => {
        bringeZumBereich(targetPoints.profil);
    });



    window.addEventListener('mousemove', (event) => {
        cursor.x = event.clientX / sizes.width - 0.5;
        cursor.y = event.clientY / sizes.height - 0.5;
    })
}

function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("help").style.display = "block";
    document.getElementById("navBar").style.display = "block";
}

function openOverlay() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("help").style.display = "none";
    document.getElementById("navBar").style.display = "none";
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function setProgressBar() {
    var barProgress = 0;
    const progBarMaxH = 100 - 2 * progBarBottom;
    const camProgress = (1 - (Math.round(camera.position.z) / gesamtTiefe)) * 100;
    barProgress = camProgress * (progBarMaxH / 100);
    
    document.getElementById("navProgress").style.height = barProgress + "%";
}

/**
 * Überprüft die Position der Kamera und ruft entsprechende Funktionen auf, basierend auf der Position.
 */
function checkCamPosition() {
    //console.log("CheckCamPosition");
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

/**
 * Behandelt den Bereich basierend auf der (Kamera) Position und dem Ziel-Punkt.
 *
 * @param {number} pos - Die aktuelle (Kamera) Position.
 * @param {number} tp - Der Ziel-Punkt.
 */
function handleBereich(pos, tp) {
    //console.log("Bereich: " + tp);
    //Kamera ist im Eintritts-Damping des Bereichs
    if ((pos <= (tp + bereichOffsetVorne)) && (pos >= (tp + bereichOffsetVorne - bereichDampingVorne))) {
        trackControls.zoomSpeed = zoomSpeedBereich + (pos - ((tp + bereichOffsetVorne) - bereichDampingVorne)) * ((zoomSpeedBereich - zoomSpeedNorm) / (-bereichDampingVorne));
    }
    //Überprüfen ob Kamera in den Bereich eintritt 
    if ((pos <= (tp + bereichOffsetVorne - bereichDampingVorne)) && (pos >= (tp - bereichOffsetHinten + bereichDampingHinten))) {
        //Kamera ist in neuem Bereich
        if (!inEinemBereich) {
            inEinemBereich = true;
            trackControls.zoomSpeed = zoomSpeedBereich;
        }
        //TWEEN Animation zur Camera Target Position
        if ((pos <= (tp + bereichOffsetVorne - bereichDampingVorne - tweenStartDistance)) && (pos >= (tp - bereichOffsetHinten + bereichDampingHinten + tweenStartDistance)) && (!tweenAktiviert)) {
            tweenAktiviert = true;
            TrackballControls.noZoom = true;
            new TWEEN.Tween(camera.position)
                .to({
                    z: tp + cameraTargetDistance
                    }, 2000)
                .easing(TWEEN.Easing.Exponential.Out)
                .onComplete(() => {
                    if(tp == targetPoints.topArtist) {
                        handleTopArtistBereich();
                    } else {
                        //console.log("TWEEN abgeschlossen");
                        TrackballControls.noZoom = false;
                    }
                })
                .start();
        }
    }
    //Kamera verlaesst Bereich 
    if (((pos > (tp + bereichOffsetVorne - bereichDampingVorne)) || (pos < (tp - bereichOffsetHinten + bereichDampingHinten))) && inEinemBereich) {
        inEinemBereich = false;
        tweenAktiviert = false;
    }
    //Kamera ist im Austritts-Damping
    if ((pos >= (tp - bereichOffsetHinten)) && (pos <= (tp - bereichOffsetHinten + bereichDampingHinten))) {
        //console.log("Austritts-Damping");
        trackControls.zoomSpeed = zoomSpeedBereich - (pos - ((tp - bereichOffsetHinten) + bereichDampingHinten)) * ((zoomSpeedBereich - zoomSpeedNorm) / (-bereichDampingHinten));
    }
}

/**
 * Behandelt den Bereich der Top-Künstler.
 * Wird aufgerufen wenn die Kamera in den Bereich der Top-Künstler eintritt.
 * Steuert die Rotation des Würfels und die Anzeige der Künstlerinformationen.
 * 
 * @async
 * @function handleTopArtistBereich
 * @returns {Promise<void>}
 */
async function handleTopArtistBereich() {
    window.addEventListener('wheel', rotateCube, { passive: true });
    let initialTween = new TWEEN.Tween(topArtistsCube.rotation);
    topArtistsCube.rotation.set(0, Math.PI + (Math.PI / 2), 0);
    if (!initCubeAnimationPlayed) {
        initialAnimation();
        initCubeAnimationPlayed = true;
    }
    topArtistsRotationIndex = 0;
    let isAnimating = false;
    trackControls.noZoom = true; // Verhindert Zoom während der Rotation
    let rotationSequence = [
        [ //Auf 1
            { axis: 'y', angle: Math.PI / 2 }    
        ],
        [ // Von 1 auf 2
            { axis: 'y', angle: -Math.PI }
        ],
        [ // Von 2 auf 3
            { axis: 'y', angle: -Math.PI / 2 },
            { axis: 'x', angle: Math.PI / 2 }
        ],
        [ // Von 3 auf 4
            { axis: 'x', angle: Math.PI}
        ],
        [ // Von 4 auf 5
            { axis: 'x', angle: Math.PI / 2}   
        ],
        [ // Von 5 auf 6
            { axis: 'y', angle: Math.PI },
        ]
    ];

    /**
     * Dreht den Würfel und aktualisiert die angezeigten Informationen.
     * 
     * @param {Event} event - Das Ereignis, das den Funktionsaufruf ausgelöst hat.
     * @returns {Promise<void>} Ein Promise, das gelöst wird, wenn die Animation abgeschlossen ist.
     */
    async function rotateCube(event) {
        if (isAnimating || event.deltaY === 0) return;
        if(initialTween.isPlaying()){
            initialTween.stop();
            // Würfel auf ausgangspoition zurücksetzen
            let resetTween = new TWEEN.Tween(topArtistsCube.rotation)
            .to({ x: 0, y: Math.PI + (Math.PI / 2), z: 0 }, 300)
            .easing(TWEEN.Easing.Cubic.InOut)
            .start();
        }
        isAnimating = true;
        topArtistsRotationIndex = (topArtistsRotationIndex + 1) % rotationSequence.length; // Immer zum nächsten Schritt
        if(topArtistsRotationIndex == 0) {
            trackControls.noZoom = false;
            clearAndRemoveObject(topArtistsRank);
            clearAndRemoveObject(topArtistsName);
            cleanup();
        }
        let steps = rotationSequence[topArtistsRotationIndex];
        let tween;
        // Führt jede Rotation aus dem Schritt in der Sequenz aus
        steps.forEach(async (step, index) => {
            console.log("Schritt: ", step.axis, step.angle);
            let rotation = {};
            rotation[step.axis] = topArtistsCube.rotation[step.axis] + step.angle;
            tween = new TWEEN.Tween(topArtistsCube.rotation)
                .to(rotation, 800)
                .easing(TWEEN.Easing.Cubic.InOut);                
            
            if (index === steps.length - 1) { // Nur die letzte Animation setzt den onComplete-Handler
                tween.onComplete(() => {
                    setTimeout(() => {
                        isAnimating = false;
                    }, 800);
                });
            }
            tween.start();
        });
        clearAndRemoveObject(topArtistsRank);
        clearAndRemoveObject(topArtistsName);
        topArtistsRank = await createTextMesh("Top " + (topArtistsRotationIndex + 1), 20, 100, 40, targetPoints.topArtist -200, 0, 0, 0x000000, 1, 'W95FA_Regular.typeface');
        topArtistsName = await createTextMesh(topArtistsCube.userData.artistNames[topArtistsRotationIndex], 15, 100, 10, targetPoints.topArtist -200, 0, 0, 0x000000, 1, 'W95FA_Regular.typeface');
        inhaltGroup.add(topArtistsRank);
        inhaltGroup.add(topArtistsName);
    }

    /**
     * Funktion zum Aufräumen und Zurücksetzen des Würfels.
     * Entfernt den Event-Listener für das Scrollen und setzt den Würfel auf die erste Rotation aus der Sequenz zurück.
     * @async
     * @function cleanup
     * @returns {Promise<void>}
     */
    async function cleanup() {
        window.removeEventListener('wheel', rotateCube);
        // Setze den Würfel auf die erste Rotation aus der Sequenz zurück
        let firstStep = rotationSequence[0];
        let rotation = {};
        firstStep.forEach(step => {
            rotation[step.axis] = step.angle; // Setze die Winkel direkt aus der ersten Sequenz
        });
        
        new TWEEN.Tween(topArtistsCube.rotation)
            .to(rotation, 500)
            .easing(TWEEN.Easing.Cubic.InOut)
            .start();
    };

    /**
     * Initiale Würfel-Animation beim ersten Betreten des Top-Artists-Bereichs.
     */
    function initialAnimation() {
            initialTween
            .to({ x: topArtistsCube.rotation.x - Math.PI / 10 }, 600)
            .easing(TWEEN.Easing.Cubic.InOut)
            .yoyo(true) // Rückkehr zur Ausgangsposition
            .repeat(2) // Wiederhole die Bewegung einmal
            .onComplete(() => {
                if (!isAnimating) { // Wenn keine andere Animation aktiv ist, führe Rückbewegung aus
                    new TWEEN.Tween(topArtistsCube.rotation)
                        .to({ x: topArtistsCube.rotation.x + Math.PI / 10 }, 600)
                        .easing(TWEEN.Easing.Cubic.InOut)
                        .start();
                }
            });
    
        initialTween.start();
    }
}


function bringeZumBereich(tp) {
    let target = tp + cameraTargetDistance;
    freeMovement = false;
    trackControls.noZoom = true;

    new TWEEN.Tween(camera.position).to(
        {
            z: target
        }, 3000
    )
    .easing(TWEEN.Easing.Exponential.Out)
    .onComplete(() => {
        trackControls.noZoom = false;
        freeMovement = true;
        if(tp == targetPoints.topArtist) {
            handleTopArtistBereich();
        }
    })
    .start();
}

const clock = new THREE.Clock();
let previousTime = 0;


/**
 * Funktion zum Steuern des Haupt-Animations-Loops.
 * @function tick
 * @returns {void}
 */
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
    
    if (lastCamPosition != Math.round(camera.position.z)) {
        setProgressBar();
        if (freeMovement) {
            checkCamPosition();
            //console.log("Es bewegt sich. " + Math.round(camera.position.z));
        }
    }
    //console.log(lastCamPosition);
        
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

    iconAnimationPl();
   

    lastIntersected = updateRaycasterInteraction();
    // lastIntersected = updateRaycasterInteraction(raycaster, mouse, camera, heavyRotCircleGroup, lastIntersected);
    
    // aktualiseren der TrackballControls und der TWEEN-Animationen
    trackControls.update();
    TWEEN.update();

    // Rendern der Szene und anfordern einer neuen Animation
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
}


/**
 * Erstellt ein TextMesh mit dem angegebenen Text, Schriftgröße und Position.
 * 
 * @param {string} text - Der Text, der im TextMesh angezeigt werden soll.
 * @param {number} fontsize - Die Schriftgröße des Textes.
 * @param {number} x - Die x-Koordinate der Position des TextMeshes.
 * @param {number} y - Die y-Koordinate der Position des TextMeshes.
 * @param {number} z - Die z-Koordinate der Position des TextMeshes.
 * @param {number} rotationY - Der Winkel, um den das TextMesh um die Y-Achse gedreht werden soll (in Grad).
 * @returns {Promise<THREE.Mesh>} Ein Promise, das das erstellte TextMesh enthält.
 * @throws {Error} Wenn ein Fehler beim Laden der Schriftart auftritt.
 */
    
export async function createTextMesh(text, fontsize, x, y, z,  rotationX, rotationY, color, opacity, fontName) {
    return new Promise((resolve, reject) => {
    const fontLoader = new FontLoader(loadingManager)
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

/**
 * Erstellt ein Bild-Mesh mit den angegebenen Parametern.
 * @param {string} bildUrl - Die URL des Bildes, das geladen werden soll.
 * @param {number} x - Die x-Koordinate der Position des Meshes.
 * @param {number} y - Die y-Koordinate der Position des Meshes.
 * @param {number} z - Die z-Koordinate der Position des Meshes.
 * @param {number} rotationY - Die Y-Rotation des Meshes in Grad.
 * @param {number} bildGroesse - Die Größe des Meshes.
 * @returns {Promise<THREE.Mesh>} Ein Promise, das das erstellte Bild-Mesh enthält.
 */
async function createBildMesh(bildUrl, x, y, z, rotationY, bildGroesse) {
    return new Promise((resolve, reject) => {
        new THREE.TextureLoader(loadingManager).load(
            bildUrl,
            (texture) => {
                const geometry = new THREE.PlaneGeometry(bildGroesse, bildGroesse);
                const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
                let bildMesh = new THREE.Mesh(geometry, material);
                bildMesh.position.set(x, y, z);
                bildMesh.rotateY(rotationY * (Math.PI / 180));
                bildMesh.isHovered = false;
                resolve(bildMesh);
            },
            undefined,
            (error) => {
                reject(error);
            }
        );
    });
}

/**
 * Erstellt einen ThreeJS Würfel mit den angegebenen Optionen.
 *
 * @param {Object} options - Die Optionen für den Würfel.
 * @param {Array} options.materials - Ein Array von Materialien für die Seiten des Würfels.
 * @param {number} options.scale - Der Skalierungsfaktor des Würfels.
 * @param {number} options.positionZ - Die Z-Position des Würfels.
 * @returns {THREE.Mesh} - Der erstellte Würfel.
 */
function createCube(options) {
    const geometry = new THREE.BoxGeometry();
    const materials = options.materials.map(material => {
        if (typeof material === 'string' && (material.startsWith('http') || material.match(/\.(jpeg|jpg|gif|png)$/))) {
            return new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader(loadingManager).load(material) });
        } else {
            return new THREE.MeshBasicMaterial({ color: material, transparent: true, opacity: 1 });
        }
    });

    const cube = new THREE.Mesh(geometry, materials);
    cube.rotation.x = 0;
    cube.rotation.y = Math.PI + (Math.PI / 2);
    cube.rotation.z = 0;
    cube.scale.set(options.scale, options.scale, options.scale);
    cube.position.z = options.positionZ;
    cube.name = "TopArtists Cube";

    return cube;
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
    let contentProfil = [];

    contentProfil.push(await createBildMesh(profil.imageUrl, + 80, 0, targetPoints.profil, winkel, 50));
    contentProfil.push(await createTextMesh("Hey \n" + profil.name + " !", textBigSize, -80, 30, targetPoints.profil,0,0,0x000000, 1,'Jersey 15_Regular'));
    contentProfil.push(await createTextMesh("Followers: " + profil.follower.toString(), textSmallSize, 55, -30, targetPoints.profil,winkel,0,0x000000, 1,'W95FA_Regular.typeface'));
    
    let recGroupX = -80;
    let recGroupY = 0;
    let recText = 2;
    let recBildG = 25;
    let recBildRot = 0;

    // for (let i = 0; i < 4; i++) {
    //     let x = recGroupX + (i % 2) * 30;
    //     let y = recGroupY - Math.floor(i / 2) * 30;

    for(let i = 0; i < recentlyPlayed.length; i++){
        if(recentlyPlayed[i].name.length >= 20){
            recentlyPlayed[i].name = recentlyPlayed[i].name.substring(0,20) + "...";
        }
    }

    contentProfil.push(await createTextMesh("Recently Played Songs", textSize, recGroupX, recGroupY, targetPoints.profil,0, 0, 0x000000,1,'Jersey 15_Regular'));

    contentProfil.push(await createBildMesh(recentlyPlayed[0].image, recGroupX + 13, recGroupY - 18, targetPoints.profil, recBildRot, recBildG));
    contentProfil.push(await createTextMesh(recentlyPlayed[0].name, recText, recGroupX + 1, recGroupY - 34, targetPoints.profil, recBildRot,0,0x000000, 1,'W95FA_Regular.typeface'));

    contentProfil.push(await createBildMesh(recentlyPlayed[1].image, recGroupX + 43, recGroupY - 18, targetPoints.profil, recBildRot, recBildG));
    contentProfil.push(await createTextMesh(recentlyPlayed[1].name, recText, recGroupX + 31, recGroupY - 34, targetPoints.profil, recBildRot,0,0x000000, 1,'W95FA_Regular.typeface'));

    contentProfil.push(await createBildMesh(recentlyPlayed[2].image, recGroupX + 13, recGroupY - 48, targetPoints.profil, recBildRot, recBildG));
    contentProfil.push(await createTextMesh(recentlyPlayed[2].name, recText, recGroupX + 1, recGroupY - 64, targetPoints.profil, recBildRot,0,0x000000, 1,'W95FA_Regular.typeface'));

    contentProfil.push(await createBildMesh(recentlyPlayed[3].image, recGroupX + 43, recGroupY - 48, targetPoints.profil, recBildRot, recBildG));
    contentProfil.push(await createTextMesh(recentlyPlayed[3].name, recText, recGroupX + 31, recGroupY - 64, targetPoints.profil, recBildRot,0,0x000000, 1,'W95FA_Regular.typeface'));

    contentProfil.push(await createTextMesh("j", textBigSize, 45, -35, targetPoints.profil+40,0, -25, 0x000000,0.4,'Yarndings 12_Regular'));
    contentProfil.push(await createTextMesh("k", textSize,-80, -95, targetPoints.profil+20,0, 12, 0x000000,0.4,'Yarndings 12_Regular'));
    contentProfil.push(await createTextMesh("y", textBigSize-8, -30, 20, targetPoints.profil-40,-5, 15, 0x000000,0.3,'Yarndings 12_Regular'));

    // createGLTFMesh(0, -90, targetPoints.profil, 0, Math.PI, 0, 20, 'DP_Frame_001');
    return contentProfil;
}

/**
 * Erstellt die Top-Künstler-Seite.
 * 
 * @returns {Array} Ein Array mit den erstellten Inhalten der Top-Künstler-Seite.
 */
async function createTopArtist() {
    let topArtists = await getTopArtists(timeRange);
    let artistPics = [];
    let contentTopArtist = [];
    let topArtistZ = targetPoints.topArtist - 200;
    let headlineOne = await createTextMesh("Your", 20, -300, -90, topArtistZ,0, 0, 0x000000,1,'Jersey 15_Regular');
    let headlineTwo = await createTextMesh("\nTop 6 Artists", 40, -300, -80, topArtistZ, 0, 0, 0x000000,1,'Jersey 15_Regular');
    topArtistsRank = await createTextMesh("Top 1", 20, 100, 40, topArtistZ, 0, 0, 0x000000,1,'Jersey 15_Regular');
    topArtistsName = await createTextMesh(topArtists[0].name, 15, 100, 10, topArtistZ, 0, 0, 0x000000,1,'Jersey 15_Regular');

    const cubeOptions = {
        materials: [],
        positionZ: topArtistZ,
        scale: 100,
        rotationY: 2,
        rotationX: -8,
    };
    for (let i = 0; i < topArtists.length; i++) {
        artistPics.push(topArtists[i].imageUrl);
        cubeOptions.materials.push(artistPics[i]);
    }
    topArtistsCube = createCube(cubeOptions);
    topArtistsCube.userData.artistNames = topArtists.map(artist => artist.name); // Speichert die Namen im userData
    // alle Elemente in die Gruppe hinzufügen
    contentTopArtist.push(headlineOne);
    contentTopArtist.push(headlineTwo);
    contentTopArtist.push(topArtistsRank);
    contentTopArtist.push(topArtistsName);
    contentTopArtist.push(topArtistsCube);
    
    return contentTopArtist;
}

/**
 * Erstellt die Heavy-Rotation-Seite mit den am häufigsten abgespielten Songs.
 * @returns {Promise<Array<THREE.Object3D>>} Ein Array mit den erstellten Inhalten der Heavy-Rotation-Seite.
 */
async function createHeavyRotation() {
    const heavyRotation = await getOnRepeat();
    let contentHeavyRotation = [];
    heavyRotCircleGroup = new THREE.Group();
    heavyRotCircleGroup.name = "Heavy Rotation Circle";
    heavyRotCircleGroup.position.set(110, 0, targetPoints.onRepeat - 300);

    const baseRadius = 150;
    const radialOffset = 30; // Zusätzliche Radialverschiebung für jedes zweite Element
    const numElements = heavyRotation.length; 

    for (let e = 0; e < numElements; e++) {
        let theta = (2 * Math.PI / numElements) * e;
        let effectiveRadius = baseRadius + ((e % 2 === 0) ? radialOffset : 0); // Erhöht Radius für jedes zweite Element
        let x = effectiveRadius * Math.cos(theta);
        let y = effectiveRadius * Math.sin(theta);
        // Berechnet z-Position basierend auf der Position des Elements
        let z = - 5;
        if (e % 3 === 1) {
            z = 10; // Zweites Element, 20 Einheiten nach vorne
        } else if (e % 3 === 2) {
            z = 5; // Drittes Element, 10 Einheiten nach vorne
        }
        let bildMesh = await createBildMesh(heavyRotation[e].image, x, y, z, -2, 60);
        heavyRotation[e].mesh = bildMesh;
        bildMesh.userData.name = heavyRotation[e].name;
        bildMesh.userData.artists = heavyRotation[e].artists;
        bildMesh.userData.originalX = x;
        bildMesh.userData.originalY = y;
        bildMesh.userData.originalZ = z;
        heavyRotCircleGroup.add(bildMesh);
    }
    contentHeavyRotation.push(await createTextMesh("Your Heavy \nRotation", headlineSize, -350, 150, targetPoints.onRepeat - 250, 10, 30, 0x000000, 1, 'Jersey 15_Regular'));
    contentHeavyRotation.push(await createTextMesh("Hover to see more", textBigSize, -350, 50, targetPoints.onRepeat - 250, 10, 30, 0x000000, 1, 'Jersey 15_Regular'));
    contentHeavyRotation.push(heavyRotCircleGroup);

    return contentHeavyRotation;
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
async function createTopSongs() {
    const songs = await getTopSongs(timeRange);
    let contentTopSongs = [];
    
    //console.log(songs);
    contentTopSongs.push(await createTextMesh("Your Top Songs", headlineSize, -150, -100, targetPoints.topSong - 85 ,0, 0, 0x000000,1,'Jersey 15_Regular'));
    
    contentTopSongs.push(await createBildMesh(songs[0].imageUrl, 0, 10, targetPoints.topSong - 200, 0, 70));
    contentTopSongs.push(await createTextMesh("1: " + songs[0].name, textSize, -35, 50, targetPoints.topSong - 200,0,0,0x000000, 1,'W95FA_Regular.typeface'));
    contentTopSongs.push(await createGLTFMesh(0, -90, targetPoints.topSong - 200, 0, 0, 0, 50.0, 'pedestal'));

    contentTopSongs.push(await createBildMesh(songs[1].imageUrl, -120, -5, targetPoints.topSong - 155, 20, 70));
    contentTopSongs.push(await createTextMesh("2: " + songs[1].name, textSize, -155, 35, targetPoints.topSong - 145 ,0,20,0x000000, 1,'W95FA_Regular.typeface'));
    contentTopSongs.push(await createGLTFMesh(-120, -110, targetPoints.topSong - 155, 0,20, 0, 50, 'pedestal'));

    contentTopSongs.push(await createBildMesh(songs[2].imageUrl, 110, -15, targetPoints.topSong - 135, -20, 70));
    contentTopSongs.push(await createTextMesh("3: " + songs[2].name, textSize, 75,25, targetPoints.topSong - 135, 0,-20,0x000000, 1,'W95FA_Regular.typeface'));
    contentTopSongs.push(await createGLTFMesh(110, -120, targetPoints.topSong - 135, 0, -20, 0, 50 , 'pedestal'));
    
    return contentTopSongs;
}

async function iconAnimationPl(){

    let contentIconAni = [];
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

return contentIconAni;
} 

async function createPlaylist(){
    let contentPlaylist = [];
    contentPlaylist.push(await createTextMesh("Deine \nunwrapped \nPlaylist", headlineSize, -250, 85, targetPoints.playlist-40,0,25,0x000000, 1,'Jersey 15_Regular'));
    contentPlaylist.push(await createTextMesh("w", textBigSize, 55, 85, targetPoints.playlist,0, -25, 0x000000,0.3,'Yarndings 12_Regular'));
    contentPlaylist.push(await createTextMesh("x", textBigSize,-120, -75, targetPoints.playlist,0, 15, 0x000000,0.2,'Yarndings 12_Regular'));
    contentPlaylist.push(await createTextMesh("a", 1000, -580,-500, targetPoints.playlist-20,0,0,0x000000,0.1,'Yarndings 12_Regular'));
    
    return contentPlaylist;
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
    let contentEnd = [];
    contentEnd.push(await createTextMesh("THE END", headlineSize, -40, 0, targetPoints.playlist-500,0, 0, 0x000000,1,'Jersey 15_Regular'));
    // contentEnd.push(await createRingMesh(15,0,targetPoints.playlist-500,-35,15,0x42887E,150,160));
    // contentEnd.push(await createQuaderMesh(0,0,targetPoints.playlist-500,20,10, 120, 0xffffff));
    contentEnd.push(await createTextMesh("v", 150, -150,-100,targetPoints.playlist-470 ,0,0,0x000000,0.1,'Yarndings 12_Regular'));
    return contentEnd;
}

async function createAll() {
    let inhaltProfil = await createProfil();
    inhaltProfil.forEach(element => inhaltGroup.add(element));

    topArtistsRotationIndex = 0;
    let inhaltTopArtist = await createTopArtist();
    inhaltTopArtist.forEach(element => inhaltGroup.add(element));

    let inhaltTopSongs = await createTopSongs();
    inhaltTopSongs.forEach(element => inhaltGroup.add(element));

    let heavyRotation = await createHeavyRotation();
    heavyRotation.forEach(element => inhaltGroup.add(element));

    let playlist = await createPlaylist();
    playlist.forEach(element => inhaltGroup.add(element));

    let end = await createEND();
    end.forEach(element => inhaltGroup.add(element));
}

function deleteGroup() {
    clearGroup(inhaltGroup);
}

/**
 * Löscht alle Kinderobjekte von `obj`.
 * 
 * @param {Object} obj - Das Objekt, dessen Kinder gelöscht werden sollen.
 */
function clearGroup(obj) {
    if (obj === undefined || obj === null) return;
    obj.children.forEach(child => {
        clearAndRemoveObject(child);
    });
    while (obj.children.length > 0) {
        obj.remove(obj.children[obj.children.length - 1]);
    }
}

/**
 * Löscht und entfernt ein Objekt aus der Szene und entsorgt alle zugehörigen Ressourcen.
 * @param {THREE.Object3D} obj - Das zu löschende und zu entfernende Objekt.
 */
function clearAndRemoveObject(obj) {
    if (obj === undefined || obj === null) return;
    obj.traverse(node => {
        if (node instanceof THREE.Mesh) {
            node.geometry?.dispose(); // Entsorgt die Geometrie
            if (Array.isArray(node.material)) { // Entsorgt alle Materialien im Materialarray
                node.material.forEach(mat => mat.dispose());
            } else { // Entsorgt einzelnes Material
                node.material?.dispose();
            }
        }
        if (node.texture) {
            node.texture.dispose();
        }
    });
    while (obj.children.length > 0) {
        clearAndRemoveObject(obj.children[obj.children.length - 1]);
    }
    obj.parent?.remove(obj);
}

// ---------------------------- Interaktionen aus der alten heavyRotInteraction ----------------------------

const textMeshMap = new Map(); 

function updateRaycasterInteraction() {
    if (!isCameraInBounds(camera)) return lastIntersected;
    
    raycaster.setFromCamera(mouse, camera);
    let intersects = raycaster.intersectObjects(heavyRotCircleGroup.children);
    return processIntersects(intersects, lastIntersected);
}

function isCameraInBounds() {
    let minCameraZ = 1000;
    let maxCameraZ = 1500;
    return camera.position.z >= minCameraZ && camera.position.z <= maxCameraZ;
}

function isMouseNearCenter(intersect, threshold = 1.5) {
    const object = intersect.object;
    const bounds = new THREE.Box3().setFromObject(object); // Bounding Box des Objekts
    const size = bounds.getSize(new THREE.Vector3());
    const center = bounds.getCenter(new THREE.Vector3());
    const distance = intersect.point.distanceTo(center);
    const maxDistance = Math.min(size.x, size.y) * threshold / 2;

    return distance <= maxDistance; // Prüft, ob die Distanz innerhalb des gewünschten Bereichs ist
}

let lastHovered = null;

/**
 * Verarbeitet die Intersects und aktualisiert den letzten intersected  Zustand.
 * 
 * @param {Array} intersects - Ein Array von Schnittpunkten.
 * @param {Object} lastIntersected - Das zuletzt überlappende Objekt.
 * @returns {Object} - Das aktualisierte letzte überlappende Objekt.
 */
function processIntersects(intersects, lastIntersected) {
    if (intersects.length > 0) {
        const intersected = intersects[0].object;
        // Prüft, ob das Objekt gehovert wird und ob es nicht durch bestimmte Bedingungen blockiert ist
        if (isMouseNearCenter(intersects[0]) && lastIntersected !== intersected && intersected !== lastHovered && !intersected.userData.interactionBlocked && !intersected.userData.isAnimating) {
            resetObject(lastIntersected);
            animateAndDisplayText(intersected);
            lastIntersected = intersected;
            lastHovered = intersected; // Setzt lastHovered auf das aktuelle BildMesh
        }
    } else {
        resetObject(lastIntersected);
        lastIntersected = null;
        lastHovered = null; // Setzt lastHovered auf null, wenn kein BildMesh gehovert wird
    }
    return lastIntersected;
}

/**
 * Animiert ein Objekt und zeigt den Text für ein Objekt an.
 * 
 * @param {Object} obj - Das Objekt, für das der Text animiert und angezeigt werden soll.
 * @returns {Promise<void>} Ein Promise, das nach Abschluss der Animation aufgelöst wird.
 */
async function animateAndDisplayText(obj) {
    if (!obj.userData.isHovered && !obj.userData.animationActive) {
        obj.userData.isHovered = true;
        obj.userData.animationActive = true;

        let songName = await displaySongName(obj);
        centerTextMesh(songName);
        let songArtists = await displaySongArtist(obj);
        centerTextMesh(songArtists, -15);
        console.log(songName, songArtists);
        scaleObject(obj, 1.6); // Vergrößern des Objekts beim Hover

        moveObject(obj, 200);
    }
}

async function displaySongName(obj) {
    let songNameTextMesh = await createTextMesh(obj.userData.name, 10, 0, 0, 0,0,0,0x000000, 1,'W95FA_Regular.typeface');
    storeAndReturnMesh(obj, songNameTextMesh);
    inhaltGroup.add(songNameTextMesh);
    return songNameTextMesh;
}

async function displaySongArtist(obj) {
    const artistsArray = obj.userData.artists.map(artist => artist.name).join(", ");
    let songArtistTextMesh = await createTextMesh(artistsArray, 8, 0, -15,0,0,0,0x000000, 1,'W95FA_Regular.typeface');
    storeAndReturnMesh(obj, songArtistTextMesh);
    inhaltGroup.add(songArtistTextMesh);
    return songArtistTextMesh;
}

function centerTextMesh(textMesh, yOffset = 0) {
    textMesh.geometry.computeBoundingBox();
    let size = new THREE.Vector3();
    textMesh.geometry.boundingBox.getSize(size);
    textMesh.position.set(
        heavyRotCircleGroup.position.x - size.x / 2,
        heavyRotCircleGroup.position.y - size.y / 2 + yOffset,
        heavyRotCircleGroup.position.z
    );
}

function storeAndReturnMesh(obj, mesh) {
    if (!textMeshMap.has(obj)) {
        textMeshMap.set(obj, []);
    }
    textMeshMap.get(obj).push(mesh);
}

/**
 * Bewegt ein Objekt zu einer Zielposition.
 * 
 * @param {Object3D} obj - Das zu bewegende Objekt.
 * @param {number} duration - Die Dauer der Animation in Millisekunden.
 */
function moveObject(obj, duration) {
    if (obj.userData.animation) {
        obj.userData.animation.stop();
    }
    obj.userData.isAnimating = true;
    // Holen der 3D-Mausposition
    const mouse3DPosition = getMouse3DPosition(mouse, camera);
    // Berechnung des Richtungsvektors von der aktuellen Position des Objekts zur Mausposition
    const directionVector = new THREE.Vector3(
        mouse3DPosition.x - obj.position.x,
        mouse3DPosition.y - obj.position.y,
        mouse3DPosition.z - obj.position.z
    );
    // Normalisiert den Richtungsvektor, um die Bewegung in die Richtung der Mausposition zu ermöglichen
    directionVector.normalize();
    // Definiert die Entfernung, die das Objekt bewegt werden soll
    const moveDistance = 25;
    // Berechnet die Zielposition basierend auf dem Richtungsvektor und der Bewegungsdistanz
    const targetPosition = {
        x: obj.position.x,// + directionVector.x * moveDistance,
        y: obj.position.y,// + directionVector.y * moveDistance,
        z: obj.position.z + moveDistance //directionVector.z * moveDistance
    };
    const tween = new TWEEN.Tween(obj.position)
        .to(targetPosition, duration)
        .easing(TWEEN.Easing.Exponential.Out)
        .onUpdate(() => {
            if (!obj.userData.isHovered) {
                tween.stop();
                obj.userData.animationActive = false;
                obj.userData.animation = null;
                removeTextMeshes(obj);
                resetObjectToOrigin(obj);
            }
        })
        .onComplete(() => {
            obj.userData.isAnimating = false;
            if (obj.userData.isHovered) {
                obj.userData.animationActive = false;
                obj.userData.animation = null;
            }
        })
        .start();
    obj.userData.animation = tween;
}

function resetObjectToOrigin(obj, duration) {
    obj.userData.isAnimating = true;

    const resetTween = new TWEEN.Tween(obj.position)
        .to({ 
            x : obj.userData.originalX,
            y : obj.userData.originalY,
            z: obj.userData.originalZ }, duration)
        .easing(TWEEN.Easing.Exponential.Out)
        .onComplete(() => {
            obj.userData.isAnimating = false;
        })
        .start();
        scaleObject(obj, 1.0); // Zurücksetzen auf die ursprüngliche Skalierung

}

function resetObject(obj) {
    if(obj === undefined) return;
    if (obj && obj.userData.isHovered) {
        obj.userData.isHovered = false;
        
        if (obj.userData.animation) {
            obj.userData.animation.stop();
        }

        obj.userData.animationActive = true;

        scaleObject(obj, 1.0); // Zurücksetzen auf die ursprüngliche Skalierung

        removeTextMeshes(obj);
        moveObject(obj, 100);
    }
}

function scaleObject(obj, scale) {
    if (obj.userData.originalScale === undefined) {
        obj.userData.originalScale = obj.scale.clone(); // Speichert die ursprüngliche Skalierung des Objekts
    }
    obj.scale.set(obj.userData.originalScale.x * scale, obj.userData.originalScale.y * scale, obj.userData.originalScale.z * scale);
}

function removeTextMeshes(obj) {
    const textMeshes = textMeshMap.get(obj);
    if (textMeshes) {
        textMeshes.forEach(textMesh => {
            inhaltGroup.remove(textMesh);
            textMesh.geometry?.dispose();
            textMesh.material?.dispose();
        });
        textMeshMap.delete(obj);
    }
}

tick();