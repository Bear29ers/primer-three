## Table of contents

- [Three.jsの基礎・原理](#threejsの基礎原理)
- [ジオメトリ](#ジオメトリ)

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

### ジオメトリとは

物体の形状の骨格を表すもの。球体や直方体、平面などがある。

### 直方体

```js
THREE.BoxGeometry(width?, height?, depth?, widthSegments?, heightSegments?, depthSegments?);
```

後半のオブションはセグメントの数。細かくすることで良い精度の良い物体を描画できる。

セグメント数が増えるほど計算量が増え、負荷がかかる。
