/**
 * Dieses Skript enthält den Hauptcode für die unwrapped Anwendung.
 * Es importiert verschiedene Module und erstellt die Szene, die Kamera und den Renderer.
 * Es initialisiert auch die verschiedenen Elemente der Szene und fügt sie hinzu.
 * @module script
 */

/**
 * Importe der benötigten Module.
 */
import { THREE, TWEEN, FontLoader, TextGeometry, TrackballControls, GLTFLoader, playlistCover, playlistCoverMid, playlistCoverShort} from './imports.js';
import { onPageLoad, setPlaylist, getMe, getTopSongs, getTopArtists, getOnRepeat, getRecentlyPlayed, loginWithSpotifyClick, refreshToken ,logoutClick } from "./spotify.js";
//Importe der Pfade aller statischen Bilder
import favicon from '../static/images/favicon.ico';
import fensterTutorialImg from '../static/images/startScreenImg.png';
import fensterLandingImg from '../static/images/startScreenImgLanding.png';
import profilPlaceholder from '../static/images/profil_placeholder.png';
import offlineImage from '../static/images/offline.png';
import onlineImage from '../static/images/online.png';
import help from '../static/images/help.png';
import navProfilIcon from '../static/images/nav_profil_icon.png';
import navArtistsIcon from '../static/images/nav_artists_icon.png';
import navSongsIcon from '../static/images/nav_songs_icon.png';
import navRotationIcon from '../static/images/nav_rotation_icon.png';
import navPlaylistIcon from '../static/images/nav_playlist_icon.png';

