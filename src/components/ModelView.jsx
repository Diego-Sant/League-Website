import * as THREE from 'three'
import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei"

import { Suspense } from "react"

import Irelia from "../skinModels/Irelia"
import Loader from './Loader'

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, item, character}) => {
  return (
    <View index={index} id={gsapType} className={`w-full h-full ${index === 2} ? 'right-[-100%] : ''`}>
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 400]} />

      <OrbitControls makeDefault
        ref={controlRef} enableZoom={false} enablePan={false} 
        rotateSpeed={0.4} target={new THREE.Vector3(0, 140, 0)} 
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())} 
      />

      <group ref={groupRef} name={`${index === 1} ? 'Irelia' : 'Aurelion`} position={[0, 0 ,0]}>
        <Suspense fallback={<Loader />}>
          <Irelia />
        </Suspense>
      </group>
    </View>
  )
}

export default ModelView
