import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { TrackballControls}from 'three/examples/jsm/controls/TrackballControls.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import TWEEN from '@tweenjs/tween.js';
//import typefaceFont from 'three/examples/fonts/helvetiker_regular.typeface.json';

import {onPageLoad, authorizationReq, setFestivalPlaylist, setTimeRangeLong, setTimeRangeMid, setTimeRangeShort} from "./spotify.js";

let sizes, canvas, scene, camera, helper, renderer, controls, trackControls,hemiLightHelper, lastCamPosition, inhaltGroup;
var inEinemBereich = false;
var tweenAktiviert = false;
var freeMovement = true;
const targetPoints = {};
const bereichOffsetVorne = 400;
const bereichDampingVorne = bereichOffsetVorne/2;
const bereichOffsetHinten = 100;
const bereichDampingHinten = bereichOffsetHinten/1.2;
const zoomSpeedNorm = 0.3;
const zoomSpeedBereich = 0.02;
const tweenStartDistance = 10;
const cameraTargetDistance = 100;


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
    camera.position.z = 3500;
    camera.far = 0.1;
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
    // targetPoints.profil = camera.position.z - (camera.position.z / 6);
    // targetPoints.topArtist = camera.position.z - (2 *(camera.position.z / 6));
    targetPoints.topSong = camera.position.z - (3 * (camera.position.z / 6));
    targetPoints.onRepeat = camera.position.z - (4 * (camera.position.z / 6));
    targetPoints.playlist = camera.position.z - (5 * (camera.position.z / 6));

    /**
     * Cursor auf NULL
     * */
    cursor.x = 0;
    cursor.y = 0;

    /**
    * Lights
    */

    const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 2 );
    hemiLight.color.setHSL( 0.6, 1, 0.6 );
    hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
    hemiLight.position.set( 0, 50, 0 );
    scene.add( hemiLight );

    const hemiLightHelper = new THREE.HemisphereLightHelper( hemiLight, 10 );
    scene.add( hemiLightHelper );

    // const dirLight = new THREE.DirectionalLight( 0xffffff, 3 );
    // dirLight.color.setHSL( 0.1, 1, 0.95 );
    // dirLight.position.set( - 1, 1.75, 1 );
    // dirLight.position.multiplyScalar( 30 );
    // scene.add( dirLight );

    // dirLight.castShadow = true;

    // dirLight.shadow.mapSize.width = 2048;
    // dirLight.shadow.mapSize.height = 2048;

    // const d = 50;

    // dirLight.shadow.camera.left = - d;
    // dirLight.shadow.camera.right = d;
    // dirLight.shadow.camera.top = d;
    // dirLight.shadow.camera.bottom = - d;

    // dirLight.shadow.camera.far = 3500;
    // dirLight.shadow.bias = - 0.0001;
    
    // const dirLightHelper = new THREE.DirectionalLightHelper( dirLight, 10 );
	// 			scene.add( dirLightHelper );


    /**
     * Renderer
     */
    renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
    renderer.setClearColor( 0xffffff, 0);
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( sizes.width, sizes.height );
    document.body.appendChild( renderer.domElement );

    //Track Controls
    trackControls = new TrackballControls(camera, renderer.domElement); 
    trackControls.noRotate = true;
	trackControls.noPan = true;
	trackControls.noZoom = false;
	trackControls.zoomSpeed = zoomSpeedNorm;
    trackControls.staticMoving = false;
	trackControls.dynamicDampingFactor = 0.04;
    
    //Listener setzen
    window.addEventListener( 'resize', onWindowResize );
    document.getElementById("closebtn").addEventListener("click", closeOverlay);
    document.getElementById("help").addEventListener("click", openOverlay);
    document.getElementById("delete").addEventListener("click", deleteGroup);
    document.getElementById("create").addEventListener("click", createAll);
    document.getElementById("auth").addEventListener("click", authorizationReq);
    document.getElementById("playlist").addEventListener("click", setFestivalPlaylist);
    document.getElementById("timeRange").addEventListener("change", function() {
        deleteGroup();
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
        setTimeout(function(){
            createAll();
        }, 250);
    });

    window.addEventListener('mousemove', (event)=>
    {
        cursor.x = event.clientX / sizes.width - 0.5;
        cursor.y = event.clientY / sizes.height - 0.5;
    })

    //Alle Geometrien mit den Spotify Daten erstellen
    if(localStorage.getItem("access_token") != undefined) {
        createAll();
    }
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
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function checkCamPosition(){
    //Aktuelle Kamera Position
    const pos = Math.round(camera.position.z);

    //Bereich Profil
    if((pos <= (targetPoints.profil + bereichOffsetVorne)) && (pos >= (targetPoints.profil - bereichOffsetHinten)))
    {
        handleBereich(pos, targetPoints.profil);
    }

    //Bereich Artists
    if((pos <= (targetPoints.topArtist + bereichOffsetVorne)) && (pos >= (targetPoints.topArtist - bereichOffsetHinten)))
    {
        handleBereich(pos, targetPoints.topArtist);
    }

    //Bereich Playlist
    if((pos <= (targetPoints.playlist + bereichOffsetVorne)) && (pos >= (targetPoints.playlist - bereichOffsetHinten)))
    {
        handleBereich(pos, targetPoints.playlist);
    }
}

