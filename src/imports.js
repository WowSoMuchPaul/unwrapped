/**
 * Modul, das alle benötigten Abhängigkeiten importiert.
 * @module imports
 */
import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import playlistCover from '../static/images/playlistCover.jpg';
import playlistCoverMid from '../static/images/playlistCoverMid.jpg';
import playlistCoverShort from '../static/images/playlistCoverShort.jpg';
import profilBackup from '../static/images/profil_placeholder.png';

export { THREE, TWEEN, FontLoader, TextGeometry, TrackballControls, GLTFLoader, playlistCover, playlistCoverMid, playlistCoverShort, profilBackup};