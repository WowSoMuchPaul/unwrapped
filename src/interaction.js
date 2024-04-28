import TWEEN from '@tweenjs/tween.js';
import * as THREE from 'three';
import { createTextMesh, heavyRotGroup, inhaltGroup, minCameraZ, maxCameraZ } from './script.js'; //Import der benötigten Variablen aus script.js

// TextMeshes werden in einer Map gespeichert, um sie später wieder entfernen zu können
const textMeshMap = new Map();

/**
 * Aktualisiert die Raycaster-Interaktion basierend auf der Mausposition und der Kamera.
 * 
 * @param {THREE.Raycaster} raycaster - Der Raycaster, der für die Interaktion verwendet wird.
 * @param {THREE.Vector2} mouse - Die aktuelle Mausposition.
 * @param {THREE.Camera} camera - Die Kamera, die für die Interaktion verwendet wird.
 * @param {THREE.Group} objectsGroup - Die Gruppe von Objekten, auf die der Raycaster angewendet wird.
 * @param {THREE.Object3D} lastIntersected - Das zuletzt intersected Objekt.
 * @returns {THREE.Object3D} - Das aktuell intersected Objekt.
 */
export function updateRaycasterInteraction(raycaster, mouse, camera, objectsGroup, lastIntersected) {
    // Überprüfung, ob die Kamera innerhalb des festgelegten Z-Bereichs liegt, in script.js definiert
    if (camera.position.z < minCameraZ || camera.position.z > maxCameraZ) {
        return lastIntersected;
    }
    
    raycaster.setFromCamera(mouse, camera);
    let intersects = raycaster.intersectObjects(objectsGroup.children);

    // Wenn ein Objekt gehovert wird, wird es animiert
    if (intersects.length > 0) {
        const intersected = intersects[0].object;
        // Wenn das gehoverte Objekt ein neues Objekt ist, wird das alte zurückgesetzt
        if (lastIntersected !== intersected) {
            if (lastIntersected) {
                resetObject(lastIntersected);
            }
            // Wenn das gehoverte Objekt noch nicht gehovert wurde, wird es animiert
            if (!intersected.userData.isHovered && !intersected.userData.animationActive) {
                moveObject(intersected, intersected.position.z + 50, 200);
            }
            lastIntersected = intersected;
        }
    } else if (lastIntersected) {
        resetObject(lastIntersected);
        lastIntersected = null;
    }
    return lastIntersected;
}


/**
 * Bewegt ein Objekt zu einer bestimmten Z-Koordinate über eine angegebene Dauer.
 * @param {Object3D} obj - Das zu bewegende Objekt.
 * @param {number} targetZ - Die Ziel-Z-Koordinate, zu der das Objekt bewegt werden soll.
 * @param {number} duration - Die Dauer der Animation in Millisekunden.
 * @returns {Promise<void>} Ein Promise, das erfüllt wird, wenn die Animation abgeschlossen ist.
 * @throws {Error} Wenn ein Fehler beim Animieren des Objekts auftritt.
 */
async function moveObject(obj, targetZ, duration) {
    try {
        if (!obj.userData.isHovered) {
            obj.userData.isHovered = true;
            obj.userData.animationActive = true;
            
            let songName = await displaySongName(obj);
            centerTextMesh(songName, heavyRotGroup.position.x, heavyRotGroup.position.y, heavyRotGroup.position.z);
            let songArtists = await displaySongArtist(obj);
            centerTextMesh(songArtists, heavyRotGroup.position.x, heavyRotGroup.position.y - 15, heavyRotGroup.position.z);

            new TWEEN.Tween(obj.position)
                .to({ z: targetZ }, duration)
                .easing(TWEEN.Easing.Exponential.Out)
                .onComplete(() => {
                    obj.userData.animationActive = false;
                })
                .start();
        }
    } catch (error) {
        console.error('Fehler beim animieren des Objekts:', error);
    }
}

/**
 * Zeigt den Namen des Songs an.
 * 
 * @param {Object} obj - Das Objekt, das den Song repräsentiert.
 * @returns {Promise<THREE.Mesh>} - Das TextMesh-Objekt, das den Songnamen darstellt.
 */
async function displaySongName(obj) {
    let songNameTextMesh = await createTextMesh(obj.userData.name, 10, heavyRotGroup.position.x, heavyRotGroup.position.y, heavyRotGroup.position.z, 0);
    if (!textMeshMap.has(obj)) {
        textMeshMap.set(obj, []);
    }
    textMeshMap.get(obj).push(songNameTextMesh);
    return songNameTextMesh;
}

/**
 * Zeigt den Namen des Künstlers eines Songs an.
 * 
 * @param {Object} obj - Das Objekt, das die Informationen über den Song enthält.
 * @returns {Promise<THREE.Mesh>} - Ein Promise, das ein TextMesh-Objekt zurückgibt, das den Namen des Künstlers darstellt.
 */
async function displaySongArtist(obj) {
    const artistsArray = obj.userData.artists;
    const artistsNames = artistsArray.map(artist => artist.name).join(", ");
    let songArtistTextMesh = await createTextMesh(artistsNames, 8, heavyRotGroup.position.x, heavyRotGroup.position.y - 15, heavyRotGroup.position.z, 0);
    if (!textMeshMap.has(obj)) {
        textMeshMap.set(obj, []);
    }
    textMeshMap.get(obj).push(songArtistTextMesh);
    return songArtistTextMesh;
}

/**
 * Zentriert den TextMesh an der angegebenen Position.
 * 
 * @param {THREE.Mesh} textMesh - Das TextMesh, das zentriert werden soll.
 * @param {number} x - Die x-Koordinate der gewünschten Position.
 * @param {number} y - Die y-Koordinate der gewünschten Position.
 * @param {number} z - Die z-Koordinate der gewünschten Position.
 */
function centerTextMesh(textMesh, x, y, z) {
    // Stelle sicher, dass die Bounding Box berechnet ist
    textMesh.geometry.computeBoundingBox();
  
    // Hole die Größe der Bounding Box
    const size = new THREE.Vector3();
    textMesh.geometry.boundingBox.getSize(size);
  
    // Zentriere den TextMesh an der gewünschten Position
    textMesh.position.x = x - size.x / 2;
    textMesh.position.y = y - size.y / 2;
    textMesh.position.z = z;
  }
    
/**
 * Setzt das übergebene Objekt zurück, indem es die entsprechenden Eigenschaften zurücksetzt
 * und die TextMeshes aus der Szene entfernt.
 * 
 * @param {Object3D} obj - Das Objekt, das zurückgesetzt werden soll.
 */
function resetObject(obj) {
    if (obj.userData.isHovered) {
        obj.userData.isHovered = false;
        obj.userData.animationActive = true;

        // Holt die TextMeshes des Objekts aus der Map und entfernt sie aus der Szene
        const textMeshes = textMeshMap.get(obj);
        if (textMeshes) {
            textMeshes.forEach(textMesh => {
                inhaltGroup.remove(textMesh);
                textMesh.geometry.dispose();
                textMesh.material.dispose();
            });
            textMeshMap.delete(obj);
        }
        // Setzt die Position des Objekts auf die ursprüngliche Position zurück
        let originalZ = obj.userData.originalZ;
        new TWEEN.Tween(obj.position)
            .to({ z: originalZ }, 300)
            .easing(TWEEN.Easing.Exponential.Out)
            .onComplete(() => {
                obj.userData.animationActive = false;
                obj.userData.isHovered = false;
            })
            .start();
    }
}