function handleBereich(pos, tp) {

    //Kamera ist im Eintritts-Damping
    if((pos <= (tp + bereichOffsetVorne)) && (pos >= (tp + bereichOffsetVorne - bereichDampingVorne)))
    {
        trackControls.zoomSpeed = zoomSpeedBereich + (pos - ((tp + bereichOffsetVorne) - bereichDampingVorne)) * ((zoomSpeedBereich - zoomSpeedNorm) / (-bereichDampingVorne));
        //console.log("Damping. ZoomSpeed: " + trackControls.zoomSpeed);
    }

    //Kamera ist im Bereich Playlist
    if((pos <= (tp + bereichOffsetVorne - bereichDampingVorne)) && (pos >= (tp - bereichOffsetHinten + bereichDampingHinten)))
    {
        //Kamera betritt Bereich Playlist
        if (!inEinemBereich) 
        {
            inEinemBereich = true;
            //trackControls.zoomSpeed = zoomSpeedBereich;
            //console.log("BEREICH BETRETEN " + pos);
        }
        //TWEEN zur Camera Target Position
        if((pos <= (tp + bereichOffsetVorne - bereichDampingVorne - tweenStartDistance)) && (pos >= (tp - bereichOffsetHinten + bereichDampingHinten + tweenStartDistance)) && (!tweenAktiviert))
        {
            tweenAktiviert = true;
            TrackballControls.noZoom = true;
            new TWEEN.Tween(camera.position).to(
                {
                    z: tp + cameraTargetDistance
                },5000
            )
            .easing(TWEEN.Easing.Exponential.Out)
            .start().onComplete(() => 
            {
                TrackballControls.noZoom = false;

            });
        }
    }
    //Kamera verlaesst Bereich Playlist
    if(((pos > (tp + bereichOffsetVorne - bereichDampingVorne)) || (pos < (tp - bereichOffsetHinten + bereichDampingHinten))) && inEinemBereich)
    {
        inEinemBereich = false;
        tweenAktiviert = false;
        //trackControls.zoomSpeed = zoomSpeedNorm;
        //console.log("BEREICH VERLASSEN " + pos);
    }

    //Kamera ist im Austritts-Damping
    if((pos >= (tp - bereichOffsetHinten)) && (pos <= (tp - bereichOffsetHinten + bereichDampingHinten)))
    {
        trackControls.zoomSpeed = zoomSpeedBereich - (pos - ((tp - bereichOffsetHinten) + bereichDampingHinten)) * ((zoomSpeedBereich - zoomSpeedNorm) / (-bereichDampingHinten));
        //console.log("Damping Hinten. ZoomSpeed: " + trackControls.zoomSpeed);
    }
}

function bringeZumBereich(target) {

    freeMovement = false;
    TrackballControls.noZoom = true;

    new TWEEN.Tween(camera.position).to(
        {
            z: target
        },5000
    )
    .easing(TWEEN.Easing.Exponential.Out)
    .start().onComplete(() => 
    {
        TrackballControls.noZoom = false;
        freeMovement = true;
    });
}

const clock = new THREE.Clock();
let previousTime = 0;

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - previousTime;
    previousTime = elapsedTime;

    //Animate camera
    const parallaxX = cursor.x * 50;
    const parallaxY = - cursor.y * 50;
    camera.position.x += (parallaxX - camera.position.x)  * 5 * deltaTime;
    camera.position.y += (parallaxY - camera.position.y)  * 5 * deltaTime;

    if(lastCamPosition != Math.round(camera.position.z) && freeMovement){
        checkCamPosition();
        //console.log("Es bewegt sich. " + Math.round(camera.position.z));
    }
    lastCamPosition = Math.round(camera.position.z);
    
    // let target = controls.target;
    // trackControls.target.set(target.x, target.y,target.z);
    //controls.update();
    trackControls.update();
    TWEEN.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
}


