import TWEEN from '@tweenjs/tween.js';
import * as THREE from 'three';
import { createTextMesh, heavyRotGroup, inhaltGroup, minCameraZ, maxCameraZ, scene } from './script.js';

const textMeshMap = new Map();

// Funktion zum Aktualisieren der Raycaster-Interaktion von Objekten + export für Verwendung in anderen scripten
export function updateRaycasterInteraction(raycaster, mouse, camera, objectsGroup, lastIntersected) {
    // Überprüfung, ob die Kamera innerhalb des festgelegten Z-Bereichs liegt
    if (camera.position.z < minCameraZ || camera.position.z > maxCameraZ) {
        return lastIntersected; // Frühe Rückkehr, führe keine Interaktion durch
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
                moveObject(intersected, intersected.position.z + 30, 200);
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
            
            let songArtistText = await createTextMesh(obj.userData.name, 5, heavyRotGroup.position.x, heavyRotGroup.position.y, heavyRotGroup.position.z, 0);
            console.log(songArtistText);

            // Speichere das TextMesh in der Map
            textMeshMap.set(obj, songArtistText);

            new TWEEN.Tween(obj.position)
                .to({ z: targetZ }, duration)
                .easing(TWEEN.Easing.Exponential.Out)
                .onComplete(() => {
                    obj.userData.animationActive = false;
                })
                .start();
        }
    } catch (error) {
        console.error('Fehler bei der Bewegung des Objekts:', error);
    }
}

// Funktion zum Zurücksetzen von Objekten
function resetObject(obj) {
    if (obj.userData.isHovered) {
        obj.userData.isHovered = false;
        obj.userData.animationActive = true;

        // Hole und entferne das TextMesh aus der Map
        const textMesh = textMeshMap.get(obj);
        if (textMesh) {
            inhaltGroup.remove(textMesh);
            textMesh.geometry.dispose();
            textMesh.material.dispose();
            textMeshMap.delete(obj);
        }

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