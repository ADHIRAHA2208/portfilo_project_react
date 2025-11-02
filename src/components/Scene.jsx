import React, { useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import * as THREE from 'three'

function Scene({ showProjectDetails }) {
  const earthRef = useRef()
  const moonRef = useRef()
  const marsRef = useRef()
  const venusRef = useRef()
  const astronautRef = useRef()

  // Hover states for planets
  const [earthHovered, setEarthHovered] = useState(false)
  const [moonHovered, setMoonHovered] = useState(false)
  const [marsHovered, setMarsHovered] = useState(false)
  const [venusHovered, setVenusHovered] = useState(false)

  // Load Earth texture
  const earthTexture = useLoader(TextureLoader, 'https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg')

  useFrame((state, delta) => {
    // Rotate Earth with hover effect
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * (earthHovered ? 0.5 : 0.2)
    }

    const time = state.clock.elapsedTime

    // Orbit Moon around Earth with hover effect
    if (moonRef.current) {
      const moonRadius = 6
      moonRef.current.position.x = Math.cos(time * 0.5) * moonRadius
      moonRef.current.position.z = Math.sin(time * 0.5) * moonRadius
      moonRef.current.rotation.y += delta * (moonHovered ? 1.0 : 0.5)
    }

    // Orbit Mars around Earth with hover effect
    if (marsRef.current) {
      const marsRadius = 8
      marsRef.current.position.x = Math.cos(time * 0.3) * marsRadius
      marsRef.current.position.z = Math.sin(time * 0.3) * marsRadius
      marsRef.current.rotation.y += delta * (marsHovered ? 0.8 : 0.3)
    }

    // Orbit Venus around Earth with hover effect
    if (venusRef.current) {
      const venusRadius = 7
      venusRef.current.position.x = Math.cos(time * 0.4) * venusRadius
      venusRef.current.position.z = Math.sin(time * 0.4) * venusRadius
      venusRef.current.rotation.y += delta * (venusHovered ? 0.9 : 0.4)
    }

    // Orbit Astronaut around Earth
    if (astronautRef.current) {
      const astronautRadius = 5
      astronautRef.current.position.x = Math.cos(time * 0.7) * astronautRadius
      astronautRef.current.position.z = Math.sin(time * 0.7) * astronautRadius
      astronautRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <>

      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      {/* Stars background */}
      {Array.from({ length: 50 }, (_, i) => (
        <mesh key={i} position={[
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100
        ]}>
          <sphereGeometry args={[0.05]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}

      {/* Earth */}
      <mesh
        ref={earthRef}
        position={[0, 0, 15]}
        onPointerOver={() => setEarthHovered(true)}
        onPointerOut={() => setEarthHovered(false)}
      >
        <sphereGeometry args={[15]} />
        <meshStandardMaterial map={earthTexture} />
      </mesh>

      {/* Orbit Paths */}
      {/* Moon Orbit */}
      <mesh position={[0, 0, 15]}>
        <torusGeometry args={[6, 0.05, 2, 64]} />
        <meshBasicMaterial color="#ffffff" opacity={0.3} transparent />
      </mesh>

      {/* Mars Orbit */}
      <mesh position={[0, 0, 15]}>
        <torusGeometry args={[8, 0.05, 2, 64]} />
        <meshBasicMaterial color="#ffffff" opacity={0.3} transparent />
      </mesh>

      {/* Venus Orbit */}
      <mesh position={[0, 0, 15]}>
        <torusGeometry args={[7, 0.05, 2, 64]} />
        <meshBasicMaterial color="#ffffff" opacity={0.3} transparent />
      </mesh>

      {/* Astronaut Orbit */}
      <mesh position={[0, 0, 15]}>
        <torusGeometry args={[5, 0.05, 2, 64]} />
        <meshBasicMaterial color="#ffffff" opacity={0.3} transparent />
      </mesh>

      {/* Moon */}
      <mesh
        ref={moonRef}
        onPointerOver={() => setMoonHovered(true)}
        onPointerOut={() => setMoonHovered(false)}
      >
        <sphereGeometry args={[0.7]} />
        <meshStandardMaterial color="#c0c0c0" />
      </mesh>

      {/* Mars */}
      <mesh
        ref={marsRef}
        onPointerOver={() => setMarsHovered(true)}
        onPointerOut={() => setMarsHovered(false)}
      >
        <sphereGeometry args={[1]} />
        <meshStandardMaterial color="#cd5c5c" />
      </mesh>

      {/* Venus */}
      <mesh
        ref={venusRef}
        onPointerOver={() => setVenusHovered(true)}
        onPointerOut={() => setVenusHovered(false)}
      >
        <sphereGeometry args={[0.8]} />
        <meshStandardMaterial color="#daa520" />
      </mesh>

      {/* Astronaut */}
      <mesh ref={astronautRef}>
        <boxGeometry args={[0.4, 1, 0.4]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </>
  )
}

export default Scene
