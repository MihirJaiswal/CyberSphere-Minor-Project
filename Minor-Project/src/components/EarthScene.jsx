import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';



function EarthScene() {
  const canvasRef = useRef(null);
  const scene = useRef(new THREE.Scene());
  const camera = useRef(
    new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)
  );
  const earth = useRef(null);
  const clouds = useRef(null);
  const renderer = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Earth texture
    const earthTexture = new THREE.TextureLoader().load(
      "https://i.postimg.cc/ry0pcyyZ/earth.jpg"
    );
    const earthGeometry = new THREE.SphereGeometry(30, 32, 32);
    const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
    earth.current = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.current.add(earth.current);

    // Cloud texture
    const cloudTexture = new THREE.TextureLoader().load(
      "https://i.postimg.cc/k4WhFtFh/cloud.png",
      texture => {
        texture.flipY = false; // Prevent flipping the texture vertically
        texture.needsUpdate = true; // Update the texture
      }
    );
    const cloudGeometry = new THREE.SphereGeometry(31, 32, 32);
    const cloudMaterial = new THREE.MeshBasicMaterial({ map: cloudTexture, transparent: true, opacity: 0.8 });
    clouds.current = new THREE.Mesh(cloudGeometry, cloudMaterial);
    scene.current.add(clouds.current);

    // Camera position
    camera.current.position.z = 160;

    // Renderer
    renderer.current = new THREE.WebGLRenderer({ alpha: true, canvas: canvasRef.current });
    renderer.current.setClearColor(0xffffff, 0);
    renderer.current.setPixelRatio(window.devicePixelRatio);
    renderer.current.setSize(window.innerWidth, window.innerHeight);

    // Event listeners
    window.addEventListener("resize", onWindowResize);
    document.addEventListener("mousemove", onMouseMove);

    // Animation loop
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", onWindowResize);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  function animate() {
    requestAnimationFrame(animate);
    updateRotation();
    renderer.current.render(scene.current, camera.current);
  }

  function onWindowResize() {
    camera.current.aspect = window.innerWidth / window.innerHeight;
    camera.current.updateProjectionMatrix();
    renderer.current.setSize(window.innerWidth, window.innerHeight);
  }

  function onMouseMove(event) {
    // Normalize mouse coordinates
    mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  function updateRotation() {
    // Calculate rotation based on mouse position
    target.current.x = (mouse.current.x * Math.PI) / 2;
    target.current.y = (mouse.current.y * Math.PI) / 2;

    // Apply rotation to Earth and clouds
    earth.current.rotation.x += 0.05 * (target.current.y - earth.current.rotation.x);
    earth.current.rotation.y += 0.05 * (target.current.x - earth.current.rotation.y);
    clouds.current.rotation.x += 0.05 * (target.current.y - clouds.current.rotation.x);
    clouds.current.rotation.y += 0.05 * (target.current.x - clouds.current.rotation.y);
  }

  return <canvas ref={canvasRef} />;
}

export default EarthScene;
