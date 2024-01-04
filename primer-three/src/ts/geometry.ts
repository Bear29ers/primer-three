import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// シーン
const scene = new THREE.Scene();

// カメラ
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(1, 1, 2);

// レンダラー
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// ジオメトリを作成
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
// const boxGeometry = new THREE.BoxGeometry(1, 1, 1, 16, 16, 16);
const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 16);
// const planeGeometry = new THREE.PlaneGeometry(1, 1, 16, 16);
const planeGeometry = new THREE.PlaneGeometry(10, 10);

// マテリアル
const material = new THREE.MeshNormalMaterial({
  // wireframe: true,
});

// メッシュ化
const box = new THREE.Mesh(boxGeometry, material);
const sphere = new THREE.Mesh(sphereGeometry, material);
sphere.position.x = 1.5;
const plane = new THREE.Mesh(planeGeometry, material);
plane.rotation.x = -Math.PI * 0.5;
plane.position.y = -0.5;
scene.add(box, sphere, plane);

// ライト
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

// マウス操作
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const controls = new OrbitControls(camera, renderer.domElement);
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
controls.enableDamping = true;

// ブラウザのリサイズに対応
const onWindowResize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

window.addEventListener('resize', onWindowResize);

const animate = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  controls.update();

  // レンダリング
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

animate();
