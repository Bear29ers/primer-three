import * as THREE from 'three';

// シーンを追加
const scene = new THREE.Scene();

// カメラを追加
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 500);

// レンダラーを追加
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ジオメトリを作成
const ballGeometry = new THREE.SphereGeometry(100, 64, 32);

// マテリアルを作成
const material = new THREE.MeshPhysicalMaterial();

renderer.render(scene, camera);
