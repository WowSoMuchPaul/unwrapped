import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TrackballControls}from 'three/examples/jsm/controls/TrackballControls.js';
//import typefaceFont from 'three/examples/fonts/helvetiker_regular.typeface.json';

import {onPageLoad, authorizationReq, setFestivalPlaylist, setTimeRangeLong, setTimeRangeMid, setTimeRangeShort} from "./spotify.js";

let sizes, canvas, scene, camera, helper, renderer, controls, trackControls;

/**cursor */
const cursor = {};

init();
animate();

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
    scene = new THREE.Scene()

    /**
     * Camera
     */
    camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
    camera.position.z = 3000;
    camera.focus = 500;
    scene.add(camera);
    console.log(camera.position);

    // helper = new THREE.CameraHelper(camera);
    // scene.add(helper);

    
    /**
    * Axis Helper 
    */
    const axesHelper = new THREE.AxesHelper( 100 );
    scene.add( axesHelper );

    // Seiten Target
    let targetPoints = {};
        targetPoints.profil = camera.position.z - 500;
        targetPoints.topArtist = camera.position.z - 1000;
        targetPoints.topSong = camera.position.z - 1500;
        targetPoints.onRepeat = camera.position.z - 2000;
        targetPoints.playlist = camera.position.z - 2500;
    /**
     * Cursor auf NULL
     * */
    cursor.x = 0;
    cursor.y = 0;

    /**
     * Renderer
     */
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( sizes.width, sizes.height );
    document.body.appendChild( renderer.domElement );

    //Orbit Controls

    controls = new OrbitControls( camera, renderer.domElement );
    controls.enableDamping = true;
    controls.dampingFactor = 0.2;
    controls.enablePan = false;
    controls.enableRotate = false;
    controls.enableZoom = true;

    //Track Controls
    trackControls = new TrackballControls(camera, renderer.domElement); 
    trackControls.noRotate = true;
	trackControls.noPan = true;
	trackControls.noZoom = false;
	trackControls.zoomSpeed = 0.8;
    trackControls.staticMoving = false;
	trackControls.dynamicDampingFactor = 0.04;
    


  

    

    //Listener setzen
    window.addEventListener( 'resize', onWindowResize );
    document.getElementById("change").addEventListener("click", topSongs);
    document.getElementById("artists").addEventListener("click", topArtists);
    document.getElementById("auth").addEventListener("click", authorizationReq);
    document.getElementById("playlist").addEventListener("click", setFestivalPlaylist);
    document.getElementById("timeRange").addEventListener("change", function() {
        if (this.value == "long_term") {
            setTimeRangeLong();
        }
        if (this.value == "medium_term") {
            setTimeRangeMid();
        }
        if (this.value == "short_term") {
            setTimeRangeShort();
        }
    });

    window.addEventListener('mousemove', (event)=>
    {
        cursor.x = event.clientX / sizes.width - 0.5;
        cursor.y = event.clientY / sizes.height - 0.5;
    })
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}
const clock = new THREE.Clock();
let previousTime = 0;

function animate() {
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
}

// let target = controls.target;
// trackControls.target.set(target.x, target.y,target.z);

controls.update();
trackControls.update();
console.log(camera.position.z);
renderer.render(scene, camera);
window.requestAnimationFrame(tick);
window.requestAnimationFrame( animate);
}

function createTextMesh(text, x, y, z) {
    const fontLoader = new FontLoader()
    fontLoader.load(
        '/fonts/Gotham_Bold.typeface.json',
        (font) => {
            const textGeometry = new TextGeometry(
                text, {
                    font: font,
                    size: 5,
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

function createBildMesh(bildUrl, x, y, z, bildGroesse) {
    //Bildtextur
    const texture = new THREE.TextureLoader().load(bildUrl);//'https://3.bp.blogspot.com/-Ol0cP_dxq7U/VWjIWBW2QpI/AAAAAAAAJxg/8ackwAwAYIE/s1600/JPx7R.jpg' );
    //Plane Geometry erstellen
    const geometry = new THREE.PlaneGeometry( bildGroesse, bildGroesse );
    const material = new THREE.MeshBasicMaterial( { map: texture } );
    //Geometry und Material vereinen und der Scene hinzufühen
    let bildMesh = new THREE.Mesh( geometry, material );
    scene.add( bildMesh );
    bildMesh.position.x = x;
    bildMesh.position.y = y;
    bildMesh.position.z = z;
}

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
        createTopSong(vector.x, vector.y + 50, vector.z + 1050, topSongs.items[0]);
        createTopSong(vector.x + 150, vector.y, vector.z + 1000, topSongs.items[1]);
        createTopSong(vector.x - 150, vector.y - 50, vector.z + 950, topSongs.items[2]);
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
        createTopArtist(vector.x - 100, vector.y, vector.z + 200, topArtists.items[0]);
        createTopArtist(vector.x, vector.y, vector.z, topArtists.items[1]);
        createTopArtist(vector.x + 100, vector.y, vector.z - 200, topArtists.items[2]);
    }
}

function createTopArtist(x, y, z, artist) {
    let artistBild = artist.imageUrl;
    createInfoField(x, y, z, artist.name, artistBild);
}