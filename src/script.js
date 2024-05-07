import { THREE, TWEEN } from './imports.js';

import { updateRaycasterInteraction } from './heavyRotInteraction.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'stats.js';

import { onPageLoad, setFestivalPlaylist, getMe, getTopSongs, getTopArtists, getOnRepeat, getRecentlyPlayed, loginWithSpotifyClick, refreshToken ,logoutClick } from "./spotify.js";
import { log } from 'three/examples/jsm/nodes/Nodes.js';

let sizes, canvas, scene, camera, helper, renderer, controls, trackControls, hemiLightHelper, lastCamPosition, inhaltGroup, heavyRotCircleGroup, lastIntersected, topArtistsCube, topArtistCountText;
export {camera, heavyRotCircleGroup as heavyRotGroup, inhaltGroup, scene};
export const targetPoints = {};
let inEinemBereich = false;
let tweenAktiviert = false;
let freeMovement = true;
let timeRange = "long_term";
let topArtistsRotationIndex;
let initCubeAnimationPlayed = false;
const bereichOffsetVorne = 400;
const bereichDampingVorne = bereichOffsetVorne / 2;
const bereichOffsetHinten = 100;
const bereichDampingHinten = bereichOffsetHinten / 1.2;
const zoomSpeedNorm = 0.3;
const zoomSpeedBereich = 0.02;
const tweenStartDistance = 10;
const cameraTargetDistance = 100;

let topArtistsRank = new THREE.Mesh;
let topArtistsName = new THREE.Mesh;

const stats = new Stats();

/** Raycaster */
export const raycaster = new THREE.Raycaster();
export let mouse = new THREE.Vector2();

window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
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

await init(); // Starte die Initialisierung der Szene


/**
 * Initialisiert die Anwendung.
 * Erstellt alle nötigen Elemente und fügt sie der Szene hinzu.
 * @async
 * @function init
 * @returns {Promise<void>}
 */
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

    /**
     * Camera
     */
    camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 700 );
    camera.position.z = 3000;
    // camera.far = 500;
    // camera.focus = 1000;
    scene.add(camera);
    lastCamPosition = camera.position.z;

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

/**
 * Überprüft die Position der Kamera und ruft entsprechende Funktionen auf, basierend auf der Position.
 */
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

/**
 * Behandelt den Bereich basierend auf der (Kamera) Position und dem Ziel-Punkt.
 *
 * @param {number} pos - Die aktuelle (Kamera) Position.
 * @param {number} tp - Der Ziel-Punkt.
 */
