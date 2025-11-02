import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import { motion } from "framer-motion";

function Planet({ position, color, speed, size }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function EarthScene() {
  const earthTexture = useTexture('https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1024px-The_Earth_seen_from_Apollo_17.jpg');
  const earthNormal = useTexture('https://threejs.org/examples/textures/planets/earth_normal_2048.jpg');

  return (
    <group>
      {/* Light setup */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Earth */}
      <mesh rotation={[0, 0, 0]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={earthTexture} normalMap={earthNormal} roughness={0.7} metalness={0.0} />
      </mesh>

      {/* Orbiting planets */}
      {[...Array(4)].map((_, i) => {
        const angle = (i / 4) * Math.PI * 2;
        const distance = 2 + i * 0.8;
        return (
          <group key={i} rotation={[0, angle, 0]}>
            <Planet
              position={[distance, 0, 0]}
              color={["#ff6b6b", "#fbbf24", "#4ade80", "#60a5fa"][i]}
              size={0.2 + i * 0.05}
            />
          </group>
        );
      })}

      <Stars radius={50} depth={30} count={5000} factor={4} fade />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
    </group>
  );
}

export default function Slide1() {
  return (
    <section
      id="home"
      className="h-screen w-full bg-gradient-to-b from-slate-900 to-slate-800 relative text-white overflow-hidden"
    >
      {/* Text positioned on the left top */}
      <div className="absolute top-10 left-10 z-10">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Rakshada</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg text-slate-300"
        >
          I have developed 3D visual user interfaces and web development.
        </motion.p>
      </div>

      <div className="w-full h-full">
        <Canvas>
          <Suspense fallback={null}>
            <EarthScene />
          </Suspense>
        </Canvas>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-400 text-sm"
      >
       ↓  Scroll 
      </motion.div>
    </section>
  );
}
