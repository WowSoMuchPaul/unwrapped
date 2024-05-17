import { THREE, TWEEN } from './imports.js';

// import { updateRaycasterInteraction } from './heavyRotInteraction.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'stats.js';
import { GUI } from 'dat.gui';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { onPageLoad, setFestivalPlaylist, getMe, getTopSongs, getTopArtists, getOnRepeat, getRecentlyPlayed, loginWithSpotifyClick, refreshToken ,logoutClick } from "./spotify.js";
import fensterTutorialImg from '../static/images/startScreenImg.png';
import playlistCover from '../static/images/playlistCover.jpg';
import profilPlaceholder from '../static/images/profil_placeholder.png';
import offlineImage from '../static/images/offline.png';
import onlineImage from '../static/images/online.png';
import help from '../static/images/help.png';
import navProfilIcon from '../static/images/nav_profil_icon.png';
import navArtistsIcon from '../static/images/nav_artists_icon.png';
import navSongsIcon from '../static/images/nav_songs_icon.png';
import navRotationIcon from '../static/images/nav_rotation_icon.png';
import navPlaylistIcon from '../static/images/nav_playlist_icon.png';

let sizes, canvas, scene, camera, renderer, trackControls, lastCamPosition, inhaltGroup, heavyRotCircleGroup, lastIntersected, topArtistsCube, arrowModel;
// export {camera, heavyRotCircleGroup as heavyRotCircleGroup, inhaltGroup, scene};
export const targetPoints = {};
const loadingManager = new THREE.LoadingManager();
let inEinemBereich = false;
let tweenAktiviert = false; 
let freeMovement = true;
let timeRange = document.getElementById("timeRange").value;
let topArtistsRotationIndex;
let initCubeAnimationPlayed = false;
let playlistButtonAktiviert = true;
let bereichInfo = {
    currentIndex : 0,
    bereich : [
        {name: "unwrapped", text:"This window will guide you through the unwrapped experience. You can navigate through the different sections by <br><u>scrolling</u> or using the <u>navigation bar</u> on the right. <br><br>Enjoy the ride!"},
        {name: "Profil", text: "This is your Spotify profile. <br>Have a look at your profile picture and your recently played songs."},
        {name: "Top Artists", text: "These are your most listened to artists. <br><u>Scroll</u> to see more."}, 
        {name: "Top Songs", text: "These are your most listened to songs. <br>Congratulations to your top hits!"}, 
        {name: "Heavy Rotation", text: `These are the songs you can't stop listening to. <br><u>Hover</u> over the covers to reveal more details. <br><br>Keep on repeating!`}, 
        {name: "Playlist", text: "This is your chance to create your personal unwrapped playlist. <br><u>Press the button</u> to save the playlist to your profile. Enjoy the music!"}
    ],
};
const gesamtTiefe = 5000;
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
const textBigSize = 20;
const textSize = 10;
const textSmallSize = 5;

const textHeight = 0;
const textWidth = 0;
const textDepth = 0;

let startupSoundPlayed = false;

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

// const loadingManager = new THREE.LoadingManager();
// const loadingLabel = document.getElementById('progress-bar-label');
// const progressBar = document.getElementById('progress-bar-blocks');
// const progressBarContainer = document.querySelector('.progress-bar-container');

// loadingManager.onStart = function(url, itemsLoaded, itemsTotal) {
//     // loadingLabel.innerText = "Nearly done...";
//     setTimeout(() => {
//         loadingLabel.innerText = "Nearly done...";
//     }, 1000);
// }

// let lastProgress = 0; 
// loadingManager.onProgress = function(url, itemsLoaded, itemsTotal) {
//     console.log("Progress: ", itemsLoaded, itemsTotal);
//     console.log(url);
//     let currentProgress = (itemsLoaded / itemsTotal) * 100;

//     // if(currentProgress > lastProgress) {
//         progressBar.value = currentProgress;
//     //     lastProgress = currentProgress;
//     // }
// };

// loadingManager.onLoad = function() {
//     setTimeout(() => {
//             progressBarContainer.style.display = 'none';
//     }, 2000);
// }

const loadingLabel = document.getElementById('progress-bar-label');
const progressBar = document.getElementById('progress-bar-blocks');
const progressBarContainer = document.querySelector('.progress-bar-container');
progressBarContainer.style.display = 'none';


await init(); // Starte die Initialisierung der Szene


/**
 * Initialisiert die Anwendung.
 * Erstellt alle nötigen Elemente und fügt sie der Szene hinzu.
 * @async
 * @function init
 * @returns {Promise<void>}
 */
