import * as THREE from 'three';

// シーンを追加
const scene = new THREE.Scene();

// カメラを追加
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
// カメラの位置を変更する
camera.position.set(0, 0, 500);

// レンダラーを追加
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ジオメトリを作成
const ballGeometry = new THREE.SphereGeometry(100, 64, 32);

// マテリアルを作成
const ballMaterial = new THREE.MeshPhysicalMaterial();

// メッシュ化
const ballMesh = new THREE.Mesh(ballGeometry, ballMaterial);
scene.add(ballMesh);

// 平行光源を追加
const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// ポイント光源を追加
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(-200, -200, -200);
scene.add(pointLight);

// レンダリング
renderer.render(scene, camera);
