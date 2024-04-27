import TWEEN from '@tweenjs/tween.js';
import * as THREE from 'three';
import { createTextMesh, heavyRotGroup, inhaltGroup, minCameraZ, maxCameraZ } from './script.js';

const textMeshMap = new Map();

// Funktion zum Aktualisieren der Raycaster-Interaktion von Objekten + export für Verwendung in anderen scripten
export function updateRaycasterInteraction(raycaster, mouse, camera, objectsGroup, lastIntersected) {
    // Überprüfung, ob die Kamera innerhalb des festgelegten Z-Bereichs liegt, in script.js definiert
    if (camera.position.z < minCameraZ || camera.position.z > maxCameraZ) {
        return lastIntersected;
    }

    raycaster.setFromCamera(mouse, camera);
    let intersects = raycaster.intersectObjects(objectsGroup.children);

    if (intersects.length > 0) {
        const intersected = intersects[0].object;
        if (lastIntersected !== intersected) {
            if (lastIntersected) {
                resetObject(lastIntersected);
            }
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

async function displaySongName(obj) {
    let songNameTextMesh = await createTextMesh(obj.userData.name, 10, heavyRotGroup.position.x, heavyRotGroup.position.y, heavyRotGroup.position.z, 0);
    if (!textMeshMap.has(obj)) {
        textMeshMap.set(obj, []);
    }
    textMeshMap.get(obj).push(songNameTextMesh);
    return songNameTextMesh;
}

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
  
  

// Funktion zum Zurücksetzen von Objekten
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