async function init() {
    // console.log("Init");
// const loadingManager = new THREE.LoadingManager();


    loadingManager.onStart = function(url, itemsLoaded, itemsTotal) {
        // loadingLabel.innerText = "Nearly done...";
        // setTimeout(() => {
        //     loadingLabel.innerText = "Nearly done...";
        // }, 1000);
    }

    let lastProgress = 0; 
    loadingManager.onProgress = function(url, itemsLoaded, itemsTotal) {
        // console.log("Progress: ", itemsLoaded, itemsTotal);
        // console.log(url);
        let currentProgress = (itemsLoaded / itemsTotal) * 100;

        // if(currentProgress > lastProgress) {
            progressBar.value = currentProgress;
        //     lastProgress = currentProgress;
        // }
    };

    loadingManager.onLoad = function() {
        loadingLabel.innerText = "Nearly done...";
        // playStartupSound();
    }

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

    //Lights
    let directionalLight = new THREE.DirectionalLight(0xffffff, 1.3);
    directionalLight.position.set(0,1,1);
    scene.add(directionalLight);

    //Hemisphären Licht
    const hemiLight = new THREE.HemisphereLight(0xB6D8DE, 0x382F2B, 1);
    hemiLight.position.set(0, 1, 0);
    // scene.add(hemiLight);

    //Inhalt Group definieren
    inhaltGroup = new THREE.Group();
    inhaltGroup.name = "inhaltGroup";
    scene.add(inhaltGroup);

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
    // renderer.outputEncoding = THREE.sRGBEncoding;
    //document.body.appendChild(renderer.domElement);

    //Track Controls
    trackControls = new TrackballControls(camera, renderer.domElement);
    trackControls.noRotate = true;
    trackControls.noPan = true;
    trackControls.noZoom = false;
    trackControls.zoomSpeed = zoomSpeedNorm;
    trackControls.staticMoving = false;
    trackControls.dynamicDampingFactor = 0.04;
    trackControls.minDistance = targetPoints.playlist - 400;
    trackControls.maxDistance = gesamtTiefe + 10;

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
        progressBarContainer.style.zIndex = 10;
        progressBarContainer.style.display = 'flex';
        const profil = await getMe();
        document.getElementById("fensterHeadline").innerText = "Welcome, " + profil.name + "!";
        document.getElementById("fensterTutorialImg").src = fensterTutorialImg;
        document.getElementById("profilImage").src = profil.imageUrl;
        document.getElementById("profilImage").classList.add("windows95edgesImage");
        document.getElementById("loginStatusImage").src = onlineImage;
        document.getElementById("loginStatusLabel").innerText = "online";
        document.getElementById("spotifyConnectButton").innerText = "Start unwrapped!";
        document.getElementById("spotifyConnectButton").addEventListener("click", 
        () => {
            closeOverlay();
            playStartupSound();
        });
        document.getElementById("logoutButton").addEventListener("click", 
        () => {
            playButtonSound();
            setTimeout(() => {
            logoutClick();
            }, 200);
        });
        document.getElementById("timeRange").addEventListener("change", function() {
            progressBarContainer.style.zIndex = 10;
            progressBarContainer.style.display = 'flex';
            deleteGroup();
            timeRange = this.value;
            createAll();
            //Playlist Button restetten
            document.getElementById("playlistButton").innerText = "Create Playlist";
            document.getElementById("playlistButton").disabled = false;
            playlistButtonAktiviert = true;
            checkCamPosition();
        });
        await createAll();
    }else{
       document.getElementById("fensterTutorialImg").src = fensterTutorialImg;
       document.getElementById("profilImage").src = profilPlaceholder;
       document.getElementById("loginStatusImage").src = offlineImage;
       document.getElementById("loginStatusLabel").innerText = "offline";
       document.getElementById("spotifyConnectButton").addEventListener("click", 
       () => {
        loginWithSpotifyClick();
        playButtonSound();
       });
       document.getElementById("timeRangeDiv").style.display = "none";
       document.getElementById("logoutButton").style.display = "none";
    }

    //Listener setzen
    window.addEventListener('resize', onWindowResize);
    document.getElementById("help").addEventListener("click", openHelp);
    document.getElementById("closeHelpButton").addEventListener("click", closeHelp);
    document.getElementById("helpToStartButton").addEventListener("click", switchHelpToStart);
    document.getElementById("helpToStartButton").addEventListener("click", openOverlay);
    document.getElementById("playlistButton").addEventListener("click", createPlaylistResponse);
    
    
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
    playButtonSound();
    document.getElementById("pageBlocker").style.display = "none";
    document.getElementById("help").style.display = "block";
    document.getElementById("navBar").style.display = "block";
    document.getElementById("spotifyConnectButton").innerText = "Return to unwrapped!"
    handleStartPosition();
}

