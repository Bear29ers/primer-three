/* eslint-disable no-use-before-define */
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let pointLight: THREE.PointLight;
let controls: OrbitControls;

const init = () => {
  // シーンを追加
  scene = new THREE.Scene();

  // カメラを追加
  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
  // カメラの位置を変更する
  camera.position.set(0, 0, 500);

  // レンダラーを追加
  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.body.appendChild(renderer.domElement);

  // テクスチャを追加
  const texture = new THREE.TextureLoader().load('/textures/earth.jpg');

  // ジオメトリを作成
  const ballGeometry = new THREE.SphereGeometry(100, 64, 32);

  // マテリアルを作成
  const ballMaterial = new THREE.MeshPhysicalMaterial({ map: texture });

  // メッシュ化
  const ballMesh = new THREE.Mesh(ballGeometry, ballMaterial);
  scene.add(ballMesh);

  // 平行光源を追加
  const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  // ポイント光源を追加
  pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(-200, -200, -200);
  // 光の減衰率を設定
  pointLight.decay = 1;
  // 光源強度の設定
  pointLight.power = 1000;
  scene.add(pointLight);

  // ポイント光源の場所を視覚化
  const pointLightHelper = new THREE.PointLightHelper(pointLight, 30);
  scene.add(pointLightHelper);

  // マウス操作を設定
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  controls = new OrbitControls(camera, renderer.domElement);

  // ウィンドウのリサイズで実行
  window.addEventListener('resize', onWindowResize);

  animate();
};

// ブラウザのリサイズに対応させる
const onWindowResize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  // カメラの変更を有効にする
  camera.updateProjectionMatrix();
};

// ポイント光源を巡回させる
const animate = () => {
  pointLight.position.set(
    200 * Math.sin(Date.now() / 500),
    200 * Math.sin(Date.now() / 1000),
    200 * Math.cos(Date.now() / 500)
  );

  requestAnimationFrame(animate);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  controls.update();

  // レンダリング
  renderer.render(scene, camera);
};

window.addEventListener('load', init);
