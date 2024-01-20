import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;

const animate = () => {
  // レンダリング
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

// ブラウザのリサイズに対応
const onWindowResize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

const init = () => {
  // シーン
  scene = new THREE.Scene();

  // カメラ
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(1, 1, 2);

  // レンダラー
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  document.body.appendChild(renderer.domElement);

  // マウス操作
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const controls = new OrbitControls(camera, renderer.domElement);

  window.addEventListener('resize', onWindowResize);

  animate();
};

window.addEventListener('load', init);
