import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function doThreeJS(){
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  scene.background = new THREE.Color(0.25,0.6,0.95);

  const ambientLight = new THREE.AmbientLight(0xe0e0e0, 1);
  scene.add(ambientLight);
  
  const light = new THREE.DirectionalLight(0xffffff,0.6);
  light.position.set(0,4,2);
  scene.add(light);

  const loader = new GLTFLoader();
  let model: THREE.Object3D;

  loader.load('models/spaceship.gltf', (gltf) => {
    model = gltf.scene;
    model.scale.set(0.1, 0.1, 0.1);
    scene.add(model);

    const speed = 0.005;
    let t = 0;
    let direction = 1;

    const animate = () => {
      t += speed * direction;

      if (t >= 1) 
      {
        direction = -1;
      } 
      else if (t <= 0) 
      {
        direction = 1;
      }

      const position = new THREE.Vector3(
        Math.sin(2 * Math.PI * t) * 2, 
        Math.sin(4 * Math.PI * t) * 1, 
        0 
      );

      model.position.copy(position);
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    camera.position.z = 5;

    animate();
  });

  window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
  });
}

const App = () => {

  return (
    <>
      {doThreeJS()}
    </>
  )
}

export default App
