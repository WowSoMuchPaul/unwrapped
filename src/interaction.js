import { THREE, TWEEN } from './imports.js';
import { createTextMesh, heavyRotGroup, inhaltGroup, minCameraZ, maxCameraZ, camera, mouse, getMouse3DPosition } from './script.js';

const textMeshMap = new Map();

export function updateRaycasterInteraction(raycaster, mouse, camera, objectsGroup, lastIntersected) {
    if (!isCameraInBounds(camera)) return lastIntersected;
    
    raycaster.setFromCamera(mouse, camera);
    let intersects = raycaster.intersectObjects(objectsGroup.children);
    return processIntersects(intersects, lastIntersected);
}

function isCameraInBounds(camera) {
    return camera.position.z >= minCameraZ && camera.position.z <= maxCameraZ;
}

function isMouseNearCenter(intersect, threshold = 1.8) {
    const object = intersect.object;
    const bounds = new THREE.Box3().setFromObject(object); // Erstellt eine Bounding Box um das Objekt
    const size = bounds.getSize(new THREE.Vector3()); // Größe der Bounding Box
    const center = bounds.getCenter(new THREE.Vector3()); // Zentrum der Bounding Box
    const distance = intersect.point.distanceTo(center); // Distanz vom Intersektionspunkt zum Zentrum
    const maxDistance = Math.min(size.x, size.y) * threshold / 2; // Maximale Distanz basierend auf der kleineren Dimension

    return distance <= maxDistance; // Prüft, ob die Distanz innerhalb des gewünschten Bereichs ist
}


let lastHovered = null;

function processIntersects(intersects, lastIntersected) {
    if (intersects.length > 0) {
        const intersected = intersects[0].object;
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


async function animateAndDisplayText(obj) {
    if (!obj.userData.isHovered && !obj.userData.animationActive) {
        obj.userData.isHovered = true;
        obj.userData.animationActive = true;

        let songName = await displaySongName(obj);
        centerTextMesh(songName);
        let songArtists = await displaySongArtist(obj);
        centerTextMesh(songArtists, -15);

        scaleObject(obj, 1.6); // Vergrößern des Objekts beim Hover

        moveObject(obj, 300);
    }
}

async function displaySongName(obj) {
    let songNameTextMesh = await createTextMesh(obj.userData.name, 10);
    storeAndReturnMesh(obj, songNameTextMesh);
    return songNameTextMesh;
}

async function displaySongArtist(obj) {
    const artistsArray = obj.userData.artists.map(artist => artist.name).join(", ");
    let songArtistTextMesh = await createTextMesh(artistsArray, 8, 0, -15);
    storeAndReturnMesh(obj, songArtistTextMesh);
    return songArtistTextMesh;
}

function centerTextMesh(textMesh, yOffset = 0) {
    textMesh.geometry.computeBoundingBox();
    let size = new THREE.Vector3();
    textMesh.geometry.boundingBox.getSize(size);
    textMesh.position.set(
        heavyRotGroup.position.x - size.x / 2,
        heavyRotGroup.position.y - size.y / 2 + yOffset,
        heavyRotGroup.position.z
    );
}

function storeAndReturnMesh(obj, mesh) {
    if (!textMeshMap.has(obj)) {
        textMeshMap.set(obj, []);
    }
    textMeshMap.get(obj).push(mesh);
}

function moveObject(obj, duration) {
    if (obj.userData.animation) {
        obj.userData.animation.stop();
    }

    obj.userData.isAnimating = true;

    // Holen Sie die Mausposition im 3D-Raum, basierend auf der aktuellen Kamera- und Mausposition
    const mouse3DPosition = getMouse3DPosition(mouse, camera);

    // Berechnen Sie den Vektor von der aktuellen Position des Objekts zur Mausposition
    const directionVector = new THREE.Vector3(
        mouse3DPosition.x - obj.position.x,
        mouse3DPosition.y - obj.position.y,
        mouse3DPosition.z - obj.position.z
    );

    // Normalisieren Sie den Vektor, damit seine Länge 1 beträgt
    directionVector.normalize();

    // Definieren Sie, wie weit das Objekt in Richtung der Mausposition bewegt werden soll
    const moveDistance = 5; // Zum Beispiel 50 Einheiten

    // Berechnen Sie die Zielposition, indem Sie den normalisierten Vektor mit der Entfernung multiplizieren und zur aktuellen Position addieren
    const targetPosition = {
        x: obj.position.x + directionVector.x * moveDistance,
        y: obj.position.y + directionVector.y * moveDistance,
        z: obj.position.z + 50//directionVector.z * moveDistance
    };

    // Erstellen Sie eine Tween-Animation, die das Objekt zur Zielposition bewegt
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
        moveObject(obj, 300);
    }
}

function scaleObject(obj, scale) {
    if (obj.userData.originalScale === undefined) {
        obj.userData.originalScale = obj.scale.clone(); // Speichere die ursprüngliche Skalierung
    }
    obj.scale.set(obj.userData.originalScale.x * scale, obj.userData.originalScale.y * scale, obj.userData.originalScale.z * scale);
}


function removeTextMeshes(obj) {
    const textMeshes = textMeshMap.get(obj);
    if (textMeshes) {
        textMeshes.forEach(textMesh => {
            inhaltGroup.remove(textMesh);
            textMesh.geometry.dispose();
            textMesh.material.dispose();
        });
        textMeshMap.delete(obj);
    }
}