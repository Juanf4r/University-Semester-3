import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const PingPong3D: React.FC = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  const ball = new THREE.Mesh(new THREE.SphereGeometry(0.1, 32, 32), new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
  const paddle = new THREE.Mesh(new THREE.BoxGeometry(1, 0.2, 0.2), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
  const paddleSpeed = 0.05;
  let paddlePosition = 0;

  const animate = () => {
    requestAnimationFrame(animate);

    // Lógica del juego, movimiento de la paleta, colisiones, etc.

    renderer.render(scene, camera);
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      paddlePosition -= paddleSpeed;
    }
    if (event.key === 'ArrowRight') {
      paddlePosition += paddleSpeed;
    }
  };

  useEffect(() => {
    // Configuración de la escena, cámara y renderizador
    camera.position.z = 5;
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Agregar objetos a la escena
    scene.add(ball);
    scene.add(paddle);

    // Listener de eventos de teclado para el movimiento de la paleta
    window.addEventListener('keydown', handleKeyPress);

    // Iniciar la animación del juego
    animate();

    return () => {
      // Limpieza de los event listeners y recursos al desmontar el componente
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return <></>;
};

export default PingPong3D;