let sizes, canvas, scene, camera, renderer, trackControls, lastCamPosition, inhaltGroup, heavyRotCircleGroup, lastIntersected, topArtistsCube, arrowModel, topArtistsRotationIndex, initialTween, topArtCubeAnimating;
let inEinemBereich = false;
let tweenAktiviert = false; 
let freeMovement = true;
let initCubeAnimationPlayed = false;
let playlistButtonAktiviert = true;
let topArtistBereichInitialized = false;
let startupSoundPlayed = false;
let previousTime = 0;
let lastHovered = null;
let timeRange = document.getElementById("timeRange").value;
let topArtistsRank = new THREE.Mesh;
let topArtistsName = new THREE.Mesh;
let animationObjects = [];
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
const maxTiefpunkt = 433;
const bereichOffsetVorne = 400;
const bereichDampingVorne = bereichOffsetVorne / 2;
const bereichOffsetHinten = 100;
const bereichDampingHinten = bereichOffsetHinten / 1.2;
const zoomSpeedNorm = 0.06;
const zoomSpeedBereich = 0.02;
const tweenStartDistance = 10;
const cameraTargetDistance = 100;
const progBarBottom = 2;
const colorPalette = [
    {name: "blue", color: 0x0827F5},
    {name: "green", color: 0x42887E},
    {name: "yellow", color: 0xC5EA56},
    {name: "pink", color: 0xEB43A3}
];
const dekoIconKeys = ["w","x","j","k","y"];
const rotationSequence = [
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
const targetPoints = {};
const loadingManager = new THREE.LoadingManager();
const clock = new THREE.Clock();
const textMeshMap = new Map();

// Textgrößen Konstanten
const headlineSize = 40;
const textBigSize = 20;
const textSize = 10;
const textSmallSize = 5;

const textHeight = 0;
const textWidth = 0;
const textDepth = 0;

/** Raycaster */
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

/** cursor */
const cursor = {};

/**
 * Zuweisen der Loading Animation Elemente
 */
const loadingLabel = document.getElementById('progress-bar-label');
const progressBar = document.getElementById('progress-bar-blocks');
const progressBarContainer = document.querySelector('.progress-bar-container');
progressBarContainer.style.display = 'none';

/**
 * Initialisiert die Anwendung.
 * Erstellt alle nötigen Elemente und fügt sie der Szene hinzu.
 */
async function init() {

    /**
     * Favicon setzen
     */
    document.getElementById("favicon").href = favicon;

    /**
     * Loading Manager
     */
    loadingManager.onStart = function(url, itemsLoaded, itemsTotal) {
        loadingLabel.innerText = "Loading...";
    }
    loadingManager.onProgress = function(url, itemsLoaded, itemsTotal) {
        let currentProgress = (itemsLoaded / itemsTotal) * 100;
        progressBar.value = currentProgress;
    };
    loadingManager.onLoad = function() {
        loadingLabel.innerText = "Nearly done...";
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

    /**
     * Seiten Target Points setzen
     */
    targetPoints.profil = camera.position.z - (camera.position.z / 6);
    targetPoints.topArtist = camera.position.z - (2 * (camera.position.z / 6));
    targetPoints.topSong = camera.position.z - (3 * (camera.position.z / 6));
    targetPoints.onRepeat = camera.position.z - (4 * (camera.position.z / 6));
    targetPoints.playlist = camera.position.z - (5 * (camera.position.z / 6));

    /**
     * Inhalt-Gruppe für alle Elemente in der Szene
     */
    inhaltGroup = new THREE.Group();
    inhaltGroup.name = "inhaltGroup";
    scene.add(inhaltGroup);

    /**
     * Lichter
     */
    let directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(0.5,0.5,1);
    scene.add(directionalLight);

    let directionalLightSupport = new THREE.DirectionalLight(colorPalette[3].color, 0.8);
    directionalLightSupport.position.set(-0.5,-0.5,-0.5);
    scene.add(directionalLightSupport);

    let directionalLightSupportTwo = new THREE.DirectionalLight(colorPalette[0].color, 0.8);
    directionalLightSupportTwo.position.set(-0.5,0.25,-0.5);
    scene.add(directionalLightSupportTwo);

    const light = new THREE.SpotLight( 0xffffff, 2, 500, 0.6 );
    light.position.set( -150, 100, targetPoints.topSong);
    light.target.position.set( -100, 40, targetPoints.topSong -150 );
    scene.add( light );
    scene.add( light.target );
    // const sphereSize = 10;
    // const spotLightHelper = new THREE.SpotLightHelper( light, sphereSize );
    // scene.add( spotLightHelper );

    const lightTwo = new THREE.SpotLight( 0xffffff, 4, 500, 0.6 );
    lightTwo.position.set( 150, 100, targetPoints.topSong + 100);
    lightTwo.target.position.set( 150, 50, targetPoints.topSong - 50);
    scene.add( lightTwo );
    scene.add( lightTwo.target );
    // const sphereSizeTwo = 10;
    // const spotLightHelperTwo = new THREE.SpotLightHelper( lightTwo, sphereSizeTwo );
    // scene.add( spotLightHelperTwo );

    /**
     * Cursor auf NULL setzen
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

    /**
     * TrackballControls
     * Kontrolle über das Verhalten der Kamera und des Zooms
     */
    trackControls = new TrackballControls(camera, renderer.domElement);
    trackControls.noRotate = true;
    trackControls.noPan = true;
    trackControls.noZoom = false;
    trackControls.zoomSpeed = zoomSpeedNorm;
    trackControls.staticMoving = false;
    trackControls.dynamicDampingFactor = 0.04;
    trackControls.minDistance = maxTiefpunkt;
    trackControls.maxDistance = gesamtTiefe + 10;

    //Help Button
    document.getElementById("help").src = help;
    document.getElementById("help").style.display = "none";

    /**
     * Nav Bar mit den Icons der einzelnen Bereiche in Position bringen
     */
    document.getElementById("navProgress").style.bottom = progBarBottom + "%";
    document.getElementById("navBar").style.display = "none";
    document.getElementById("navProfil").style.bottom = (1 - (targetPoints.profil + cameraTargetDistance - maxTiefpunkt) / (gesamtTiefe - maxTiefpunkt)) * 100 + "%";
    document.getElementById("navProfilImg").src = navProfilIcon;
    document.getElementById("navArtists").style.bottom = (1 - (targetPoints.topArtist + cameraTargetDistance - maxTiefpunkt) / (gesamtTiefe - maxTiefpunkt)) * 100 + "%";
    document.getElementById("navArtistsImg").src = navArtistsIcon;
    document.getElementById("navSongs").style.bottom = (1 - (targetPoints.topSong + cameraTargetDistance - maxTiefpunkt) / (gesamtTiefe - maxTiefpunkt)) * 100 + "%";
    document.getElementById("navSongsImg").src = navSongsIcon;
    document.getElementById("navOnRepeat").style.bottom = (1 - (targetPoints.onRepeat + cameraTargetDistance - maxTiefpunkt) / (gesamtTiefe - maxTiefpunkt)) * 100 + "%";
    document.getElementById("navOnRepeatImg").src = navRotationIcon;
    document.getElementById("navPlaylist").style.bottom = (1 - (targetPoints.playlist + cameraTargetDistance - maxTiefpunkt) / (gesamtTiefe - maxTiefpunkt)) * 100 + "%";
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
            freeMovement = false;
            let backToStartTween = new TWEEN.Tween(camera.position)
                .to({z: gesamtTiefe}, 2000)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onComplete(() => {
                    cleanupTopArtistsCube();
                    deleteGroup();
                    timeRange = this.value;
                    createAll();
                    //Playlist Button restetten
                    document.getElementById("playlistButton").innerText = "Create Playlist";
                    document.getElementById("playlistButton").disabled = false;
                    playlistButtonAktiviert = true;
                    checkCamPosition();
                    freeMovement = true;
                })
                .start();
        });
        
        await createAll();
        await createAnimationObjects();
    }else{
        //Wenn Nutzer nicht authentifiziert ist
       document.getElementById("fensterTutorialImg").src = fensterLandingImg;
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

    /**
     * Listener setzen
     */
    window.addEventListener('resize', onWindowResize);

    // Event-Listener für Mausbewegungen, der die Mauskoordinaten normalisiert
    window.addEventListener('mousemove', (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }, false);
    //Event-Listener für Mausbewegungen, der das Maus-Kamera verhältnis lenkt
    window.addEventListener('mousemove', (event) => {
        cursor.x = event.clientX / sizes.width - 0.5;
        cursor.y = event.clientY / sizes.height - 0.5;
    })

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
    
}

/**
 * Schließt das Overlay und stellt die ursprüngliche Position wieder her.
 */
function closeOverlay() {
    playButtonSound();
    document.getElementById("pageBlocker").style.display = "none";
    document.getElementById("help").style.display = "block";
    document.getElementById("navBar").style.display = "block";
    document.getElementById("spotifyConnectButton").innerText = "Return to unwrapped!"
    handleStartPosition();
}

/**
 * Öffnet das Overlay und blendet bestimmte Elemente aus.
 */
function openOverlay() {
    document.getElementById("pageBlocker").style.display = "block";
    document.getElementById("help").style.display = "none";
    document.getElementById("navBar").style.display = "none";
    document.getElementById("helpWindow").style.display = "none";
}

/**
 * Öffnet das Hilfefenster und ruft weitere, zugehörige Funktionen auf.
 */
function openHelp() {
    playButtonSound();
    document.getElementById("helpWindow").style.display = "block";
    setHelpText();
}

/**
 * Schaltet die Hilfe auf den Startzustand um.
 */
function switchHelpToStart() {
    playButtonSound();
}

/**
 * Schließt das Hilfefenster und spielt den Sound des Button clicks ab.
 */
function closeHelp() {
    playButtonSound();
    document.getElementById("helpWindow").style.display = "none";
}

