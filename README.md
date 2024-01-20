## Table of contents

- [Three.jsの基礎・原理](#threejsの基礎原理)
- [ジオメトリ](#ジオメトリ)
- [マテリアルとメッシュ](#マテリアルとメッシュ)

## Three.jsの基礎・原理

- [Three.jsとは？](#threejsとは)
- [シーン、カメラ、レンダラーの概念](#シーンカメラレンダラーの概念)
- [Three.jsにおける座標軸の取り扱い](#threejsにおける座標軸の取り扱い)

### Three.jsとは？

3D = **Three** Demention

これまで 2D（平面）での表現が多かった Web サイトは、**WebGL**の発展によりブラウザ上で 3 次元空間の表現ができるようになった。

Three.js は 3 次元空間の表現を得意とする JavaScript ライブラリ。

## シーン、カメラ、レンダラーの概念

- シーン（Scene）
  - 物体（メッシュ）を配置するためのステージ（シーン）
- カメラ（PerspectiveCamera）
  - カメラ越しに物体を見るイメージになるので、シーンに対してカメラを設置
  - `PerspectiveCamera(視野角, アスペクト比, 開始距離, 終了距離)`
- レンダラー（WebGLRenderer）
  - カメラで撮ったシーンを画面に移すための変換器。変換したものをブラウザ（Canvas）に映し出す。
  - Three.jsで一般的に使われるのが、「WebGLRenderer」

## Three.jsにおける座標軸の取り扱い

Three.jsで物体をレンダリングすると、原点を軸に描画される。3次元の座標軸（X軸、Y軸、Z軸）の値によって描画される位置が決定する。

## ジオメトリ

- [ジオメトリとは](#ジオメトリとは)
- [直方体](#直方体)
- [球体](#球体)
- [平面](#平面)
- [ドーナツ型](#ドーナツ型)
- [バッファジオメトリ](#バッファジオメトリ)

### ジオメトリとは

物体の形状の骨格を表すもの。球体や直方体、平面などがある。

### 直方体

```js
THREE.BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments);
```

後半のオブションはセグメントの数。細かくすることで良い精度の良い物体を描画できる。

セグメント数が増えるほど計算量が増え、負荷がかかる。

### 球体

```js
THREE.SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);
```

### 平面

```js
THREE.PlaneGeomentry(width, height, widthSegments, heightSegments);
```

### ドーナツ型

```js
THREE.TorusGeometry(radius, tube, radialSeguments, tubularSegments, arc);
```

### バッファジオメトリ

バッファジオメトリとは、頂点データを直接操作できる形状オブジェクト。

Three.jsが用意しているジオメトリ関数はバッファジオメトリを継承して作成されている。そのため、`BufferGeometry`で物体を生成する場合は位置情報を指定する必要がある。

```js
const bufferGeometry = new THREE.BufferGeometry();
bufferGeometry.setAttribute('position', new THREE.BufferAttribute(Float32Array, 3));
```

## マテリアルとメッシュ

- [マテリアルとメッシュの関係](#マテリアルとメッシュの関係)

### マテリアルとメッシュの関係

- ジオメトリ（骨格）に対して素材や材質のことをマテリアルと呼ぶ。
- ジオメトリとマテリアルとメッシュ化（`Mesh()`）したものが、メッシュとして描画される。
- メッシュ化のメソッドは色々と種類があるので、どういった物体を描画したいかによって適切なメソッドを選択してメッシュ化を行う。