function openOverlay() {
    document.getElementById("pageBlocker").style.display = "block";
    document.getElementById("help").style.display = "none";
    document.getElementById("navBar").style.display = "none";
    document.getElementById("helpWindow").style.display = "none";
}

function openHelp() {
    playButtonSound();
    document.getElementById("helpWindow").style.display = "block";
    setHelpText();
    
}

function switchHelpToStart() {
    playButtonSound();
}

function closeHelp() {
    playButtonSound();
    document.getElementById("helpWindow").style.display = "none";
}

function setHelpText() {
    document.getElementById("helpBereichInfo").innerHTML = bereichInfo.bereich[bereichInfo.currentIndex].text;
    document.getElementById("helpHeadline").innerHTML = bereichInfo.bereich[bereichInfo.currentIndex].name;
    document.getElementById("helpOverlayHeadline").innerHTML = bereichInfo.bereich[bereichInfo.currentIndex].name.toLowerCase() + ".help";
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

    document.getElementById("playlistButton").style.display = "none";

    if ((pos <= (targetPoints.profil + bereichOffsetVorne)) && (pos >= (targetPoints.profil - bereichOffsetHinten))) {
        //Bereich Profil
        if (bereichInfo.currentIndex != 1) {
            bereichInfo.currentIndex = 1;
            setHelpText();
        }
        if (freeMovement) {
            handleBereich(pos, targetPoints.profil);
        }
    }else if ((pos <= (targetPoints.topArtist + bereichOffsetVorne)) && (pos >= (targetPoints.topArtist - bereichOffsetHinten))) {
        //Bereich Artists
        if (bereichInfo.currentIndex != 2) {
            bereichInfo.currentIndex = 2;
            setHelpText();
        }
        if (freeMovement) {
            handleBereich(pos, targetPoints.topArtist);
        }
    }else if((pos <= (targetPoints.topSong + bereichOffsetVorne)) && (pos >= (targetPoints.topSong - bereichOffsetHinten))){
        //Bereich Songs
        if (bereichInfo.currentIndex != 3) {
            bereichInfo.currentIndex = 3;
            setHelpText();
        }
        if (freeMovement) {
            handleBereich(pos, targetPoints.topSong);
        }
    }else if ((pos <= (targetPoints.onRepeat + bereichOffsetVorne)) && (pos >= (targetPoints.onRepeat - bereichOffsetHinten))) {
        //Bereich OnRepeat
        if (bereichInfo.currentIndex != 4) {
            bereichInfo.currentIndex = 4;
            setHelpText();
        }
        if (freeMovement) {
            handleBereich(pos, targetPoints.onRepeat);
        }
    }else if ((pos <= (targetPoints.playlist + bereichOffsetVorne)) && (pos >= (targetPoints.playlist - bereichOffsetHinten))) {
        //Bereich Playlist
        if (bereichInfo.currentIndex != 5) {
            bereichInfo.currentIndex = 5;
            setHelpText();
        }
        if (freeMovement) {
            handleBereich(pos, targetPoints.playlist);
        }
        if (playlistButtonAktiviert) {
            document.getElementById("playlistButton").style.display = "block";
        }
    }else{
        //Außerhalb der Bereiche
        if (bereichInfo.currentIndex != 0) {
            bereichInfo.currentIndex = 0;
            setHelpText();
            // console.log("Cleanup außerhalb der Bereiche aufgerufen :"); 
            cleanupTopArtistsCube(); // Zurücksetzen, bevor der Bereich erneut initialisiert wird 
        }
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
                        if(!topArtistBereichInitialized){
                            // cleanupTopArtistsCube(); // Zurücksetzen, bevor der Bereich erneut initialisiert wird  
                            handleTopArtistBereich();
                        }
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
        console.log("Bereich verlassen");
    }
    //Kamera ist im Austritts-Damping
    if ((pos >= (tp - bereichOffsetHinten)) && (pos <= (tp - bereichOffsetHinten + bereichDampingHinten))) {
        //console.log("Austritts-Damping");
        trackControls.zoomSpeed = zoomSpeedBereich - (pos - ((tp - bereichOffsetHinten) + bereichDampingHinten)) * ((zoomSpeedBereich - zoomSpeedNorm) / (-bereichDampingHinten));
    }
}

let initialTween;
let topArtCubeAnimating;

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

let topArtistBereichInitialized = false;

/**
 * Behandelt den Bereich der Top-Künstler.
 * Wird aufgerufen wenn die Kamera in den Bereich der Top-Künstler eintritt.
 * Steuert die Rotation des Würfels und die Anzeige der Künstlerinformationen.
 * @async
 * @function handleTopArtistBereich
 * @returns {Promise<void>}
 */
