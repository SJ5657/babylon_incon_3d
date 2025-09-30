import { Engine, Scene, ArcRotateCamera, MeshBuilder, Vector3, Color4, Color3} from '@babylonjs/core';
import { StandardMaterial } from '@babylonjs/core';

//캔버스 선택
const canvas = document.getElementById('3d_viewer');

//엔진 생성
const engine = new Engine(canvas, true);

//씬 생성
const scene = new Scene(engine);
scene.clearColor = new Color4(0, 0, 0, 0);

//마케라 생성
const camera = new ArcRotateCamera("cam", -Math.PI/2, Math.PI/3, 200, Vector3.Zero(), scene);
camera.panningSensibility = 50;
camera.attachControl(canvas, true);

//그라운드 매시 생성
const ground = MeshBuilder.CreateGround('g', { width: 200, height: 200, subdivisions: 2 }, scene);
const groundMat = new StandardMaterial("groundMat", scene);
groundMat.disableLighting = true;
groundMat.emissiveColor = Color3.FromHexString('#808080');
ground.material = groundMat;

//자동 프레임 갱신
engine.runRenderLoop(() => {
    scene.render();
});

//브라우저 화면 맞춤 
window.addEventListener('resize', () => {
    engine.resize()
});