function createTextMesh(text, fontsize, x, y, z, rotationY) {
    const fontLoader = new FontLoader()
    fontLoader.load(
        '/fonts/Gotham_Bold.typeface.json',
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
            textMesh.rotateY(rotationY * (Math.PI / 180))
        }
    )
}

/**
function createTextMeshHeadline(text, x, y, z) {
    const fontLoader = new FontLoader()
    fontLoader.load(
        '/fonts/Gotham_Bold.typeface.json',
        (font) => {
            const textGeometry = new TextGeometry(
                text, {
                    font: font,
                    size: 25,
                    height: 1.2,
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
            scene.add(textMesh);
            textMesh.position.x = x;
            textMesh.position.y = y;
            textMesh.position.z = z;
        }
    )
}
*/

function createBildMesh(bildUrl, x, y, z, rotationY, bildGroesse) {
    //Bildtextur
    const texture = new THREE.TextureLoader().load(bildUrl);//'https://3.bp.blogspot.com/-Ol0cP_dxq7U/VWjIWBW2QpI/AAAAAAAAJxg/8ackwAwAYIE/s1600/JPx7R.jpg' );
    //Plane Geometry erstellen
    const geometry = new THREE.PlaneGeometry( bildGroesse, bildGroesse );
    const material = new THREE.MeshBasicMaterial( { map: texture, side : THREE.DoubleSide} ); 
    //Geometry und Material vereinen und der Scene hinzufühen
    let bildMesh = new THREE.Mesh( geometry, material );
    inhaltGroup.add( bildMesh );
    bildMesh.position.x = x;
    bildMesh.position.y = y;
    bildMesh.position.z = z;
    bildMesh.rotateY(rotationY * (Math.PI / 180));
    return bildMesh;
}

function createProfil() {
    let profil;
    let recentlyPlayed;
    if (localStorage.getItem("myProfil") == undefined) {
        console.log("Profil noch nicht ermittelt.");
    }else{
        profil = JSON.parse(localStorage.getItem("myProfil"));
        recentlyPlayed = JSON.parse(localStorage.getItem("recentlyPlayed"));
    let winkel = 0;
    createBildMesh(profil.imageUrl, + 80, 0, targetPoints.profil, winkel, 50);
    createTextMesh("Hey \n " + profil.name + " !", 10, -80, 30, targetPoints.profil, 0);
    createTextMesh( "Followers: " + profil.follower.toString() , 3, 55, -30, targetPoints.profil, winkel);

    let recGroupX = -80;
    let recGroupY = -17;
    let recText = 2;
    let recBildG = 25;
    let recBildRot = 0; 

    createTextMesh("Recently Played Songs", 5, recGroupX, recGroupY, targetPoints.profil , recBildRot);
    
    createBildMesh(recentlyPlayed[0].image, recGroupX + 13 , recGroupY - 18, targetPoints.profil , recBildRot, recBildG);
    createTextMesh(recentlyPlayed[0].name, recText, recGroupX + 1, recGroupY - 34, targetPoints.profil ,recBildRot);

    createBildMesh(recentlyPlayed[1].image, recGroupX + 43, recGroupY - 18, targetPoints.profil , recBildRot, recBildG);
    createTextMesh(recentlyPlayed[1].name, recText, recGroupX + 31, recGroupY  -34, targetPoints.profil, recBildRot);

    createBildMesh(recentlyPlayed[2].image, recGroupX + 13, recGroupY - 48, targetPoints.profil , recBildRot, recBildG);
    createTextMesh(recentlyPlayed[2].name, recText, recGroupX + 1, recGroupY - 64, targetPoints.profil,recBildRot);

    createBildMesh(recentlyPlayed[3].image, recGroupX + 43, recGroupY - 48, targetPoints.profil , recBildRot, recBildG);
    createTextMesh(recentlyPlayed[3].name, recText, recGroupX + 31, recGroupY - 64, targetPoints.profil, recBildRot);
    }
}

function createTopArtist() {
    let artists;
    if (localStorage.getItem("topArtists") == undefined) {
        console.log("Profil noch nicht ermittelt.");
    }else{
        artists = JSON.parse(localStorage.getItem("topArtists"));
    }
    //console.log(artists);
    createBildMesh(artists[0].imageUrl, 0, 0, targetPoints.topArtist, 0, 50);
}

