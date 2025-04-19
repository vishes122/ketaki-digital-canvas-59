
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
    const particlesCount = 5000;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    
    const colorOptions = theme === 'dark' 
      ? [new THREE.Color(0x9c27b0), new THREE.Color(0x673ab7), new THREE.Color(0x3f51b5)]
      : [new THREE.Color(0xd500f9), new THREE.Color(0x651fff), new THREE.Color(0x3d5afe)];
    
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;
      
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
      size: 0.015,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Camera position
    camera.position.z = 3;
    
    // Mouse interaction
    const mouse = new THREE.Vector2();
    
    function onMouseMove(event: MouseEvent) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    
    window.addEventListener('mousemove', onMouseMove);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      particles.rotation.x += 0.0003;
      particles.rotation.y += 0.0005;
      
      // Subtle movement based on mouse position
      particles.rotation.x += mouse.y * 0.0003;
      particles.rotation.y += mouse.x * 0.0003;
      
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
