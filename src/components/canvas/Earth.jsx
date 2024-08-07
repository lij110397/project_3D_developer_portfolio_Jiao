/* eslint-disable react/no-unknown-property */
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Preload, OrbitControls, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');

  return (
    <primitive object={ earth.scene } scale={ 2.5 } position-y={ 0 } rotation-y={ 0 } />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      frameLoop='demand'
      gl={ { preserveDrawingBuffer: true } }
      shadows
      camera={ {fov:45, near:0.1,far:200,position:[-4,3,6]} }
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={ false } autoRotate={ true } maxPolarAngle={ Math.PI / 2 } minPolarAngle={ Math.PI/2} />
        <Earth />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}
export default EarthCanvas