function handleBereich(pos, tp) {
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
                        console.log("TWEEN abgeschlossen");
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
        console.log("Austritts-Damping");
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
        initialTween.stop();
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
        // Führe jede Rotation aus dem Schritt in der Sequenz aus
        steps.forEach(async (step, index) => {
            let rotation = {};
            rotation[step.axis] = topArtistsCube.rotation[step.axis] + step.angle;
            tween = new TWEEN.Tween(topArtistsCube.rotation)
                .to(rotation, 800)
                .easing(TWEEN.Easing.Cubic.InOut);                
            
            if (index === steps.length - 1) { // Nur die letzte Animation setzt den onComplete-Handler
                tween.onComplete(() => {
                    setTimeout(() => {
                        isAnimating = false;
                    }, 800); // Wartezeit zur nächsten Animation
                });
            }
            tween.start();
        });
        clearAndRemoveObject(topArtistsRank);
        clearAndRemoveObject(topArtistsName);
        topArtistsRank = await createTextMesh("Top " + (topArtistsRotationIndex + 1), 20, 100, 40, targetPoints.topArtist -200, 0);
        topArtistsName = await createTextMesh(topArtistsCube.userData.artistNames[topArtistsRotationIndex], 15, 100, 10, targetPoints.topArtist -200, 0);
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
            .easing(TWEEN.Easing.Quadratic.InOut)
            .yoyo(true) // Rückkehr zur Ausgangsposition
            .repeat(2) // Wiederhole die Bewegung einmal
            .onComplete(() => {
                if (!isAnimating) { // Wenn keine andere Animation aktiv ist, führe Rückbewegung aus
                    new TWEEN.Tween(topArtistsCube.rotation)
                        .to({ x: topArtistsCube.rotation.x + Math.PI / 10 }, 600)
                        .easing(TWEEN.Easing.Quadratic.InOut)
                        .start();
                }
            });
    
        initialTween.start();
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

    if (lastCamPosition != Math.round(camera.position.z) && freeMovement) {
        console.log("Check Cam Position Entry");
        checkCamPosition();
    }
    lastCamPosition = Math.round(camera.position.z);

    lastIntersected = updateRaycasterInteraction(raycaster, mouse, camera, heavyRotCircleGroup, lastIntersected);
    
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
            // Positionierung des TextMeshes
            textMesh.position.x = x;
            textMesh.position.y = y;
            textMesh.position.z = z;
            //Rotation um Y-Achse bei angebenem Winkel
            if (rotationY) {
                textMesh.rotateY(rotationY * Math.PI / 180);
            }
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
        new THREE.TextureLoader().load(
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
            return new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(material) });
        } else {
            return new THREE.MeshBasicMaterial({ color: material,transparent: true, opacity: 1 });
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

async function createProfil() {
    const profil = await getMe();
    const recentlyPlayed = await getRecentlyPlayed();
    let winkel = 0;
    let contentProfil = [];

    contentProfil.push(await createBildMesh(profil.imageUrl, + 80, 0, targetPoints.profil, winkel, 50));
    contentProfil.push(await createTextMesh("Hey \n" + profil.name + " !", 10, -80, 30, targetPoints.profil, 0));
    contentProfil.push(await createTextMesh("Followers: " + profil.follower.toString(), 3, 55, -30, targetPoints.profil, winkel));

    let recGroupX = -80;
    let recGroupY = 0;
    let recText = 2;
    let recBildG = 25;
    let recBildRot = 0;

    contentProfil.push(await createTextMesh("Recently Played Songs", 5, recGroupX, recGroupY, targetPoints.profil, recBildRot));

    for (let i = 0; i < 4; i++) {
        let x = recGroupX + (i % 2) * 30;
        let y = recGroupY - Math.floor(i / 2) * 30;
        contentProfil.push(await createBildMesh(recentlyPlayed[i].image, x + 13, y - 18, targetPoints.profil, recBildRot, recBildG));
        contentProfil.push(await createTextMesh(recentlyPlayed[i].name, recText, x + 1, y - 34, targetPoints.profil, recBildRot));
    }

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
    let headlineOne = await createTextMesh("Your", 20, -300, -90, topArtistZ, 0);
    let headlineTwo = await createTextMesh("\nTop 6 Artists", 40, -300, -80, topArtistZ, 0);
    topArtistsRank = await createTextMesh("Top 1", 20, 100, 40, topArtistZ, 0);
    topArtistsName = await createTextMesh(topArtists[0].name, 15, 100, 10, topArtistZ, 0);

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
    heavyRotCircleGroup.position.set(110, 0, targetPoints.onRepeat - 60);

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
            z = 20; // Zweites Element, 20 Einheiten nach vorne
        } else if (e % 3 === 2) {
            z = 10; // Drittes Element, 10 Einheiten nach vorne
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
    contentHeavyRotation.push(await createTextMesh("Your Heavy \nRotation", 40, -350, 100, targetPoints.onRepeat - 20, 30));
    contentHeavyRotation.push(await createTextMesh("Hover to see more", 20, -350, 0, targetPoints.onRepeat - 20, 30));
    contentHeavyRotation.push(heavyRotCircleGroup);

    return contentHeavyRotation;
}

// Funktion zu Erstellen aller Hauptgruppen der Szene
async function createTopSongs() {
    const songs = await getTopSongs(timeRange);
    let contentTopSongs = [];

    //console.log(songs);
    contentTopSongs.push(await createTextMesh("Deine Top 3 Songs", 5, -55, 15, targetPoints.topSong));
    contentTopSongs.push(await createBildMesh(songs[0].imageUrl, 0, 0, targetPoints.topSong, 0, 20));
    contentTopSongs.push(await createTextMesh("1: " + songs[0].name, 2, -10, -15, targetPoints.topSong));
    contentTopSongs.push(await createBildMesh(songs[1].imageUrl, -30, -5, targetPoints.topSong, 0, 20));
    contentTopSongs.push(await createTextMesh("2: " + songs[1].name, 2, -40, -20, targetPoints.topSong));
    contentTopSongs.push(await createBildMesh(songs[2].imageUrl, 30, -10, targetPoints.topSong, 0, 20));
    contentTopSongs.push(await createTextMesh("3: " + songs[2].name, 2, 20, -25, targetPoints.topSong));

    return contentTopSongs;
}

// Funktion zum Erstellen der Playlist
async function createPlaylist() {
    let contentPlaylist = [];
    let playlist = getPlaylist();
    let i = 0;
    contentPlaylist.push(await createTextMesh("Your \nunwrapped \nPlaylist", 10, -85, 20, targetPoints.playlist));
    
    return contentPlaylist;
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

    // let playlist = await createPlaylist();
    // playlist.forEach(element => inhaltGroup.add(element));
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

tick();