
import { World } from 'cannon';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'


function doThreeJS(){
 
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  //Color fondo
  scene.background = new THREE.Color(0.25,0.6,0.95);

  //Luz ambiental
  const ambientLight = new THREE.AmbientLight(0xe0e0e0,1);
  scene.add(ambientLight);
  
  //Luz direccional
  const light = new THREE.DirectionalLight(0xffffff,0.6);
  light.position.set(0,4,2);
  scene.add(light);
  

  const meshes:any = [];
  const bodies:any = [];
  const maxParticles = 50;
  let actualPartciles = 0;

  const spawnParticles = setInterval(()=>{
    const esferaGeo = new THREE.SphereGeometry(2);
    const esferaMat = new THREE.MeshPhongMaterial({
      color: "gray",
      wireframe: false;
    });
    const esfeMesh = new THREE.Mesh(esferaGeo,esferaMat);

    esfeMesh.castShadow = true;

    const esferaBody: any = new CANNON.Body({
      mass:1,
      shape: new CANNON.Sphere(1),
      position: new CANNON.Vec3(),
      type: CANNON.Body.DYNAMIC,
    })
    let x = (Math.random() * (15 + 15)) -15;
    let y = (Math.random() * (20)) +20;
    let z = (Math.random() * (15 + 15)) -15;
    esferaBody.velocity.set(x,y,z);

    esferaBody.collisionResponse = false;

    meshes.push(esfeMesh)
    bodies.push(esferaBody)
    actualPartciles = actualPartciles+1;
    if(actualPartciles == maxParticles)
    {
      clearInterval(spawnParticles);
    }
  },100);



  const renderer = new THREE.WebGLRenderer();
  //renderer.toneMapping = THREE.ACESFilmicToneMapping; //opciones aestethic
  //renderer.outputColorSpace = THREE.SRGBColorSpace; //opciones aestethic
  //renderer.setPixelRatio(window.devicePixelRatio); //opciones aestethic
  renderer.setSize( window.innerWidth, window.innerHeight );

  const controls = new OrbitControls( camera, renderer.domElement );

  document.body.appendChild( renderer.domElement );

  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshPhongMaterial( { color: 0xffffff } );  
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 5;

  function animate() {
    
    for(let i = 0; i< meshes.length;i++)
    {
      const mesh = meshes[i];
      const body = bodies[i];

      scene.add(mesh);
      world.addBody(body);

      mesh.position.copy(body.position);
      mesh.quaternion.copy(body.quaternion);

      if(mesh.position.y < -6)
      {
        body.position.set(0,5,0);
        let x = (Math.random() * (15 + 15)) -15;
        let y = (Math.random() * (20)) +20;
        let z = (Math.random() * (15 + 15)) -15;
        body.velocity.set(x,y,z);
      }
    }

    // required if controls.enableDamping or controls.autoRotate are set to true
	  controls.update();
    renderer.render( scene, camera );
  }


  window.addEventListener( 'resize', onWindowResize, false );
  
  function onWindowResize(){ //funcion para redimensionar ventana si el usuario le anda moviendo
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
  }
  
  animate(); //Iniciamos el loop
}


const App = () => {

  return (
    <>
      <div id="info">Buenas</div>
      {doThreeJS()}
    </>
  )
}

export default App

