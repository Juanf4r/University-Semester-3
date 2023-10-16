
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
//import { Wireframe } from 'three/examples/jsm/lines/Wireframe.js';
//import * as dat from "dat.gui";
//import { func } from 'three/examples/jsm/nodes/Nodes.js';


function doThreeJS(){

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  //Color fondo
  scene.background = new THREE.Color(0.25,0.6,0.95);

  //luz de Foco
  const sLight = new THREE.SpotLight('white',750);
  sLight.position.set(-2,18,2);
  scene.add(sLight);
  sLight.castShadow = true;

  const sLightH = new THREE.SpotLightHelper(sLight);
  scene.add(sLightH);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.shadowMap.enabled = true;

  const controls = new OrbitControls( camera, renderer.domElement );

  document.body.appendChild( renderer.domElement );

  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshPhongMaterial( { color: 0xffffff } );  
  const cube = new THREE.Mesh( geometry, material );
  cube.castShadow = true;
  scene.add( cube );

  const cube2g = new THREE.BoxGeometry( 1, 1, 1 );
  const cube2m = new THREE.MeshPhongMaterial( { color: 'yellow' } );  
  const cube2 = new THREE.Mesh( cube2g, cube2m );
  cube2.castShadow = true;
  scene.add( cube2 );
  cube2.position.y = 5;

  const cube3g = new THREE.BoxGeometry( 1, 1, 1 );
  const cube3m = new THREE.MeshPhongMaterial( { color: 'blue' } );  
  const cube3 = new THREE.Mesh( cube3g, cube3m );
  cube3.castShadow = true;
  scene.add(cube3);
  cube3.position.y = 3;
  cube3.position.z = -2;

  const cube4g = new THREE.BoxGeometry( 1, 1, 1 );
  const cube4m = new THREE.MeshPhongMaterial( { color: 'red' } );  
  const cube4 = new THREE.Mesh( cube4g, cube4m );
  cube4.castShadow = true;
  scene.add(cube4);
  cube4.position.y = 1;
  cube4.position.z = 2;

  const cube5g = new THREE.BoxGeometry( 1, 1, 1 );
  const cube5m = new THREE.MeshPhongMaterial( { color: 'red' } );  
  const cube5 = new THREE.Mesh( cube5g, cube5m );
  cube4.castShadow = true;
  scene.add(cube5);
  cube5.position.y = -1;
  cube5.position.z = 2;

  const cube6g = new THREE.BoxGeometry( 1, 1, 1 );
  const cube6m = new THREE.MeshPhongMaterial( { color: 'red' } );  
  const cube6 = new THREE.Mesh( cube6g, cube6m );
  cube4.castShadow = true;
  scene.add(cube6);
  cube5.position.y = -3;
  cube5.position.z = 2;

  const planeG = new THREE.PlaneGeometry(20,20,10,10);
  const planeM = new THREE.MeshStandardMaterial({color: 'darkgray', wireframe:false, side: THREE.DoubleSide});
  const plane = new THREE.Mesh(planeG,planeM);
  plane.rotateX(90 * (Math.PI/180));
  plane.position.y =-5;
  scene.add(plane);
  plane.receiveShadow = true;

  camera.position.z = 5;

  const clock = new THREE.Clock();
  let time;

  // const gui = new dat.GUI();
  // const options = {
  //   intensidad: 500,
  //   angulo: (Math.PI/2)/2,
  //   penumbra: 0.5,
  //   color: 0xffff00,
  //   wireframe: false
  // }

  // gui.add(options,'intensidad',0,1000);
  // gui.add(options,'angulo',0, Math.PI/2);
  // gui.add(options,'penumbra',0,1);
  // gui.add(options,'wireframe',0,1).onChange((e)=>{
  //   cube2.material.wireframe = e;
  // })
  // gui.addColor(options,'color').onChange((evento)=>{
  //   cube2.material.color.set(evento);
  // })
  // window.addEventListener('mousemove',function(e){
  //   mousePosition.x = ( e.clientX / window.innerWidth ) * 2 - 1;
  //   mousePosition.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
  // }) 

  //Raycaster
  const mousePosition = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();

window.addEventListener('click',function(e)
{
    mousePosition.x = ( e.clientX / window.innerWidth ) * 2 - 1;
    mousePosition.y = - ( e.clientY / window.innerHeight ) * 2 + 1;

    if(loaded)
    {
      raycaster.setFromCamera(mousePosition,camera);
      const objects = raycaster.intersectObjects(scene.children);

      for(let i = 0; i <objects.length; i++)
      {
        if(objects[i].object.id === cubeId)
        {
          if(cube2.parent === cube)
          {
            scene.attach(cube2);
          }
          else
          {
            cube.attach(cube2);
          }

          if(cube3.parent === cube)
          {
            scene.attach(cube3);
          }
          else
          {
            cube.attach(cube3);
          }

          if(cube4.parent === cube)
          {
            scene.attach(cube4);
          }
          else
          {
            cube.attach(cube4);
          }

          if(cube5.parent === cube)
          {
            scene.attach(cube5);
          }
          else
          {
            cube.attach(cube5);
          }

          if(cube6.parent === cube)
          {
            scene.attach(cube6);
          }
          else
          {
            cube.attach(cube6);
          }
        }
      }
    }
})

  let loaded = false;
  setTimeout(()=>{
    //cube.attach(cube2);   
    loaded = true
  },1000)

  cube2.name = "Cubo2";
  const cubeId = cube2.id;

  function animate() {
    requestAnimationFrame( animate );
    time = clock.getElapsedTime();

    cube.position.set(Math.sin(time) * 10,7,0);
    // sLight.angle = options.angulo;
    // sLight.penumbra = options.penumbra;
    // sLight.intensity = options.intensidad;
    // //sLightH.update();
	  controls.update();
    renderer.render( scene, camera );
  }

  window.addEventListener( 'resize', onWindowResize, false );

  function onWindowResize()
  {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
  }
  animate(); //Iniciamos el loop
}

const App = () => {

  return (
    <>
      {doThreeJS()}
    </>
  )
}

export default App