async function handleTopArtistBereich() {
    console.log("Handle Top Artist Bereich erreicht");
    if (topArtistBereichInitialized) {
        return; // Beende die Funktion, wenn sie bereits ausgeführt wurde
    }
    topArtistBereichInitialized = true;
    topArtistsRotationIndex = 0;

    // Bereinige eventuell vorhandene Text-Meshes, bevor neue erstellt werden
    // clearAndRemoveObject(topArtistsRank);
    // clearAndRemoveObject(topArtistsName);

    // await initTopArtistsCube();
    topArtistBereichInitialized = false;


    window.addEventListener('wheel', rotateCube);
    if (!initCubeAnimationPlayed) {
        initialAnimation();
        // initCubeAnimationPlayed = true;
    }
    // topArtistsRotationIndex = 0;
    topArtCubeAnimating = false;
    trackControls.noZoom = true; // Verhindert Zoom während der Rotation
}


/**
     * Initiale Würfel-Animation beim ersten Betreten des Top-Artists-Bereichs.
     */
function initialAnimation() {
    initialTween  = new TWEEN.Tween(topArtistsCube.rotation)
        .to({ x: topArtistsCube.rotation.x - Math.PI / 10 }, 600)
        .easing(TWEEN.Easing.Cubic.InOut)
        .yoyo(true) // Rückkehr zur Ausgangsposition
        .repeat(2) // Wiederhole die Bewegung einmal
        .onComplete(() => {
            if (!topArtCubeAnimating) { // Wenn keine andere Animation aktiv ist, führe Rückbewegung aus
                new TWEEN.Tween(topArtistsCube.rotation)
                    .to({ x: topArtistsCube.rotation.x + Math.PI / 10 }, 600)
                    .easing(TWEEN.Easing.Cubic.InOut)
                    .start();
            }
        })
        .start();
        initCubeAnimationPlayed = true;

}

/**
 * Dreht den Würfel und aktualisiert die angezeigten Informationen.
 * 
 * @param {Event} event - Das Ereignis, das den Funktionsaufruf ausgelöst hat.
 * @returns {Promise<void>} Ein Promise, das gelöst wird, wenn die Animation abgeschlossen ist.
 */
async function rotateCube(event) {
    if (topArtCubeAnimating || event.deltaY === 0) return;
    if(initialTween.isPlaying()){
        initialTween.stop();
        let resetTween = new TWEEN.Tween(topArtistsCube.rotation)
        .to({ x: 0, y: Math.PI + (Math.PI / 2), z: 0 }, 300)
        .easing(TWEEN.Easing.Cubic.InOut)
        .start();
    }
    topArtCubeAnimating = true;
    topArtistsRotationIndex = (topArtistsRotationIndex + 1) % rotationSequence.length; // Immer zum nächsten Schritt
    if(topArtistsRotationIndex == 0) {
        trackControls.noZoom = false;
        window.removeEventListener('wheel', rotateCube);
        // cleanupTopArtistsCube();
        // clearAndRemoveObject(topArtistsRank);
        // clearAndRemoveObject(topArtistsName);
    }
    let steps = rotationSequence[topArtistsRotationIndex];
    let tween;
    steps.forEach((step) => {
        playHoverSound();
        let rotation = {};
        rotation[step.axis] = topArtistsCube.rotation[step.axis] + step.angle;
        tween = new TWEEN.Tween(topArtistsCube.rotation)
            .to(rotation, 650)
            .easing(TWEEN.Easing.Cubic.InOut)                
            .onComplete(() => {
                setTimeout(() => {
                    topArtCubeAnimating = false;
                }, 1000);
            })
            .start();
    });
    clearAndRemoveObject(topArtistsRank);
    clearAndRemoveObject(topArtistsName);
    topArtistsRank = await createTextMesh("Top " + (topArtistsRotationIndex + 1), 20, 100, 40, targetPoints.topArtist -200, 0, 0, 0x000000, 1, 'W95FA_Regular.typeface');
    topArtistsName = await createTextMesh(topArtistsCube.userData.artistNames[topArtistsRotationIndex], 15, 100, 10, targetPoints.topArtist -200, 0, 0, 0x000000, 1, 'W95FA_Regular.typeface');
    inhaltGroup.add(topArtistsRank);
    inhaltGroup.add(topArtistsName);
}


/**
 * Initialisiert den Top-Artists-Würfel.
 * Setzt die Ursprungsrotation und erstellt die ersten Text-Meshes.
 * @async
 * @function initTopArtistsCube
 * @returns {Promise<void>}
 */
