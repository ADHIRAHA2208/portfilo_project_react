import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Skills3D({ skill }) {
  const meshRef = useRef()

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime

    if (meshRef.current) {
      switch (skill) {
        case 'HTML':
          meshRef.current.rotation.x += delta * 0.5
          meshRef.current.rotation.y += delta * 0.5
          break
        case 'CSS':
          meshRef.current.position.y = Math.sin(time * 2) * 0.2
          meshRef.current.rotation.y += delta * 0.3
          break
        case 'JavaScript':
          const scale = 1 + Math.sin(time * 3) * 0.1
          meshRef.current.scale.setScalar(scale)
          meshRef.current.rotation.x += delta * 0.4
          meshRef.current.rotation.z += delta * 0.4
          break
        case 'ReactJS':
          meshRef.current.rotation.x += delta * 0.6
          meshRef.current.rotation.y += delta * 0.8
          break
        case 'Java':
          meshRef.current.position.y = Math.abs(Math.sin(time * 4)) * 0.3
          meshRef.current.rotation.y += delta * 0.5
          break
        case 'MySQL':
          meshRef.current.rotation.x += delta * 0.3
          meshRef.current.rotation.z += delta * 0.2
          break
        case 'Git':
          meshRef.current.rotation.y += delta * 0.7
          meshRef.current.rotation.z += delta * 0.3
          break
        default:
          meshRef.current.rotation.y += delta * 0.5
      }
    }
  })

  const getGeometry = () => {
    switch (skill) {
      case 'HTML':
        return <boxGeometry args={[1, 1, 1]} />
      case 'CSS':
        return <sphereGeometry args={[0.6]} />
      case 'JavaScript':
        return <octahedronGeometry args={[0.7]} />
      case 'ReactJS':
        return <torusGeometry args={[0.5, 0.2, 16, 100]} />
      case 'Java':
        return <cylinderGeometry args={[0.4, 0.4, 1.2, 32]} />
      case 'MySQL':
        return <boxGeometry args={[0.8, 1.2, 0.6]} />
      case 'Git':
        return <coneGeometry args={[0.5, 1, 32]} />
      default:
        return <boxGeometry args={[1, 1, 1]} />
    }
  }

  const getMaterial = () => {
    const colors = {
      HTML: '#E34F26',
      CSS: '#1572B6',
      JavaScript: '#F7DF1E',
      ReactJS: '#61DAFB',
      Java: '#ED8B00',
      MySQL: '#4479A1',
      Git: '#F05032'
    }
    return <meshStandardMaterial color={colors[skill] || '#ffffff'} />
  }

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <mesh ref={meshRef}>
        {getGeometry()}
        {getMaterial()}
      </mesh>
    </>
  )
}

export default Skills3D
