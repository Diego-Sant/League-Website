import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/irelia.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="AuxScene">
        <group name="629762f4-742e-418f-a05b-788bee114ef3" scale={[-1, 1, 1]}>
          <group name="5c98eae3-7f5b-41ec-849b-b4ed923e8648">
            <group
              name="8d6616e2-f235-4653-b8da-f3cd4ae468bb"
              position={[-95.046, -0.022, -129.823]}
              scale={0.014}>
              <group name="2c2f59d6-701a-4021-ab40-4a82203bb733">
                <skinnedMesh
                  name="mesh_0"
                  geometry={nodes.mesh_0.geometry}
                  material={materials.Irelia_Skin05_Mat}
                  skeleton={nodes.mesh_0.skeleton}
                />
                <skinnedMesh
                  name="mesh_0_1"
                  geometry={nodes.mesh_0_1.geometry}
                  material={materials.blades}
                  skeleton={nodes.mesh_0_1.skeleton}
                />
              </group>
            </group>
          </group>
          <group name="974191a2-f126-41f4-9110-1f7e8d75624d">
            <primitive object={nodes.Root} />
            <primitive object={nodes.Sword_Root} />
            <primitive object={nodes.Sword_Ground_Root} />
            <primitive object={nodes.C_Buffbone_Glb_Layout_Loc} />
            <primitive object={nodes.C_Buffbone_Glb_Center_Loc} />
            <primitive object={nodes.Buffbone_Glb_Ground_Loc} />
            <primitive object={nodes.C_Buffbone_Glb_Overhead_Loc} />
            <primitive object={nodes.Buffbone_Glb_Channel_Loc} />
            <primitive object={nodes.Buffbone_Glb_Weapon_1} />
            <primitive object={nodes.L_Buffbone_Glb_Knee_Loc} />
            <primitive object={nodes.R_Buffbone_Glb_Knee_Loc} />
            <primitive object={nodes.Buffbone_Cstm_Healthbar} />
          </group>
        </group>
      </group>
    </group>
  )
}

export default Model;

useGLTF.preload('/models/irelia.glb')