/**
 * Setzt den Hilfetext für den aktuellen Bereich.
 */
function setHelpText() {
    document.getElementById("helpBereichInfo").innerHTML = bereichInfo.bereich[bereichInfo.currentIndex].text;
    document.getElementById("helpHeadline").innerHTML = bereichInfo.bereich[bereichInfo.currentIndex].name;
    document.getElementById("helpOverlayHeadline").innerHTML = bereichInfo.bereich[bereichInfo.currentIndex].name.toLowerCase() + ".help";
}

/**
 * Funktion, die aufgerufen wird, wenn das Fenstergröße geändert wird.
 * Aktualisiert die Kamera-Aspektverhältnis und die Renderer-Größe entsprechend.
 */
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

/**
 * Setzt die Navbar basierend auf der Kameraposition.
 */
function setNavBarProgress() {
    var barProgress = 0;
    const progBarMaxH = 100 - 2 * progBarBottom;
    const camProgress = (1 - ((Math.round(camera.position.z) - maxTiefpunkt) / (gesamtTiefe - maxTiefpunkt))) * 100;
    barProgress = camProgress * (progBarMaxH / 100);
    document.getElementById("navProgress").style.height = barProgress + "%";
}

/**
 * Berechnet die Position der Maus im 3D-Raum auf der z=0 Ebene.
 * @param {THREE.Vector2} mouse - Der Mausvektor, normalisiert (-1 bis 1 in beiden Achsen).
 * @param {THREE.PerspectiveCamera} camera - Die verwendete Kamera in der Szene.
 * @returns {THREE.Vector3} Die berechnete Position der Maus auf der z=0 Ebene.
 */
function getMouse3DPosition(mouse, camera) {
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

/**
 * Überprüft die Position der Kamera und ruft entsprechende Funktionen auf, basierend auf der aktuellen Position.
 */
function checkCamPosition() {
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
            cleanupTopArtistsCube();
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

/**
 * Behandelt den Bereich der Top-Künstler.
 * Wird aufgerufen wenn die Kamera in den Bereich der Top-Künstler eintritt.
 * Steuert die Rotation des Würfels und die Anzeige der Künstlerinformationen.
 * @async
 * @function handleTopArtistBereich
 * @returns {Promise<void>}
 */
async function handleTopArtistBereich() {
    if (topArtistBereichInitialized) {
        return; // Beende die Funktion, wenn sie bereits ausgeführt wurde
    }
    topArtistBereichInitialized = true;
    topArtistsRotationIndex = 0;
    topArtCubeAnimating = false;
    trackControls.noZoom = true;

    // await initTopArtistsCube();

    window.addEventListener('wheel', rotateCube);
    if (!initCubeAnimationPlayed) {
        initialAnimation();
    }
}

/**
 * Initiale Würfel-Animation beim ersten Betreten des Top-Artists-Bereichs.
 */
function initialAnimation() {
    initialTween  = new TWEEN.Tween(topArtistsCube.rotation)
        .to({ x: topArtistsCube.rotation.x - Math.PI / 10 }, 600)
        .easing(TWEEN.Easing.Cubic.InOut)
        .yoyo(true) // Rückkehr zur Ausgangsposition
        .repeat(3) // Wiederhole die Bewegung
        .onComplete(() => {
            initCubeAnimationPlayed = true;
        })
        .start();
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
        const resetTween = new TWEEN.Tween(topArtistsCube.rotation)
        .to({ x: 0, y: Math.PI + (Math.PI / 2), z: 0 }, 300)
        .easing(TWEEN.Easing.Cubic.InOut)
        .start();
    }
    topArtCubeAnimating = true;
    topArtistsRotationIndex = (topArtistsRotationIndex + 1) % rotationSequence.length; // Immer zum nächsten Schritt
    if(topArtistsRotationIndex == 0) {
        trackControls.noZoom = false;
        window.removeEventListener('wheel', rotateCube);
        return;
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
    topArtistsRank = await createTextMesh("Top " + (topArtistsRotationIndex + 1), 20, 100, 40, targetPoints.topArtist -200, 0, 0, 0xffffff, 1, 'W95FA_Regular.typeface');
    topArtistsName = await createTextMesh(topArtistsCube.userData.artistNames[topArtistsRotationIndex], 15, 100, 10, targetPoints.topArtist -200, 0, 0, 0xffffff, 1, 'W95FA_Regular.typeface');
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
    topArtistsRank = await createTextMesh("Top 1", 20, 100, 40, targetPoints.topArtist -200, 0, 0, 0xffffff, 1, 'W95FA_Regular.typeface');
    topArtistsName = await createTextMesh(topArtistsCube.userData.artistNames[0], 15, 100, 10, targetPoints.topArtist -200, 0, 0, 0xffffff, 1, 'W95FA_Regular.typeface');
    
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
    // topArtistsRank = await createTextMesh("Top " + (topArtistsRotationIndex + 1), 20, 100, 40, targetPoints.topArtist -200, 0, 0, 0xffffff, 1, 'W95FA_Regular.typeface');
    // topArtistsName = await createTextMesh(topArtistsCube.userData.artistNames[topArtistsRotationIndex], 15, 100, 10, targetPoints.topArtist -200, 0, 0, 0xffffff, 1, 'W95FA_Regular.typeface');
    // inhaltGroup.add(topArtistsRank);
    // inhaltGroup.add(topArtistsName);
    await initTopArtistsCube();
}


/**
 * Funktion, die die Kamera zum angegebenen Bereich bewegt.
 *
 * @param {number} tp - Der Zielbereich, zu dem die Kamera bewegt werden soll.
 */
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

/**
 * Animiert die Objekte in der Szene.
 */
async function animateObjects() {
    for (const object of animationObjects) {
        object.rotation.y += object.userData.movementFactorAchse * 0.01;
        object.rotation.x += object.userData.movementFactorAchse * 0.01;
        const movementSpeed = clock.getElapsedTime() * object.userData.movementFactorKreis;
        object.position.x = object.userData.ogPosition.x + object.userData.radius * Math.cos(movementSpeed);
        object.position.y = object.userData.ogPosition.y + object.userData.tiltFactor * object.userData.radius * Math.cos(movementSpeed);
        object.position.z = object.userData.ogPosition.z + object.userData.radius * Math.sin(movementSpeed);
    }
}
  
/**
 * Erstellt ein TextMesh mit den angegebenen Parametern.
 *
 * @param {string} text - Der Text, der angezeigt werden soll.
 * @param {number} fontsize - Die Schriftgröße des Textes.
 * @param {number} x - Die x-Koordinate der Position des TextMeshes.
 * @param {number} y - Die y-Koordinate der Position des TextMeshes.
 * @param {number} z - Die z-Koordinate der Position des TextMeshes.
 * @param {number} rotationX - Die Rotation um die x-Achse des TextMeshes in Grad.
 * @param {number} rotationY - Die Rotation um die y-Achse des TextMeshes in Grad.
 * @param {number} color - Die Farbe des Textes.
 * @param {number} opacity - Die Transparenz des Textes.
 * @param {string} fontName - Der Name der Schriftart.
 * @returns {Promise<THREE.Mesh>} Ein Promise, das das erstellte TextMesh enthält.
 */
async function createTextMesh(text, fontsize, x, y, z,  rotationX, rotationY, color, opacity, fontName) {
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
            const textMaterial = [
                new THREE.MeshPhongMaterial( { color: color, flatShading: true, emissiveIntensity: 0 } ), // front
                new THREE.MeshPhongMaterial( { color: color, flatShading: true, emissiveIntensity: 0 } ) // side
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

            textMesh.userData.name = text;
            resolve(textMesh);
        },
        undefined,
        (error) => {
            reject(error);
        }
    );
});
}


