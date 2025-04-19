
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    if (!mountRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);
    
    // Particles
    const particlesCount = 8000;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    
    const colorOptions = theme === 'dark' 
      ? [
          new THREE.Color(0x9c27b0),  // Purple
          new THREE.Color(0x673ab7),  // Deep Purple
          new THREE.Color(0x3f51b5),  // Indigo
          new THREE.Color(0xe91e63),  // Pink
          new THREE.Color(0x2196f3),  // Blue
        ]
      : [
          new THREE.Color(0xd500f9),  // Light Purple
          new THREE.Color(0x651fff),  // Light Deep Purple
          new THREE.Color(0x3d5afe),  // Light Indigo
          new THREE.Color(0xff4081),  // Light Pink
          new THREE.Color(0x448aff),  // Light Blue
        ];
    
    // Create galaxy shape
    for (let i = 0; i < particlesCount * 3; i += 3) {
      const radius = Math.random() * 5;
      const spinAngle = radius * 3;
      const branchAngle = ((i / 3) % 3) * ((2 * Math.PI) / 3);
      
      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.3;
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.3;
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.3;
      
      positions[i] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i + 1] = randomY;
      positions[i + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;
      
      // Color
      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }
    
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Camera position
    camera.position.z = 5;
    
    // Mouse interaction
    const mouse = new THREE.Vector2();
    
    function onMouseMove(event: MouseEvent) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    
    window.addEventListener('mousemove', onMouseMove);
    
    // Animation loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      
      time += 0.001;
      
      particles.rotation.y = time * 0.1;
      particles.rotation.x = mouse.y * 0.1;
      particles.rotation.z = mouse.x * 0.1;
      
      // Subtle pulsing effect
      particles.scale.x = 1 + Math.sin(time) * 0.1;
      particles.scale.y = 1 + Math.sin(time) * 0.1;
      particles.scale.z = 1 + Math.sin(time) * 0.1;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);
  
  return <div ref={mountRef} />;
};

export default ThreeBackground;
