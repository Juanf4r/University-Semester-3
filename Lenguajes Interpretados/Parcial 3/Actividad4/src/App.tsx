import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

function doThreeJS(){

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  let currentTimeout: number | undefined;
  
  const ambientLight = new THREE.AmbientLight(0x99aaff,1);
  scene.add(ambientLight);

  const renderer = new THREE.WebGLRenderer();

  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; 
  renderer.toneMappingExposure = 0.85;
  renderer.setPixelRatio(window.devicePixelRatio); 
  renderer.setSize( window.innerWidth, window.innerHeight );

  const controls = new OrbitControls( camera, renderer.domElement );

  document.body.appendChild( renderer.domElement );

  const loader = new RGBELoader();
  loader.load('/environments/christmas_photo_studio_07_1k.hdr', (fondo) => 
  {
    fondo.mapping = THREE.EquirectangularRefractionMapping
    scene.environment = fondo
  },)

  const jpgLoader = new THREE.TextureLoader();
  jpgLoader.load('/environments/christmas_photo_studio_07.jpg', (fondo) => 
  {
    fondo.mapping = THREE.EquirectangularRefractionMapping;
    scene.background = fondo;
  })

  camera.position.z = 5;
  controls.update();

  const etiquetaRenderer = new CSS2DRenderer(); 
  etiquetaRenderer.setSize(window.innerWidth, window.innerHeight); 
  etiquetaRenderer.domElement.style.position = 'absolute';
  etiquetaRenderer.domElement.style.top = '0px';
  document.body.appendChild(etiquetaRenderer.domElement); 
  etiquetaRenderer.domElement.style.pointerEvents = 'none';
  etiquetaRenderer.domElement.style.color = "#ffffff";

  const div = document.createElement('div');
  div.style.width = '250px';
  div.style.height = 'fit-content';
  div.style.backgroundColor = 'black'
  div.style.padding = "10px"
  etiquetaRenderer.domElement.appendChild(div)

  const title = document.createElement('h2');
  title.textContent = "Missing elements"
  title.style.textAlign = 'center'
  title.style.color = 'white'
  div.appendChild(title)

  const ul = document.createElement('ul');
  div.appendChild(ul);

  const ptool = document.createElement('p');  
  ptool.className = 'tooltip hide';
  ptool.textContent = 'TOOLTIP';
  const pContainer = document.createElement('div');
  pContainer.appendChild(ptool);
  const cPointLabel = new CSS2DObject(pContainer);
  cPointLabel.position.set(0,1,0);
  scene.add(cPointLabel);

  const listener = new THREE.AudioListener();
  camera.add( listener );

  const sound = new THREE.Audio( listener );

  const audioLoader = new THREE.AudioLoader();
  audioLoader.load( 'audio/wineGlassClink.wav', function( buffer ) 
  {
    sound.setBuffer( buffer );
    sound.setLoop( false );
    sound.setVolume( 0.5 );
  });

  let isLoaded = false;
  let modelLoaded;
  const modelChilds : Array<any>= [];
  let modelNames : Array<any>= [];

  const modelsLoader = new GLTFLoader();
  modelsLoader.load('/HouseModel/coolHouse.gltf', (model) => 
  {
    modelLoaded = model.scene;
    scene.add(modelLoaded)
    modelLoaded.position.set(0,-8,0);
    isLoaded = true;

    modelLoaded.children.forEach((e) => modelChilds.push(e))
    modelChilds.forEach((e : any) => {modelNames.push(e.name)})
    setList()
  })

  const resetGame = () => 
  {
    modelChilds.forEach((e : any) => {modelNames.push(e.name)})
    setList()
  }

  function setList() {
    while(ul.firstChild)
    {
      ul.removeChild(ul.firstChild)
    }
    
    for(const e of modelNames)
    {
      const li = document.createElement('li');
      li.textContent = e;
      li.style.color = 'white'
      ul.appendChild(li)
    }
  }

  const mousePosition = new THREE.Vector2();
  const rayCaster = new THREE.Raycaster();

  window.addEventListener('click',(e)=>
  {
      if(!isLoaded) return;
      
      mousePosition.x =  ( e.clientX / window.innerWidth ) * 2 - 1;
      mousePosition.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
      
      rayCaster.setFromCamera(mousePosition,camera);
      const intersects = rayCaster.intersectObjects(modelChilds);
      if(intersects.length > 0)
      {
        const objPos = intersects[0].object;
        
        if(modelNames.includes(objPos.name))
        {
          modelNames = modelNames.filter(e => e !== objPos.name)
          ptool.className = 'tooltip show';
          const objectPos = objPos.position;
          cPointLabel.position.set(objectPos.x, objectPos.y + 1, objectPos.z);
          ptool.textContent = objPos.name;
          setList()

          if(currentTimeout != undefined)
          {
            clearTimeout(currentTimeout)
          }
          currentTimeout = setTimeout(()=>
          {
            ptool.className = 'tooltip hide';
          }, 2000)

          if(modelNames.length <= 0)
          {
            setTimeout(resetGame, 2000);
          }
        }
      }
      else
      {
        if(sound.isPlaying)
        {
          sound.stop();      
        }
        sound.play();
      }
  })

  function animate() {
    requestAnimationFrame(animate);
    controls.update();

    etiquetaRenderer.render(scene,camera);
    renderer.render( scene, camera );
  }

  window.addEventListener( 'resize', onWindowResize, false );
  
  function onWindowResize()
  {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
    etiquetaRenderer.setSize( window.innerWidth, window.innerHeight );
  }
  animate();
}

function App() 
{
  return(
    <>      
      {doThreeJS()}
    </>
  )
}

export default App