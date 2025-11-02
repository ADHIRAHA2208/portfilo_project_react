import React, { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Scene from './components/Scene'
import UI from './components/UI'

function App() {
  const [showProjectDetails, setShowProjectDetails] = useState(false)

  return (
    <div className="relative w-full min-h-screen bg-black">
      <UI
        showProjectDetails={showProjectDetails}
        setShowProjectDetails={setShowProjectDetails}
      />
    </div>
  )
}

export default App