async function initTopArtistsCube() {
    // Bereinige eventuell vorhandene Text-Meshes, bevor neue erstellt werden
    clearAndRemoveObject(topArtistsRank);
    clearAndRemoveObject(topArtistsName);

    topArtistsRotationIndex = 0;

    // Setze den Würfel auf die Ursprungsrotation
    new TWEEN.Tween(topArtistsCube.rotation)
        .to({ x: 0, y: Math.PI + (Math.PI / 2), z: 0 }, 600)
        .easing(TWEEN.Easing.Cubic.InOut)
        .start();
    
    // Erstelle die ersten Text-Meshes
    topArtistsRank = await createTextMesh("Top 1", 20, 100, 40, targetPoints.topArtist -200, 0, 0, 0x000000, 1, 'W95FA_Regular.typeface');
    topArtistsName = await createTextMesh(topArtistsCube.userData.artistNames[0], 15, 100, 10, targetPoints.topArtist -200, 0, 0, 0x000000, 1, 'W95FA_Regular.typeface');
    
    // Füge die Text-Meshes zur Gruppe hinzu
    inhaltGroup.add(topArtistsRank);
    inhaltGroup.add(topArtistsName);
}


/**
 * Funktion zum Aufräumen und Zurücksetzen des Würfels.
 * Entfernt den Event-Listener für das Scrollen und setzt den Würfel auf die erste Rotation aus der Sequenz zurück.
 * @function cleanupTopArtistsCube
 */
