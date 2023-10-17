
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { Wireframe } from 'three/examples/jsm/lines/Wireframe.js';
import * as dat from "dat.gui";
import { func } from 'three/examples/jsm/nodes/Nodes.js';


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
  const cube5m = new THREE.MeshPhongMaterial( { color: 'white' } );  
  const cube5 = new THREE.Mesh( cube5g, cube5m );
  cube5.castShadow = true;
  scene.add(cube5);
  cube5.position.y = -1;
  cube5.position.z = 2;

  const cube6g = new THREE.BoxGeometry( 1, 1, 1 );
  const cube6m = new THREE.MeshPhongMaterial( { color: 'green' } );  
  const cube6 = new THREE.Mesh( cube6g, cube6m );
  cube6.castShadow = true;
  scene.add(cube6);
  cube6.position.y = -3;
  cube6.position.z = 2;

  const cube7g = new THREE.BoxGeometry( 1, 1, 1 );
  const cube7m = new THREE.MeshPhongMaterial( { color: 'purple' } );  
  const cube7 = new THREE.Mesh( cube7g, cube7m );
  cube7.castShadow = true;
  scene.add(cube7);
  cube7.position.y = -5;
  cube7.position.z = -1;

  const planeG = new THREE.PlaneGeometry(20,20,10,10);
  const planeM = new THREE.MeshStandardMaterial({color: 'darkgray', wireframe:false, side: THREE.DoubleSide});
  const plane = new THREE.Mesh(planeG,planeM);
  plane.rotateX(90 * (Math.PI/180));
  plane.position.y =-7;
  scene.add(plane);
  plane.receiveShadow = true;


  const cubeId1 = cube.id;
  const cubeId2 = cube2.id;
  const cubeId3 = cube3.id;
  const cubeId4 = cube4.id;
  const cubeId5 = cube5.id;
  const cubeId6 = cube6.id;
  const cubeId7 = cube7.id;
  camera.position.z = 5;

  const clock = new THREE.Clock();
  let time;

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
          if(objects[i].object.id === cubeId1)
          {
            if(cube.parent === cube)
            {
              scene.attach(cube);
            }
            else
            {
              cube.attach(cube);
            }
          }

          if(objects[i].object.id === cubeId2)
          {
            if(cube2.parent === cube)
            {
              scene.attach(cube2);
            }
            else
            {
              cube.attach(cube2);
            }
          }

          if(objects[i].object.id === cubeId3)
          {
            if(cube3.parent === cube)
            {
              scene.attach(cube3);
            }
            else
            {
              cube.attach(cube3);
            }
          }

          if(objects[i].object.id === cubeId4)
          {
            if(cube4.parent === cube)
            {
              scene.attach(cube4);
            }
            else
            {
              cube.attach(cube4);
            }
          }

          if(objects[i].object.id === cubeId5)
          {
            if(cube5.parent === cube)
            {
              scene.attach(cube5);
            }
            else
            {
              cube.attach(cube5);
            }
          }

          if(objects[i].object.id === cubeId6)
          {
            if(cube6.parent === cube)
            {
              scene.attach(cube6);
            }
            else
            {
              cube.attach(cube6);
            }
          }

          if(objects[i].object.id === cubeId7)
          {
            if(cube7.parent === cube)
            {
              scene.attach(cube7);
            }
            else
            {
              cube.attach(cube7);
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