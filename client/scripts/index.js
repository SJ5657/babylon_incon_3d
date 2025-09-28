import { Engine, Scene, ArcRotateCamera, HemisphericLight, MeshBuilder, Vector3} from '@babylonjs/core';
import { GridMaterial } from '@babylonjs/materials';

const canvas = document.getElementById('3d_viewer');
const engine = new Engine(canvas, true);
const scene = new Scene(engine);
const camera = new ArcRotateCamera("cam", -Math.PI/2, Math.PI/3, 20, Vector3.Zero(), scene);
camera.attachControl(canvas, true);
new HemisphericLight('h', new Vector3(0,1,0), scene);

const ground = MeshBuilder.CreateGround('g', { width: 16, height: 16, subdivisions: 2 }, scene);

engine.runRenderLoop(() => {
    scene.render();
});

window.addEventListener('resize', () => {
    engine.resize()
});