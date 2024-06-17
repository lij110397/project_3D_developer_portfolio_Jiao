/* eslint-disable react/no-unknown-property */
import { useEffect, useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
import PropTypes from 'prop-types';
const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.3} groundColor='black' />
      <pointLight intensity={15} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile?0.7:0.75}
        position={isMobile?[0,-3,-2]:[0, -4, -1.5]}
        rotation={[0, -0.15, -0.1]}
      />
    </mesh>
  )
}
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  // useEffect will check media query and set isMobile state
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)')
    setIsMobile(mediaQuery.matches)

    // change isMobile according to media query
    const handleMediaChange = (e) => {
      setIsMobile(e.matches)
    }

    mediaQuery.addEventListener('change', handleMediaChange)

    // close the eventListener
    return () => mediaQuery.removeEventListener('change', handleMediaChange)
  }, [])
  return (
    <Canvas
      frameLoop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* <Suspense fallback={ <CanvasLoader /> }> */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}
export default ComputersCanvas

Computers.propTypes = {
  isMobile: PropTypes.bool.isRequired,
}