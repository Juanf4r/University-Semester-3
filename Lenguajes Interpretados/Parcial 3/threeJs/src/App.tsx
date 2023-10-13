import * as THREE from 'three'

function doThree(){
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0.1,0.9,0.5)

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
  );

  const cubeGeo = new THREE.BoxGeometry(1,1,1);
  const cubeM = new THREE.MeshBasicMaterial({color: 0xee9999});
  const cube = new THREE.Mesh(cubeGeo,cubeM);

  scene.add(cube);

  camera.position.z = 5;

  const renderer = new THREE.WebGL1Renderer()
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);

  function animate(){
    requestAnimationFrame(animate);
    cube.rotation.y += 0.1;
    renderer.render(scene,camera);
  }

  animate();
}

function App() {

  return (
    <>
      {doThree()}
    </>
  )
} 

export default App
