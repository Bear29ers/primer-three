import GUI from 'lil-gui';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// UIデバッグ
const gui = new GUI();

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

// ジオメトリ
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

// マテリアル
const material = new THREE.MeshBasicMaterial({
  color: 'red',
});

// メッシュ化
const box = new THREE.Mesh(boxGeometry, material);
scene.add(box);

// デバッグ
// -3~3の間を0.01ずつ移動できる
// gui.add(box.position, 'x', -3, 3, 0.01);
gui.add(box.position, 'x').min(-3).max(3).step(0.01).name('transformX');
gui.add(box.position, 'y').min(-3).max(3).step(0.01).name('transformY');
gui.add(box.position, 'z').min(-3).max(3).step(0.01).name('transformZ');

gui.add(box.rotation, 'x').min(-3).max(3).step(0.01).name('rotationX');

// 表示・非表示
gui.add(box, 'visible');
// ワイヤーフレームON・OFF
gui.add(material, 'wireframe');

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

const clock = new THREE.Clock();

const animate = () => {
  const elapsedTime = clock.getElapsedTime();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  controls.update();

  // レンダリング
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

animate();
