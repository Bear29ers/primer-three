import * as THREE from 'three';

// シーンを追加
const scene = new THREE.Scene();

// カメラを追加
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
