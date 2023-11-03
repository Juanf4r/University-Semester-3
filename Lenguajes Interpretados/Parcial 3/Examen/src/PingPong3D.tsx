import * as THREE from 'three';
//import * as CANNON from 'cannon';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { CSS2DRenderer} from 'three/addons/renderers/CSS2DRenderer.js';

function doThree(){
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  const listener = new THREE.AudioListener();
  const audioLoader = new THREE.AudioLoader();
  
  const ballHitSound = new THREE.Audio(listener);
  audioLoader.load('audio/sonidoPow.mp3',function(buffer)
  {
    ballHitSound.setBuffer(buffer);
    ballHitSound.setLoop(false);
    ballHitSound.setVolume(.5); 
  })
  
  const music = new THREE.Audio(listener);
  audioLoader.load('audio/musicLoop.mp3',function(buffer)
  {
    music.setBuffer(buffer);
    music.setLoop(true);
    music.setVolume(0.09);
    music.play()
  });

  camera.add(listener);
  camera.position.set(10,15,-30);

  const light = new THREE.DirectionalLight(0xffffff,0.6);
  light.position.set(0,35,0);
  scene.add(light);
  light.shadow.camera.top = 12.5;
  light.shadow.camera.bottom = -12.5;
  light.shadow.camera.left = 25; 
  light.shadow.camera.right = -25; 
  light.castShadow = true;
  
  const ambientLight = new THREE.AmbientLight(0x99aaff,1);
  scene.add(ambientLight);
  
  const renderer = new THREE.WebGLRenderer();
  renderer.toneMappingExposure = 0.1;
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.shadowMap.enabled = true;

  const controls = new OrbitControls( camera, renderer.domElement );

  const etiquetasRenderer = new CSS2DRenderer(); 
  etiquetasRenderer.setSize(window.innerWidth, window.innerHeight); 
  etiquetasRenderer.domElement.style.position = 'absolute'; 
  etiquetasRenderer.domElement.style.top = '0px';
  document.body.appendChild(etiquetasRenderer.domElement);
  etiquetasRenderer.domElement.style.pointerEvents = 'none'; 
  etiquetasRenderer.domElement.style.color = "#ffffff";
  document.body.appendChild( renderer.domElement );

  //--------------------------CREACION DE FONDO--------------------------//

  const loader = new RGBELoader();

  loader.load(
    '/environments/colorful_studio_2k.hdr',
    function(texture)
    {
      texture.mapping = THREE.EquirectangularRefractionMapping;
      scene.environment = texture;
    }
  )

  const jpgloader = new THREE.TextureLoader();
  jpgloader.load(
    'environments/colorful_studio.jpg',
    (texture) => 
    {
      texture.mapping = THREE.EquirectangularRefractionMapping;
      scene.background = texture;
    }
  )

  //--------------------------PUNTAJE--------------------------//

  let iaPuntaje = 0;
  let jugadorPuntaje = 0;
  let jugadorPuntajeMax = parseInt(localStorage.getItem('jugadorPuntajeMax') || '0') || 0;

  if(jugadorPuntajeMax === 0)
  {
    localStorage.setItem('jugadorPuntajeMax','0');
  }

    const div = document.createElement('div');
    div.style.width = '200px';
    div.style.height = '100px';
    div.style.backgroundColor = 'white';
    div.style.color = 'black';
    etiquetasRenderer.domElement.appendChild(div);

    const puntajeMax = document.createElement("p");
    puntajeMax.textContent = "Highscore: " + jugadorPuntajeMax.toString();
    puntajeMax.style.color = "black";
    puntajeMax.style.alignContent = "center";
    puntajeMax.style.fontSize = "15px";
    puntajeMax.style.paddingLeft = "10px";
    div.appendChild(puntajeMax);

    const puntaje = document.createElement("p");
    puntaje.textContent = "Score: " + jugadorPuntaje.toString();
    puntaje.style.color = "black";
    puntaje.style.alignContent = "center";
    puntaje.style.fontSize = "15px";
    puntaje.style.paddingLeft = "10px";
    div.appendChild(puntaje);

    const puntajeIA = document.createElement("p");
    puntajeIA.textContent = "AI Score: " + iaPuntaje.toString();
    puntajeIA.style.color = "black";
    puntajeIA.style.alignContent = "center";
    puntajeIA.style.fontSize = "15px";
    puntajeIA.style.paddingLeft = "10px";
    div.appendChild(puntajeIA);

  //--------------------------CREACION DE MODELOS--------------------------//

  const sueloGeometry = new THREE.PlaneGeometry(50,25,5,5);
  const sueloMaterial = new THREE.MeshPhongMaterial(
    {
      color:0x339944,     
      side:THREE.DoubleSide,
    }
  );
  const sueloMesh = new THREE.Mesh(sueloGeometry,sueloMaterial);
  sueloMesh.rotateX(-90 * (Math.PI/180))
  sueloMesh.receiveShadow = true;
  
  const techoMaterial = new THREE.MeshPhongMaterial(
    {
      color:0x339944,     
      side:THREE.DoubleSide,
      wireframe: true,
    }
  );

  const techoMesh = new THREE.Mesh(sueloGeometry,techoMaterial);
  techoMesh.rotateX(-90 * (Math.PI/180))
  techoMesh.position.set(0,25,0);
  techoMesh.receiveShadow = true;

  const paredGeometry = new THREE.PlaneGeometry(50,25,5,5);
  const paredMaterial = new THREE.MeshPhongMaterial(
    {
      color:0x339944,     
      side:THREE.DoubleSide,
      wireframe: true,
    }
  );
  const pared1Mesh = new THREE.Mesh(paredGeometry,paredMaterial);
  pared1Mesh.position.set(0,12.5,-12.5);
  pared1Mesh.receiveShadow = true; 

  const pared2Mesh = new THREE.Mesh(paredGeometry,paredMaterial);
  pared2Mesh.position.set(0,12.5,12.5);
  pared2Mesh.receiveShadow = true; 

  const racketGeometry = new THREE.PlaneGeometry(5,5,5,5);
  const racketMaterial = new THREE.MeshPhongMaterial
  ({ color: 'white', side:THREE.DoubleSide});

  const racket = new THREE.Mesh(racketGeometry, racketMaterial);
  racket.position.set(25, 12.5, 0);
  racket.rotateY(-90 * (Math.PI/180));

  const racketIA = new THREE.Mesh(racketGeometry, racketMaterial);
  racketIA.position.set(-25, 12.5, 0);
  racketIA.rotateY(-90 * (Math.PI/180));

  const sphereG = new THREE.SphereGeometry(1,16);
  const sphereM = new THREE.MeshStandardMaterial(
    {
      color: 0xff0000,
    })
  const ball = new THREE.Mesh(sphereG,sphereM);
  ball.castShadow = true;
  ball.position.set(0,12.5,0);
  
  scene.add(sueloMesh);
  scene.add(techoMesh);
  scene.add(pared1Mesh); 
  scene.add(pared2Mesh);
  scene.add(racket);
  scene.add(racketIA);
  scene.add(ball);

  let ballSpeedX = .1;
  let ballSpeedY = .1;
  let ballSpeedZ = .1;

  function checkCollision() 
  {
    if (ball.position.y >= 23.5 || ball.position.y <= 2.5) 
    {
      ballHitSound.play();
      ballSpeedY *= -1;
    }

    if (ball.position.z >= 10 || ball.position.z <= -10) 
    {
      ballHitSound.play();
      ballSpeedZ *= -1;
    }

    if(
      ball.position.x >= racket.position.x - 4.5 / 2 &&
      ball.position.x <= racket.position.x + 4.5 / 2 &&
      ball.position.y >= racket.position.y - 4.5 / 2 &&
      ball.position.y <= racket.position.y + 4.5 / 2 ) 
    {
      ballHitSound.play();
      ballSpeedY *= -1;
      ballSpeedX *= -1;
    }
    else if(
      ball.position.x >= racketIA.position.x - 4.5 / 2 &&
      ball.position.x <= racketIA.position.x + 4.5 / 2 &&
      ball.position.y >= racketIA.position.y - 4.5 / 2 &&
      ball.position.y <= racketIA.position.y + 4.5 / 2 ) 
    {
      ballHitSound.play();
      ballSpeedY *= -1;
      ballSpeedX *= -1;
    }
  }

  function moveRacketIA() 
  {
    if (racketIA.position.y > ball.position.y) 
    {racketIA.position.y -= 0.4;} 

    else if (racketIA.position.y < ball.position.y) 
    {racketIA.position.y += 0.4;}

    if (racketIA.position.z > ball.position.z) 
    {racketIA.position.z -= 0.4;} 

    else if (racketIA.position.z < ball.position.z) 
    {racketIA.position.z += 0.4;}
  }

  function animateBall()
  {
    ball.position.x += ballSpeedX;
    ball.position.y += ballSpeedY;
    ball.position.z += ballSpeedZ;

    checkCollision();
    moveRacketIA();

    if (ball.position.x >= 30)
    {
      ball.position.set(0,12.5,0); 
      iaPuntaje ++;
      puntajeIA.textContent = "AI Score: " + iaPuntaje.toString();
    }
  
    if(ball.position.x <= -30) 
    {
      ball.position.set(0,12.5,0); 
      jugadorPuntaje++;
      puntaje.textContent = "Score: " + jugadorPuntaje.toString();
      if(jugadorPuntaje > jugadorPuntajeMax)
      {
        jugadorPuntajeMax = jugadorPuntaje;
        puntajeMax.textContent = "Highscore: " + jugadorPuntajeMax.toString();
        localStorage.setItem('jugadorPuntajeMax',jugadorPuntajeMax.toString());
      }
      localStorage.setItem('jugadorPuntaje', jugadorPuntaje.toString());
    }
  }

  //--------------------------UPDATE DEL JUEGO--------------------------//

  function animate() 
  {
    animateBall();
    
    controls.update();
    renderer.render( scene, camera );
    requestAnimationFrame( animate );
  }
  window.addEventListener("keydown",(e)=>
  {
    if(e.key === 'w' || e.key === 'W')
    {
      racket.position.y += 0.5;
    }

    if(e.key === 's' || e.key === 'S')
    {
      racket.position.y -= 0.5;
    }

    if(e.key === 'a' || e.key === 'A')
    {
      racket.position.z += 0.5;
    }

    if(e.key === 'd' || e.key === 'D')
    {
      racket.position.z -= 0.5;
    }
  })

  window.addEventListener( 'resize', onWindowResize, false );
  
  function onWindowResize()
  {camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix();
  controls.update(); renderer.setSize( window.innerWidth, window.innerHeight);}
  animate();
}

const App = () => {
  return (
    <>      
    {doThree()}
    </>
  )
}

export default App