function createHeavyRotation() {
    let heavyRotation;
    if (localStorage.getItem("onRepeat") == undefined) {
        console.log("Profil noch nicht ermittelt.");
    }else{
        heavyRotation = JSON.parse(localStorage.getItem("onRepeat"));
    }
    // console.log(heavyRotation);

    const heavyRotGroup = new THREE.Group();
    scene.add(heavyRotGroup);
    heavyRotGroup.position.z = targetPoints.onRepeat;
    inhaltGroup.add(heavyRotGroup);
    // console.log(heavyRotGroup.position);


    const anzahlElemente = heavyRotation.length;
    let radius = 250;
    let vektor = {x:0, y:0, z: 0};
    console.log(vektor, anzahlElemente, radius);

    const objektPositionen = [];

    for (let e = 0; e < anzahlElemente; e++) {
        let theta = (2 * Math.PI / anzahlElemente) * e;
        let x = vektor.x + radius * Math.cos(theta);
        let y = vektor.y + radius * Math.sin(theta);
        let z = vektor.z;

        const objektPosition = {x: x, y: y, z: z};
        objektPositionen.push(objektPosition);
        
    }
    console.log(objektPositionen);

    let i = 0;
    while ( i  < anzahlElemente) {
        let cordX = objektPositionen[i].x;
        let cordY = objektPositionen[i].y; 
        let cordZ = objektPositionen[i].z;
        console.log(cordX, cordY, cordZ);

        let bildMesh = createBildMesh(heavyRotation[i].image,cordX, cordY,cordZ, 20, 100);
        console.log(bildMesh);
        heavyRotation[i].mesh = bildMesh;
        // console.log(heavyRotation[i].mesh.position.z);
        heavyRotGroup.add(bildMesh);
        //bildMesh.lookAt(0, 0, 1166);
        i++;
        console.log("bildmesh erstellt!");
    }
    
    createTextMesh("Your \nHeavy Rotation", 40, -200, 0, targetPoints.onRepeat -300, 0);
    console.log(targetPoints.onRepeat);
}



function createAll() {
    inhaltGroup = new THREE.Group();
    inhaltGroup.name = "inhaltGroup";
    // createProfil();
    // createTopArtist();
    createHeavyRotation();
    scene.add(inhaltGroup);
}

function deleteGroup() {
    clearThree(inhaltGroup);
}

function clearThree(obj){
    while(obj.children.length > 0){ 
      clearThree(obj.children[0]);
      obj.remove(obj.children[0]);
    }
    if(obj.geometry) obj.geometry.dispose();
  
    if(obj.material){ 
      //in case of map, bumpMap, normalMap, envMap ...
      Object.keys(obj.material).forEach(prop => {
        if(!obj.material[prop])
          return;
        if(obj.material[prop] !== null && typeof obj.material[prop].dispose === 'function')                                  
          obj.material[prop].dispose();                                                      
      })
      obj.material.dispose();
    }
} 

/**
function createInfoField(x, y, z, titel, bildUrl) {
    createBildMesh(bildUrl, x - 50, y, z, 50);
    createTextMesh(titel, x + 50, y + 40, z,);
}

function topSongs() {
    if (localStorage.getItem("topSongs") == undefined) {
        console.log("Top Songs noch nicht ermittelt.");
    }else{
        let vector = {x:0, y:0, z:200};
        let topSongs = JSON.parse(localStorage.getItem("topSongs"));
        createTopSong(vector.x, vector.y + 50, vector.z + 1050, topSongs[0]);
        createTopSong(vector.x + 150, vector.y, vector.z + 1000, topSongs[1]);
        createTopSong(vector.x - 150, vector.y - 50, vector.z + 950, topSongs[2]);
    }
}

function createTopSong(x, y, z, song) {
    let topCover = song.imageUrl;
    let topArtist = song.artists[0].name;
    createInfoField(x, y, z, song.name, topCover);
    createTextMesh("By " + topArtist,x + 50, y + 20, z);
}

function topArtists() {
    if (localStorage.getItem("topArtists") == undefined) {
        console.log("Top Artists noch nicht ermittelt.");
    }else{
        let vector = {x:0, y:0, z:200};
        let topArtists = JSON.parse(localStorage.getItem("topArtists"));
        createTextMeshHeadline("Top Artists", vector.x, vector.y, vector.z + 125);
        createTopArtist(vector.x - 100, vector.y, vector.z + 200, topArtists[0]);
        createTopArtist(vector.x, vector.y, vector.z, topArtists[1]);
        createTopArtist(vector.x + 100, vector.y, vector.z - 200, topArtists[2]);
    }
}

function createTopArtist(x, y, z, artist) {
    let artistBild = artist.imageUrl;
    createInfoField(x, y, z, artist.name, artist.imageUrl);
}
*/
tick();