async function cleanupTopArtistsCube() {
    console.log("Cleanup wurde aufgerufen");
    window.removeEventListener('wheel', rotateCube);
    // clearAndRemoveObject(topArtistsRank);
    // clearAndRemoveObject(topArtistsName);

    // Setze den Index für die Rotation zurück
    topArtistsRotationIndex = 0;

    // Setze den Würfel auf die erste Rotation der Sequenz zurück
    new TWEEN.Tween(topArtistsCube.rotation)
        .to({ x: 0, y: Math.PI + (Math.PI / 2), z: 0 }, 300)
        .easing(TWEEN.Easing.Cubic.InOut)
        .start();
    topArtistBereichInitialized = false;
    // topArtistsRank = await createTextMesh("Top " + (topArtistsRotationIndex + 1), 20, 100, 40, targetPoints.topArtist -200, 0, 0, 0x000000, 1, 'W95FA_Regular.typeface');
    // topArtistsName = await createTextMesh(topArtistsCube.userData.artistNames[topArtistsRotationIndex], 15, 100, 10, targetPoints.topArtist -200, 0, 0, 0x000000, 1, 'W95FA_Regular.typeface');
    // inhaltGroup.add(topArtistsRank);
    // inhaltGroup.add(topArtistsName);
    await initTopArtistsCube();
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
            if(!topArtistBereichInitialized){
            // console.log("Cleanup aus bringeZumBereich aufgerufen:");
            // cleanupTopArtistsCube(); // Zurücksetzen, bevor der Bereich erneut initialisiert wird
            // handleTopArtistBereich();
            }
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
        checkCamPosition();
        lastCamPosition = Math.round(camera.position.z);
    }

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
                    height: (fontsize / 5 ),
                    curveSegments: 12,
                    bevelEnabled: true,
                    bevelThickness: 0.03,
                    bevelSize: 0.02,
                    bevelOffset: 0,
                    bevelSegments: 5
                }
            )
            textGeometry.computeBoundingBox();
            //const textMaterial = new THREE.MeshBasicMaterial();
            const textMaterial = [
                new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0xB6C0DE, emissiveIntensity: 0.25} ), // front
                new THREE.MeshPhongMaterial( { color: 0xE0E4EF, emissiveIntensity: 0.25 } ) // side
            ];
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
async function createBildMesh(bildUrl, x, y, z, rotationY, bildGroesse, mitFrame) {
    return new Promise((resolve, reject) => {
        new THREE.TextureLoader(loadingManager).load(
            bildUrl,
            (texture) => {
                const geometry = new THREE.PlaneGeometry(bildGroesse, bildGroesse);
                const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
                // material.emissive = new THREE.Color(0xffffff);
                // material.emissiveMap = texture;
                material.emissiveIntensity = 0.5;
                const aspect = bildGroesse / bildGroesse;
                var imageAspect = texture.image.width / texture.image.height;
                texture.matrixAutoUpdate = false;
                if ( aspect < imageAspect ) {
                    texture.matrix.setUvTransform( 0, 0, aspect / imageAspect, 1, 0, 0.5, 0.5 );
                } else if (aspect > imageAspect) {
                    texture.matrix.setUvTransform( 0, 0, 1, imageAspect / aspect, 0, 0.5, 0.5 );
                }

                let bildMesh = new THREE.Mesh(geometry, material);
                bildMesh.position.set(x, y, z);
                bildMesh.rotateY(rotationY * (Math.PI / 180));
                bildMesh.isHovered = false;
                inhaltGroup.add(bildMesh);
                resolve(bildMesh);
            },
            undefined,
            (error) => {
                reject(error);
            }
        );
        if(mitFrame==true) {
            // Create GLTF mesh
            const gltfLoader = new GLTFLoader(loadingManager);
            gltfLoader.load(
                `../models/DP_Frame_001.glb`,
                (gltf) => {
                const mesh = gltf.scene;
                mesh.position.set(x, y-1.3, z);
                mesh.rotateY(rotationY * (Math.PI / 180));
                mesh.scale.set(bildGroesse/2, bildGroesse/2, bildGroesse/4);
                inhaltGroup.add(mesh);
                resolve(mesh);
                },
                undefined,
                (error) => {
                reject(error);
                }
            );
        }
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
            return new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader(loadingManager).load(material) });
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
    cube.userData.rotation = cube.rotation;
    // console.log("Rotation: ", cube.rotation);
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

    contentProfil.push(await createBildMesh(profil.imageUrl, 80, 0, targetPoints.profil, winkel, 50, true));
    // contentProfil.push( await createGLTFMesh(80, -25, targetPoints.profil-23, 0, 0, 0, 25, 'DP_Frame_001'));

    contentProfil.push(await createTextMesh("Hey" , textBigSize, -80, 35, targetPoints.profil,0,0,0x000000, 1,'Jersey 15_Regular'));
    contentProfil.push(await createTextMesh(profil.name + " !", textBigSize, -80, 15, targetPoints.profil,0,0,0x000000, 1,'Jersey 15_Regular'));
    contentProfil.push(await createTextMesh("Follower: " + profil.follower.toString(), textSmallSize, 55, -32, targetPoints.profil,winkel,0,0x000000, 1,'W95FA_Regular.typeface'));
    
    let recGroupX = -80;
    let recGroupY = -2;
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

    contentProfil.push(await createBildMesh(recentlyPlayed[0].image, recGroupX + 13, recGroupY - 19, targetPoints.profil, recBildRot, recBildG, true));
    contentProfil.push(await createTextMesh(recentlyPlayed[0].name, recText, recGroupX + 1, recGroupY - 35, targetPoints.profil, recBildRot,0,0x000000, 1,'W95FA_Regular.typeface'));
    contentProfil.push(await createTextMesh(recentlyPlayed[0].artists[0].name + ".jpg", recText-1, recGroupX+1 + 1, recGroupY -6.5, targetPoints.profil+0.5, recBildRot,0,0x000000, 1,'W95FA_Regular.typeface'));
    
    contentProfil.push(await createBildMesh(recentlyPlayed[1].image, recGroupX + 43, recGroupY - 19, targetPoints.profil, recBildRot, recBildG, true));
    contentProfil.push(await createTextMesh(recentlyPlayed[1].name, recText, recGroupX + 31, recGroupY - 35, targetPoints.profil, recBildRot,0,0x000000, 1,'W95FA_Regular.typeface'));
    contentProfil.push(await createTextMesh(recentlyPlayed[1].artists[0].name + ".jpg", recText-1, recGroupX+32, recGroupY -6.5, targetPoints.profil+0.5, recBildRot,0,0x000000, 1,'W95FA_Regular.typeface'));

    contentProfil.push(await createBildMesh(recentlyPlayed[2].image, recGroupX + 13, recGroupY - 53, targetPoints.profil, recBildRot, recBildG, true));
    contentProfil.push(await createTextMesh(recentlyPlayed[2].name, recText, recGroupX + 1, recGroupY - 69, targetPoints.profil, recBildRot,0,0x000000, 1,'W95FA_Regular.typeface'));
    contentProfil.push(await createTextMesh(recentlyPlayed[2].artists[0].name + ".jpg", recText-1, recGroupX+2, recGroupY -40.3, targetPoints.profil+0.5, recBildRot,0,0x000000, 1,'W95FA_Regular.typeface'));

    contentProfil.push(await createBildMesh(recentlyPlayed[3].image, recGroupX + 43, recGroupY - 53, targetPoints.profil, recBildRot, recBildG, true));
    contentProfil.push(await createTextMesh(recentlyPlayed[3].name, recText, recGroupX + 31, recGroupY - 69, targetPoints.profil, recBildRot,0,0x000000, 1,'W95FA_Regular.typeface'));
    contentProfil.push(await createTextMesh(recentlyPlayed[3].artists[0].name + ".jpg", recText-1, recGroupX+32, recGroupY -40.3, targetPoints.profil+0.5, recBildRot,0,0x000000, 1,'W95FA_Regular.typeface'));

    contentProfil.push(await createTextMesh("j", textBigSize, 45, -40, targetPoints.profil+40,0, -25, 0x000000,0.4,'Yarndings 12_Regular'));
    contentProfil.push(await createTextMesh("k", textSize,-80, -95, targetPoints.profil+20,0, 12, 0x000000,0.4,'Yarndings 12_Regular'));
    contentProfil.push(await createTextMesh("y", textBigSize-8, -30, 50, targetPoints.profil-40,-5, 15, 0x000000,0.3,'Yarndings 12_Regular'));

    
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
    let headlineOne = await createTextMesh("Your", headlineSize, -300, -90, topArtistZ,0, 0, 0x000000,1,'Jersey 15_Regular');
    let headlineTwo = await createTextMesh("\nTop 6 Artists", headlineSize, -300, -80, topArtistZ, 0, 0, 0x000000,1,'Jersey 15_Regular');
    // topArtistsRank = await createTextMesh("Top 1", 20, 100, 40, topArtistZ, 0, 0, 0x000000,1,'Jersey 15_Regular');
    // topArtistsName = await createTextMesh(topArtists[0].name, 15, 100, 10, topArtistZ, 0, 0, 0x000000,1,'Jersey 15_Regular');

    const cubeOptions = {
        materials: [],
        positionZ: topArtistZ,
        scale: 100,
        // rotationY: 2,
        // rotationX: -8,
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
    contentHeavyRotation.push(await createTextMesh("Your \nHeavy Rotation", headlineSize, -325, -100, targetPoints.onRepeat - 200, 0, 0, 0x000000, 1, 'Jersey 15_Regular'));
    contentHeavyRotation.push(await createTextMesh("The Songs you listen to the most right now.", textBigSize -5 , -325, -200, targetPoints.onRepeat - 200, 0, 0, 0x000000, 1, 'Jersey 15_Regular'));
    contentHeavyRotation.push(heavyRotCircleGroup);

    return contentHeavyRotation;
}

async function createGLTFMesh(x, y, z, rotationX, rotationY, rotationZ, scale, name) {
    return new Promise((resolve, reject) => {
        const gltfloader = new GLTFLoader(loadingManager);
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

    for (let i = 0; i < songs.length; i++) {
        if(songs[i].name.length >= 20){
            songs[i].name = songs[i].name.substring(0,20) + "...";
        }
    }

    let contentTopSongs = [];
    
    //console.log(songs);
    contentTopSongs.push(await createTextMesh("Your Top Songs", headlineSize, -150, -100, targetPoints.topSong - 85 ,0, 0, 0x000000,1,'Jersey 15_Regular'));
    
    contentTopSongs.push(await createBildMesh(songs[0].imageUrl, 0, 10, targetPoints.topSong - 200, 0, 70, true));
    contentTopSongs.push(await createTextMesh("1: " + songs[0].name, textSize, -40, 55, targetPoints.topSong - 200,0,0,0x000000, 1,'W95FA_Regular.typeface'));
    contentTopSongs.push(await createGLTFMesh(0, -90, targetPoints.topSong - 200, 0, 0, 0, 50.0, 'pedestal'));
    // let ped = await createGLTFMesh(0, -90, targetPoints.topSong - 200, 0, 0, 0, 50.0, 'pedestal');
    // ped.shiniess = 50;
    // contentTopSongs.push(ped);

    contentTopSongs.push(await createBildMesh(songs[1].imageUrl, -120, -5, targetPoints.topSong - 155, 20, 70, true));
    contentTopSongs.push(await createTextMesh("2: " + songs[1].name, textSize, -155, 40, targetPoints.topSong - 135 ,0,20,0x000000, 1,'W95FA_Regular.typeface'));
    contentTopSongs.push(await createGLTFMesh(-120, -110, targetPoints.topSong - 155, 0,20, 0, 50, 'pedestal'));

    contentTopSongs.push(await createBildMesh(songs[2].imageUrl, 110, -15, targetPoints.topSong - 135, -20, 70, true));
    contentTopSongs.push(await createTextMesh("3: " + songs[2].name, textSize, 70,30, targetPoints.topSong - 145, 0,-20,0x000000, 1,'W95FA_Regular.typeface'));
    contentTopSongs.push(await createGLTFMesh(110, -120, targetPoints.topSong - 135, 0, -20, 0, 50 , 'pedestal'));
    
    return contentTopSongs;
}

async function createPlaylistResponse() {
    document.getElementById("playlistButton").innerText = "Loading...";
    document.getElementById("playlistButton").disabled = true;
    const playlistRes = await setFestivalPlaylist(timeRange);
    console.log(playlistRes);
    playlistButtonAktiviert = false;
    document.getElementById("playlistButton").style.display = "none";
    inhaltGroup.add(await createTextMesh(playlistRes, textBigSize, 80, -120, targetPoints.playlist - 200 , 0, -15, 0x000000,1,'W95FA_Regular.typeface'));
}

async function createPlaylist(){
    let contentPlaylist = [];
    contentPlaylist.push(await createTextMesh("Your \nunwrapped \nPlaylist", headlineSize, -230, 70, targetPoints.playlist-80,0,35,0x000000, 1,'Jersey 15_Regular'));
    contentPlaylist.push(await createBildMesh(playlistCover, 200, 30, targetPoints.playlist-200, -15, 200, true));
    contentPlaylist.push(await createTextMesh("w", textBigSize, 180, 70, targetPoints.playlist - 50,0, -25, 0x000000,0.3,'Yarndings 12_Regular'));
    contentPlaylist.push(await createTextMesh("x", textBigSize,-120, -75, targetPoints.playlist - 25,0, 15, 0x000000,0.2,'Yarndings 12_Regular'));
    //contentPlaylist.push(await createTextMesh("a", 1000, -580,-500, targetPoints.playlist-20,0,0,0x000000,0.1,'Yarndings 12_Regular'));
    
    return contentPlaylist;
}

async function createEND(){
    let contentEnd = [];
    contentEnd.push(await createTextMesh("THE END", headlineSize, -65, -100, 150, -20, 0, 0x000000,1,'Jersey 15_Regular'));
    // contentEnd.push(await createRingMesh(15,0,targetPoints.playlist-500,-35,15,0x42887E,150,160));
    // contentEnd.push(await createQuaderMesh(0,0,targetPoints.playlist-500,20,10, 120, 0xffffff));
    contentEnd.push(await createTextMesh("v", 150, -75, -25, 40,0,0,0x000000,0.1,'Yarndings 12_Regular'));
    return contentEnd;
}

async function createStart(){
    let contentStart = [];
    arrowModel = await createGLTFMesh(0, -40, gesamtTiefe -100, -80, -10, -40, 4.0, '3d_mouse_cursor');
    contentStart.push(await createTextMesh("scroll to start", textSize, -35, -60, gesamtTiefe - 90,-20, 0, 0x000000, 1, 'Jersey 15_Regular'));
    contentStart.push(arrowModel);
    console.log("Content Start: ", contentStart);
    return contentStart;
}

function handleStartPosition(){
    setTimeout(() => {
    new TWEEN.Tween(arrowModel.position)
            .to({z: arrowModel.position.z - 20 }, 500)
            .easing(TWEEN.Easing.Cubic.InOut)
            .yoyo(true) // Rückkehr zur Ausgangsposition
            .repeat(3)
            .start();
    }, 1250);
}

async function createAll() {
    let inhaltStart = await createStart();
    inhaltStart.forEach(element => inhaltGroup.add(element));
    // let initCursor = await createGLTFMesh(0, -50, gesamtTiefe -100, -80, -10, -40, 5.0, '3d_mouse_cursor');
    // inhaltGroup.add(initCursor);

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
    progressBarContainer.style.display = 'none';
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

function playButtonSound(){
    const buttonAudio = new Audio("../sounds/closeSound.mp3");
    buttonAudio.volume = 0.2;
    buttonAudio.play();
}

function playHoverSound(){
    const soundOne = new Audio("../sounds/moveSoundOne.mp3");
    const soundTwo = new Audio("../sounds/moveSoundTwo.mp3");
    let moveAudio = Math.random() < 0.5 ? soundOne : soundTwo;
    soundOne.volume = 0.1;
    soundTwo.volume = 0.1;
    moveAudio.play();
}

function playStartupSound(){
    if(!startupSoundPlayed){
    const startupAudio = new Audio("../sounds/win98.mp3");
    startupAudio.volume = 0.2;
    startupAudio.play();
    }
    startupSoundPlayed = true;
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
    let minCameraZ = targetPoints.onRepeat - 100;
    let maxCameraZ = targetPoints.onRepeat + cameraTargetDistance + 45;
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
            playHoverSound();
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
        // console.log(songName, songArtists);
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
            clearAndRemoveObject(textMesh);
            //textMesh.geometry?.dispose();
            //textMesh.material?.dispose();
        });
        textMeshMap.delete(obj);
    }
}

tick();