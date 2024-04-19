import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/riven.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="AuxScene">
        <group name="fd9a1e68-7637-4e6a-9aea-d82fce4c5222" scale={[-1, 1, 1]}>
          <group name="768d499c-5f9e-4d6b-a249-9b262f115fd5">
            <group
              name="04137271-920f-4c6d-b1da-dd2490950c81"
              position={[-44.295, -10.045, -23.854]}
              scale={0.009}>
              <skinnedMesh
                name="mesh_0"
                geometry={nodes.mesh_0.geometry}
                material={materials.lambert2}
                skeleton={nodes.mesh_0.skeleton}
              />
            </group>
          </group>
          <group name="bae27b23-ef54-43f3-bcc7-8b2ebc721583">
            <primitive object={nodes.root} />
            <primitive object={nodes.WEAPON} />
            <primitive object={nodes.BUFFBONE_GLB_CHANNEL_LOC} />
            <primitive object={nodes.BUFFBONE_GLB_GROUND_LOC} />
            <primitive object={nodes.C_BUFFBONE_GLB_CENTER_LOC} />
            <primitive object={nodes.C_BUFFBONE_GLB_LAYOUT_LOC} />
            <primitive object={nodes.C_BUFFBONE_GLB_OVERHEAD_LOC} />
          </group>
        </group>
      </group>
    </group>
  )
}

export default Model;

useGLTF.preload('/models/riven.glb')