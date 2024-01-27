import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let sphere: THREE.Mesh;
let plane: THREE.Mesh;
let octahedron: THREE.Mesh;

const clock = new THREE.Clock();

const animate = () => {
  // 経過時間を取得する
  const elapsedTime = clock.getElapsedTime();

  // オブジェクトを回転させる
  sphere.rotation.x = elapsedTime;
  plane.rotation.x = elapsedTime;
  octahedron.rotation.x = elapsedTime;

  sphere.rotation.y = elapsedTime;
  plane.rotation.y = elapsedTime;
  octahedron.rotation.y = elapsedTime;

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

  // ジオメトリ
  const sphereGeometry = new THREE.SphereGeometry(0.5, 16, 16);
  const planeGeometry = new THREE.PlaneGeometry(1, 1);
  const octahedronGeometry = new THREE.OctahedronGeometry(0.5);

  // const texture = new THREE.TextureLoader().load('/textures/brick.jpg');

  // マテリアル
  // const material = new THREE.MeshBasicMaterial({
  //   map: texture,
  // });
  // material.color = new THREE.Color('red');
  // material.wireframe = true;
  // material.side = THREE.DoubleSide;
  // material.opacity = 0.5;
  // material.transparent = true;
  // const material = new THREE.MeshNormalMaterial();
  // 平坦を表現する
  // material.flatShading = true;

  // ライトを追加する
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(1, 2, 3);
  scene.add(pointLight);

  const pointLightHelper = new THREE.PointLightHelper(pointLight, 1);
  scene.add(pointLightHelper);

  // メッシュ化
  sphere = new THREE.Mesh(sphereGeometry, material);
  plane = new THREE.Mesh(planeGeometry, material);
  octahedron = new THREE.Mesh(octahedronGeometry, material);

  sphere.position.x = -1.5;
  octahedron.position.x = 1.5;
  scene.add(sphere, plane, octahedron);

  // マウス操作
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const controls = new OrbitControls(camera, renderer.domElement);

  window.addEventListener('resize', onWindowResize);

  animate();
};

window.addEventListener('load', init);