/**
 * Erstellt ein Bild-Mesh mit den angegebenen Parametern.
 *
 * @param {string} bildUrl - Die URL des Bildes.
 * @param {number} x - Die x-Koordinate der Position des Meshes.
 * @param {number} y - Die y-Koordinate der Position des Meshes.
 * @param {number} z - Die z-Koordinate der Position des Meshes.
 * @param {number} rotationY - Die Y-Rotation des Meshes in Grad.
 * @param {number} bildGroesse - Die Größe des Bildes.
 * @param {boolean} mitFrame - Gibt an, ob das Bild einen Rahmen haben soll.
 * @returns {Promise<THREE.Mesh>} Ein Promise, das das erstellte Bild-Mesh enthält.
 */
async function createBildMesh(bildUrl, x, y, z, rotationY, bildGroesse, mitFrame) {
    return new Promise((resolve, reject) => {
        new THREE.TextureLoader(loadingManager).load(
            bildUrl,
            (texture) => {
                const geometry = new THREE.PlaneGeometry(bildGroesse, bildGroesse);
                const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
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
            // Erstellt einen Rahmen um das Bild
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
 * Erstellt einen Würfel mit den angegebenen Optionen.
 *
 * @param {Object} options - Die Optionen für den Würfel.
 * @param {Array} options.materials - Ein Array von Materialien für den Würfel.
 * @param {number} options.scale - Die Skalierung des Würfels.
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
    cube.name = options.name || "Cube";

    return cube;
}

/**
 * Erstellt das Profil mit Informationen und den kürzlich gespielten Songs.
 * @returns {Array} Ein Array mit den erstellten Inhalten des Profils.
 */
async function createProfil() {
    const profil = await getMe();
    const recentlyPlayed = await getRecentlyPlayed();
    let contentProfil = [];
    let winkel = 0;

    //animationObjects.push(await createTextMesh(profil.name, textBigSize, 40, 100, targetPoints.profil-200,-5, 15, (colorPalette[Math.floor(Math.random() * colorPalette.length)].color),0.3,'W95FA_Regular.typeface'));

    contentProfil.push(await createBildMesh(profil.imageUrl, 80, 0, targetPoints.profil, winkel, 50, true));

    contentProfil.push(await createTextMesh("Hey" , textBigSize, -80, 35, targetPoints.profil,0,0,0xffffff, 1,'Jersey 15_Regular'));
    contentProfil.push(await createTextMesh(profil.name + " !", textBigSize, -80, 15, targetPoints.profil,0,0,0xffffff, 1,'Jersey 15_Regular'));
    contentProfil.push(await createTextMesh("Follower: " + profil.follower.toString(), textSmallSize, 55, -31, targetPoints.profil,winkel,0,0xffffff, 1,'W95FA_Regular.typeface'));
    
    let recGroupX = -80;
    let recGroupY = -2;
    let recText = 2;
    let recBildG = 25;
    let recBildRot = 0;

    for(let i = 0; i < recentlyPlayed.length; i++){
        if(recentlyPlayed[i].name.length >= 20){
            recentlyPlayed[i].name = recentlyPlayed[i].name.substring(0,20) + "...";
        }
    }

    contentProfil.push(await createTextMesh("Recently Played Songs", textSize, recGroupX, recGroupY, targetPoints.profil,0, 0, 0xffffff,1,'Jersey 15_Regular'));

    contentProfil.push(await createBildMesh(recentlyPlayed[0].image, recGroupX + 13, recGroupY - 19, targetPoints.profil, recBildRot, recBildG, true));
    contentProfil.push(await createTextMesh(recentlyPlayed[0].name, recText, recGroupX + 1, recGroupY - 35, targetPoints.profil, recBildRot,0,0xffffff, 1,'W95FA_Regular.typeface'));
    contentProfil.push(await createTextMesh(recentlyPlayed[0].artists[0].name + ".jpg", recText-1, recGroupX+1 + 1, recGroupY -6.5, targetPoints.profil+0.5, recBildRot,0,0xffffff, 1,'W95FA_Regular.typeface'));
    
    contentProfil.push(await createBildMesh(recentlyPlayed[1].image, recGroupX + 43, recGroupY - 19, targetPoints.profil, recBildRot, recBildG, true));
    contentProfil.push(await createTextMesh(recentlyPlayed[1].name, recText, recGroupX + 31, recGroupY - 35, targetPoints.profil, recBildRot,0,0xffffff, 1,'W95FA_Regular.typeface'));
    contentProfil.push(await createTextMesh(recentlyPlayed[1].artists[0].name + ".jpg", recText-1, recGroupX+32, recGroupY -6.5, targetPoints.profil+0.5, recBildRot,0,0xffffff, 1,'W95FA_Regular.typeface'));

    contentProfil.push(await createBildMesh(recentlyPlayed[2].image, recGroupX + 13, recGroupY - 53, targetPoints.profil, recBildRot, recBildG, true));
    contentProfil.push(await createTextMesh(recentlyPlayed[2].name, recText, recGroupX + 1, recGroupY - 69, targetPoints.profil, recBildRot,0,0xffffff, 1,'W95FA_Regular.typeface'));
    contentProfil.push(await createTextMesh(recentlyPlayed[2].artists[0].name + ".jpg", recText-1, recGroupX+2, recGroupY -40.3, targetPoints.profil+0.5, recBildRot,0,0xffffff, 1,'W95FA_Regular.typeface'));

    contentProfil.push(await createBildMesh(recentlyPlayed[3].image, recGroupX + 43, recGroupY - 53, targetPoints.profil, recBildRot, recBildG, true));
    contentProfil.push(await createTextMesh(recentlyPlayed[3].name, recText, recGroupX + 31, recGroupY - 69, targetPoints.profil, recBildRot,0,0xffffff, 1,'W95FA_Regular.typeface'));
    contentProfil.push(await createTextMesh(recentlyPlayed[3].artists[0].name + ".jpg", recText-1, recGroupX+32, recGroupY -40.3, targetPoints.profil+0.5, recBildRot,0,0xffffff, 1,'W95FA_Regular.typeface'));

    return contentProfil;
}

/**
 * Erstellt die Top-Künstler-Seite.
 * @returns {Array} Ein Array mit den erstellten Inhalten der Top-Künstler-Seite.
 */
async function createTopArtist() {
    let topArtists = await getTopArtists(timeRange);
    let artistPics = [];
    let contentTopArtist = [];
    let topArtistZ = targetPoints.topArtist - 200;
    let headlineOne = await createTextMesh("Your", headlineSize, -300, -90, topArtistZ,0, 0, 0xffffff,1,'Jersey 15_Regular');
    let headlineTwo = await createTextMesh("\nTop 6 Artists", headlineSize, -300, -80, topArtistZ, 0, 0, 0xffffff,1,'Jersey 15_Regular');

    const cubeOptions = {
        materials: [],
        positionZ: topArtistZ,
        scale: 100,
        name: "TopArtists Cube"
    };
    for (let i = 0; i < topArtists.length; i++) {
        artistPics.push(topArtists[i].imageUrl);
        cubeOptions.materials.push(artistPics[i]);
    }
    topArtistsCube = createCube(cubeOptions);
    topArtistsCube.userData.artistNames = topArtists.map(artist => artist.name); // Speichert die Namen im userData
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
    contentHeavyRotation.push(await createTextMesh("Your \nHeavy Rotation", headlineSize, -325, -100, targetPoints.onRepeat - 200, 0, 0, 0xffffff, 1, 'Jersey 15_Regular'));
    contentHeavyRotation.push(await createTextMesh("The Songs you listen to the most right now.", textBigSize -5 , -325, -200, targetPoints.onRepeat - 200, 0, 0, 0xffffff, 1, 'Jersey 15_Regular'));
    contentHeavyRotation.push(heavyRotCircleGroup);

    return contentHeavyRotation;
}

/**
 * Erstellt ein GLTF-Mesh mit den angegebenen Parametern.
 *
 * @param {number} x - Die X-Koordinate der Position des Meshes.
 * @param {number} y - Die Y-Koordinate der Position des Meshes.
 * @param {number} z - Die Z-Koordinate der Position des Meshes.
 * @param {number} rotationX - Die Rotation um die X-Achse des Meshes in Grad.
 * @param {number} rotationY - Die Rotation um die Y-Achse des Meshes in Grad.
 * @param {number} rotationZ - Die Rotation um die Z-Achse des Meshes in Grad.
 * @param {number} scale - Der Skalierungsfaktor des Meshes.
 * @param {string} name - Der Name des GLB-Modells, das geladen werden soll.
 * @returns {Promise<THREE.Group>} Ein Promise, das das geladene GLTF-Objekt enthält.
 */
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


/**
 * Erstellt die Top-Songs-Seite.
 * @returns {Promise<Array>} Eine Promise, die ein Array mit den erstellten Inhalten der Top-Songs zurückgibt.
 */
async function createTopSongs() {
    const songs = await getTopSongs(timeRange);
    let contentTopSongs = [];
    for (let i = 0; i < songs.length; i++) {
        if(songs[i].name.length >= 20){
            songs[i].name = songs[i].name.substring(0,20) + "...";
        }
    }
    contentTopSongs.push(await createTextMesh("Your Top Songs", headlineSize, -150, -100, targetPoints.topSong - 85 ,-10, 0, 0xffffff,1,'Jersey 15_Regular'));
    
    contentTopSongs.push(await createBildMesh(songs[0].imageUrl, 0, 60, targetPoints.topSong - 200, 0, 70, true));
    contentTopSongs.push(await createTextMesh("1: " + songs[0].name, textSize, -40, 105, targetPoints.topSong - 200,0,0,0xffffff, 1,'W95FA_Regular.typeface'));
    contentTopSongs.push(await createGLTFMesh(0, -40, targetPoints.topSong - 200, 0, 0, 0, 50.0, 'pedestal'));

    contentTopSongs.push(await createBildMesh(songs[1].imageUrl, -120, 35, targetPoints.topSong - 155, 20, 70, true));
    contentTopSongs.push(await createTextMesh("2: " + songs[1].name, textSize, -155, 80, targetPoints.topSong - 135 ,0,20,0xffffff, 1,'W95FA_Regular.typeface'));
    contentTopSongs.push(await createGLTFMesh(-120, -65, targetPoints.topSong - 155, 0,20, 0, 50, 'pedestal'));

    contentTopSongs.push(await createBildMesh(songs[2].imageUrl, 110, 35, targetPoints.topSong - 135, -20, 70, true));
    contentTopSongs.push(await createTextMesh("3: " + songs[2].name, textSize, 70,80, targetPoints.topSong - 145, 0,-20,0xffffff, 1,'W95FA_Regular.typeface'));
    contentTopSongs.push(await createGLTFMesh(110, -65, targetPoints.topSong - 135, 0, -20, 0, 50 , 'pedestal'));
    
    return contentTopSongs;
}

/**
 * Handelt die Interaktion mit der Playlist-Seite.
 */
async function createPlaylistResponse() {
    document.getElementById("playlistButton").innerText = "Loading...";
    document.getElementById("playlistButton").disabled = true;
    const playlistRes = await setPlaylist(timeRange);
    console.log(playlistRes);
    playlistButtonAktiviert = false;
    document.getElementById("playlistButton").style.display = "none";
    inhaltGroup.add(await createTextMesh(playlistRes, textBigSize, 110, -120, targetPoints.playlist - 250 , 0, -15, 0xffffff,1,'W95FA_Regular.typeface'));
}

/**
 * Erstellt die Playlist-Seite.
 * @returns {Promise<Array>} Ein Array mit den erstellten Inhalten der Wiedergabeliste.
 */
async function createPlaylist(){
    let contentPlaylist = [];
    let cover = playlistCover;
    contentPlaylist.push(await createTextMesh("Your \nunwrapped \nPlaylist", headlineSize, -230, 70, targetPoints.playlist-80,0,35,0xffffff, 1,'Jersey 15_Regular'));
    if (timeRange === "short_term") cover = playlistCoverShort;
    if (timeRange === "medium_term") cover = playlistCoverMid;
    contentPlaylist.push(await createBildMesh(cover, 200, 30, targetPoints.playlist-200, -15, 200, true));
    
    //contentPlaylist.push(await createTextMesh("a", 1000, -580,-500, targetPoints.playlist-20,0,0,0xffffff,0.1,'Yarndings 12_Regular'));
    
    return contentPlaylist;
}

/**
 * Erstellt den Inhalt für das Ende.
 * @returns {Promise<Array>} Ein Array mit den erstellten Inhalten für das Ende.
 */
async function createEND(){
    let contentEnd = [];
    contentEnd.push(await createTextMesh("THE END", headlineSize, -65, -100, 150, -20, 0, 0xffffff,1,'Jersey 15_Regular'));
    // contentEnd.push(await createRingMesh(15,0,targetPoints.playlist-500,-35,15,0x42887E,150,160));
    // contentEnd.push(await createQuaderMesh(0,0,targetPoints.playlist-500,20,10, 120, 0xffffff));
    contentEnd.push(await createTextMesh("v", 150, -75, -25, 40,0,0,0xffffff,0.1,'Yarndings 12_Regular'));
    return contentEnd;
}

/**
 * Erstellt den Startinhalt.
 * @returns {Promise<Array>} Ein Array mit dem erstellten Inhalt.
 */
async function createStart(){
    let contentStart = [];
    arrowModel = await createGLTFMesh(0, -40, gesamtTiefe -100, -80, -10, -40, 4.0, '3d_mouse_cursor');
    contentStart.push(await createTextMesh("scroll to start", textSize, -35, -60, gesamtTiefe - 90,-20, 0, 0xffffff, 1, 'Jersey 15_Regular'));
    contentStart.push(await createTextMesh("unwrapped", textBigSize + 30, -150, 20, gesamtTiefe - 200, 0, 0, 0xffffff, 1, 'W95FA_Regular.typeface'));
    contentStart.push(arrowModel);
    //console.log("Content Start: ", contentStart);
    return contentStart;
}

/**
 * Erstellt Animationsobjekte.
 * @returns {Promise<void>} Ein Promise, das gelöst wird, wenn die Animationsobjekte erstellt wurden.
 */
async function createAnimationObjects(){
    //Profil Objects
    animationObjects.push(await createTextMesh((dekoIconKeys[Math.floor(Math.random() * dekoIconKeys.length)]), textBigSize, 45, -35, targetPoints.profil+40,0, -25, (colorPalette[Math.floor(Math.random() * colorPalette.length)].color),0.4,'Yarndings 12_Regular'));
    animationObjects.push(await createTextMesh((dekoIconKeys[Math.floor(Math.random() * dekoIconKeys.length)]), textSize,-80, -95, targetPoints.profil+20,0, 12, (colorPalette[Math.floor(Math.random() * colorPalette.length)].color),0.4,'Yarndings 12_Regular'));
    animationObjects.push(await createTextMesh((dekoIconKeys[Math.floor(Math.random() * dekoIconKeys.length)]), textBigSize-8, -30, 20, targetPoints.profil-40,-5, 15, (colorPalette[Math.floor(Math.random() * colorPalette.length)].color),0.3,'Yarndings 12_Regular'));
    

    //TopArtist Objects
    animationObjects.push(await createTextMesh((dekoIconKeys[Math.floor(Math.random() * dekoIconKeys.length)]), textBigSize,-100, 20, targetPoints.topArtist + 25,0, 15, (colorPalette[Math.floor(Math.random() * colorPalette.length)].color), 0.2,'Yarndings 12_Regular'));
    animationObjects.push(await createTextMesh((dekoIconKeys[Math.floor(Math.random() * dekoIconKeys.length)]), textBigSize, 80, -20, targetPoints.topArtist + 20,0, 0, (colorPalette[Math.floor(Math.random() * colorPalette.length)].color), 0.2,'Yarndings 12_Regular'));
    animationObjects.push(await createTextMesh((dekoIconKeys[Math.floor(Math.random() * dekoIconKeys.length)]), textBigSize, 120, -60, targetPoints.topArtist - 80,0, 0, (colorPalette[Math.floor(Math.random() * colorPalette.length)].color), 0.2,'Yarndings 12_Regular'));

    //TopSongs Objects
    animationObjects.push(await createTextMesh((dekoIconKeys[Math.floor(Math.random() * dekoIconKeys.length)]), textBigSize,-350, 100, targetPoints.topSong - 250,0, 15, (colorPalette[Math.floor(Math.random() * colorPalette.length)].color), 0.2,'Yarndings 12_Regular'));
    animationObjects.push(await createTextMesh((dekoIconKeys[Math.floor(Math.random() * dekoIconKeys.length)]), textBigSize, 170, 0, targetPoints.topSong - 0,0, 15, (colorPalette[Math.floor(Math.random() * colorPalette.length)].color), 0.2,'Yarndings 12_Regular'));
    animationObjects.push(await createTextMesh((dekoIconKeys[Math.floor(Math.random() * dekoIconKeys.length)]), textBigSize,-100, -20, targetPoints.topSong + 25,0, 15, (colorPalette[Math.floor(Math.random() * colorPalette.length)].color), 0.2,'Yarndings 12_Regular'));
    animationObjects.push(await createTextMesh((dekoIconKeys[Math.floor(Math.random() * dekoIconKeys.length)]), textBigSize,300, 200, targetPoints.topSong - 300,0, 15, (colorPalette[Math.floor(Math.random() * colorPalette.length)].color), 0.2,'Yarndings 12_Regular'));

    //HeavyRotation Objects
    animationObjects.push(await createTextMesh((dekoIconKeys[Math.floor(Math.random() * dekoIconKeys.length)]), textBigSize,-100, 60, targetPoints.onRepeat - 25,0, 15, (colorPalette[Math.floor(Math.random() * colorPalette.length)].color), 0.2,'Yarndings 12_Regular'));
    animationObjects.push(await createTextMesh((dekoIconKeys[Math.floor(Math.random() * dekoIconKeys.length)]), textBigSize, 200, -75, targetPoints.onRepeat - 100,0, 15, (colorPalette[Math.floor(Math.random() * colorPalette.length)].color), 0.2,'Yarndings 12_Regular'));
    animationObjects.push(await createTextMesh((dekoIconKeys[Math.floor(Math.random() * dekoIconKeys.length)]), textBigSize + 10, 100, 10, targetPoints.onRepeat - 350,0, 15, (colorPalette[Math.floor(Math.random() * colorPalette.length)].color), 0.2,'Yarndings 12_Regular'));

    //Playlist Objects
    animationObjects.push(await createTextMesh((dekoIconKeys[Math.floor(Math.random() * dekoIconKeys.length)]), textBigSize, 180, 70, targetPoints.playlist - 50,0, -25, (colorPalette[Math.floor(Math.random() * colorPalette.length)].color), 0.3,'Yarndings 12_Regular'));
    animationObjects.push(await createTextMesh((dekoIconKeys[Math.floor(Math.random() * dekoIconKeys.length)]), textBigSize,-120, -75, targetPoints.playlist - 0,0, 15, (colorPalette[Math.floor(Math.random() * colorPalette.length)].color), 0.2,'Yarndings 12_Regular'));

    
    for (const object of animationObjects) {
        object.userData.ogPosition = object.position.clone();
        object.userData.movementFactorKreis = Math.random() * 0.9 + 0.1;
        object.userData.movementFactorAchse = Math.random() * 0.9 + 0.4;
        object.userData.tiltFactor = Math.random();
        object.userData.radius = Math.floor(Math.random() * 40 + 10);
        scene.add(object);
    }
}

/**
 * Funktion, die die Startposition behandelt.
 * 
 * @returns {void}
 */
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

/**
 * Erstellt alle Inhalte für die Anwendung.
 * @returns {Promise<void>} Ein Promise, das keinen Wert zurückgibt.
 */
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

/**
 * Löscht die Gruppe und leert den Inhalt.
 */
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

/**
 * Aktualisiert die Raycaster-Interaktion.
 * 
 * @returns {Object} Das zuletzt durchdrungene Objekt.
 */
function updateRaycasterInteraction() {
    if (!isCameraInBounds(camera)) return lastIntersected;
    
    raycaster.setFromCamera(mouse, camera);
    let intersects = raycaster.intersectObjects(heavyRotCircleGroup.children);
    return processIntersects(intersects, lastIntersected);
}

/**
 * Überprüft, ob die Kamera innerhalb der Grenzen liegt.
 * @returns {boolean} Gibt true zurück, wenn die Kamera innerhalb der Grenzen liegt, ansonsten false.
 */
function isCameraInBounds() {
    let minCameraZ = targetPoints.onRepeat - 100;
    let maxCameraZ = targetPoints.onRepeat + cameraTargetDistance + 45;
    return camera.position.z >= minCameraZ && camera.position.z <= maxCameraZ;
}

/**
 * Überprüft, ob die Maus in der Nähe des Zentrums eines Objekts ist.
 * 
 * @param {Object} intersect - Das Intersect-Objekt, das Informationen über den Schnittpunkt enthält.
 * @param {number} [threshold=1.5] - Der Schwellenwert, der angibt, wie nah die Maus am Zentrum sein muss.
 * @returns {boolean} - Gibt true zurück, wenn die Maus in der Nähe des Zentrums ist, andernfalls false.
 */
function isMouseNearCenter(intersect, threshold = 1.5) {
    const object = intersect.object;
    const bounds = new THREE.Box3().setFromObject(object); // Bounding Box des Objekts
    const size = bounds.getSize(new THREE.Vector3());
    const center = bounds.getCenter(new THREE.Vector3());
    const distance = intersect.point.distanceTo(center);
    const maxDistance = Math.min(size.x, size.y) * threshold / 2;

    return distance <= maxDistance; // Prüft, ob die Distanz innerhalb des gewünschten Bereichs ist
}

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

/**
 * Zeigt den Namen des Songs an.
 *
 * @param {Object} obj - Das Objekt, das den Song repräsentiert.
 * @returns {Promise<THREE.Mesh>} - Das Textmesh des Songnamens.
 */
async function displaySongName(obj) {
    let songNameTextMesh = await createTextMesh(obj.userData.name, 10, 0, 0, 0,0,0,0xffffff, 1,'W95FA_Regular.typeface');
    storeAndReturnMesh(obj, songNameTextMesh);
    inhaltGroup.add(songNameTextMesh);
    return songNameTextMesh;
}

/**
 * Zeigt den Namen des Künstlers an.
 * 
 * @param {Object} obj - Das Objekt, das die Benutzerdaten enthält.
 * @returns {Promise<THREE.Mesh>} - Das Textmesh-Objekt, das den Künstler und den Namen des Songs darstellt.
 */
async function displaySongArtist(obj) {
    const artistsArray = obj.userData.artists.map(artist => artist.name).join(", ");
    let songArtistTextMesh = await createTextMesh(artistsArray, 8, 0, -15,0,0,0,0xffffff, 1,'W95FA_Regular.typeface');
    storeAndReturnMesh(obj, songArtistTextMesh);
    inhaltGroup.add(songArtistTextMesh);
    return songArtistTextMesh;
}

/**
 * Zentriert den TextMesh und positioniert ihn relativ zur heavyRotCircleGroup.
 * @param {THREE.Mesh} textMesh - Das TextMesh, das zentriert werden soll.
 * @param {number} [yOffset=0] - Der optionale vertikale Versatz des TextMesh.
 */
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

/**
 * Speichert das übergebene Mesh-Objekt in einer Map und gibt es zurück.
 * @param {Object} obj - Das Objekt, zu dem das Mesh gehört.
 * @param {Mesh} mesh - Das zu speichernde Mesh-Objekt.
 */
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
    const moveDistance = 25;
    const targetPosition = {
        x: obj.position.x,
        y: obj.position.y,
        z: obj.position.z + moveDistance
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

/**
 * Setzt ein Objekt auf seine ursprüngliche Position zurück.
 * @param {Object3D} obj - Das Objekt, das zurückgesetzt werden soll.
 * @param {number} duration - Die Dauer der Animation in Millisekunden.
 */
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

/**
 * Setzt ein Objekt zurück, indem es verschiedene Eigenschaften zurücksetzt und Animationen stoppt.
 * @param {Object} obj - Das Objekt, das zurückgesetzt werden soll.
 */
function resetObject(obj) {
    if(obj === undefined) return;
    if (obj && obj.userData.isHovered) {
        obj.userData.isHovered = false;
        
        if (obj.userData.animation) {
            obj.userData.animation.stop();
        }
        obj.userData.animationActive = true;
        scaleObject(obj, 1.0);
        removeTextMeshes(obj);
        moveObject(obj, 100);
    }
}

/**
 * Skaliert ein Objekt um den angegebenen Faktor.
 *
 * @param {Object3D} obj - Das zu skalierende Objekt.
 * @param {number} scale - Der Skalierungsfaktor.
 */
function scaleObject(obj, scale) {
    if (obj.userData.originalScale === undefined) {
        obj.userData.originalScale = obj.scale.clone(); // Speichert die ursprüngliche Skalierung des Objekts
    }
    obj.scale.set(obj.userData.originalScale.x * scale, obj.userData.originalScale.y * scale, obj.userData.originalScale.z * scale);
}

/**
 * Entfernt alle TextMeshes, die mit dem übergebenen Objekt verknüpft sind.
 *
 * @param {Object} obj - Das Objekt, mit dem die TextMeshes verknüpft sind.
 */
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

/**
 * Funktion, die den Hauptanimationszyklus steuert.
 */
const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - previousTime;
    previousTime = elapsedTime;

    //Animate objects
    animateObjects();

    //Animate camera
    const parallaxX = cursor.x * 50;
    const parallaxY = - cursor.y * 50;
    camera.position.x += (parallaxX - camera.position.x) * 5 * deltaTime;
    camera.position.y += (parallaxY - camera.position.y) * 5 * deltaTime;
    
    if (lastCamPosition != Math.round(camera.position.z)) {
        setNavBarProgress();
        checkCamPosition();
        lastCamPosition = Math.round(camera.position.z);
    }

    lastIntersected = updateRaycasterInteraction();
    
    // aktualiseren der TrackballControls und der TWEEN-Animationen
    trackControls.update();
    TWEEN.update();

    // Rendern der Szene und anfordern einer neuen Animation
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
}

// Szene initialisieren
await init();

// Animationszyklus starten
tick();