/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, Preload, OrbitControls, useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'
import PropTypes from 'prop-types'

/**
 * Renders a ball with a texture.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.imgUrl - The URL of the image texture for the ball.
 * @returns {JSX.Element} The rendered Ball component.
 */
const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={ 0.5 } />
      <directionalLight position={ [0, 0, 0.1] } />
      <mesh castShadow receiveShadow scale={ 2.5 }>
        <icosahedronGeometry args={ [1, 1] } />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={ -5 } flatShading />
        <Decal map={decal} position={[0,0,1]} rotation={[2*Math.PI,0,6.25]}/>
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameLoop='demand'
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={ false } />
        <Ball imgUrl={ icon } />
      </Suspense>

      <Preload all />
    </Canvas>
  )
  
}
export default BallCanvas;

BallCanvas.propTypes = {
  icon: PropTypes.string.isRequired
}
Ball.propTypes = {
  imgUrl: PropTypes.string.isRequired,
}