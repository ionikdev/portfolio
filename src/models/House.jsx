/*

*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";
import houseSence from "../assets/3d/house.glb";

// export function House(props) {
//   const houseref = useRef();
//   const { nodes, materials } = useGLTF(houseSence);
//   return (
//     <a.group ref={houseref} {...props}>
//       <mesh
//         geometry={nodes.polySurface913_aiStandardSurface3_0.geometry}
//         material={materials.aiStandardSurface3}
//       />
//       <mesh
//         geometry={nodes.polySurface381_texture_environment_0.geometry}
//         material={materials.texture_environment}
//       />
//     </a.group>
//   );
// }

export function House(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(houseSence);
  const { actions } = useAnimations(animations, group);
  return (
    <a.group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="6a2632b9b6cc4d70b6513b0dbc92b09afbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="pencil1"
                  position={[85.064, -3.96, 24.372]}
                  rotation={[0, 0.364, 0]}
                  scale={100}
                >
                  <mesh
                    name="pencil1_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pencil1_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="pencil2"
                  position={[83.225, -4.211, -13.898]}
                  rotation={[0, 0.545, 0]}
                  scale={100}
                >
                  <mesh
                    name="pencil2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pencil2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="paper1001"
                  position={[79.506, -4.264, 24.163]}
                  rotation={[-Math.PI / 2, 0, -0.407]}
                  scale={100}
                >
                  <mesh
                    name="paper1001_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.paper1001_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="paper2001"
                  position={[89.795, -3.97, -17.735]}
                  rotation={[-Math.PI / 2, 0, 2.671]}
                  scale={100}
                >
                  <mesh
                    name="paper2001_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.paper2001_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="paper3001"
                  position={[84.093, -4.264, -16.764]}
                  rotation={[-Math.PI / 2, 0, -2.648]}
                  scale={100}
                >
                  <mesh
                    name="paper3001_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.paper3001_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="paper4"
                  position={[89.32, -0.535, 13.088]}
                  rotation={[-0.157, 1.571, 0]}
                  scale={100}
                >
                  <mesh
                    name="paper4_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.paper4_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="paper5"
                  position={[90.041, -0.535, 13.088]}
                  rotation={[-0.157, 1.571, 0]}
                  scale={100}
                >
                  <mesh
                    name="paper5_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.paper5_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="paper6"
                  position={[86.971, -0.535, 13.088]}
                  rotation={[-0.157, 1.571, 0]}
                  scale={100}
                >
                  <mesh
                    name="paper6_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.paper6_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="paper7"
                  position={[85.844, -0.535, 13.088]}
                  rotation={[-0.157, 1.571, 0]}
                  scale={100}
                >
                  <mesh
                    name="paper7_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.paper7_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="folder_for_paper1"
                  position={[89.54, -4.337, 12.969]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="folder_for_paper1_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.folder_for_paper1_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="folder_for_paper2"
                  position={[86.316, -4.337, 12.969]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="folder_for_paper2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.folder_for_paper2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="board"
                  position={[51.581, -4.376, 22.488]}
                  rotation={[-Math.PI / 2, 0, 0.694]}
                  scale={100}
                >
                  <mesh
                    name="board_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.board_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="buttons"
                  position={[52.733, -3.644, 25.15]}
                  rotation={[-Math.PI / 2, 0, 0.694]}
                  scale={100}
                >
                  <mesh
                    name="buttons_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.buttons_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="conductor"
                  position={[49.91, -3.778, 21.476]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="conductor_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.conductor_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="rack"
                  position={[43.352, 0.269, 9.077]}
                  rotation={[-Math.PI / 2, 0, -0.261]}
                  scale={100}
                >
                  <mesh
                    name="rack_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.rack_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="screen"
                  position={[44.24, 6.403, 10.451]}
                  rotation={[-Math.PI / 2, 0, 0.558]}
                  scale={100}
                >
                  <mesh
                    name="screen_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.screen_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="base001"
                  position={[65.912, -3.561, 16.837]}
                  rotation={[-Math.PI / 2, 0, 0.671]}
                  scale={100}
                >
                  <mesh
                    name="base001_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.base001_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="conductor001"
                  position={[61.356, -3.523, 17.471]}
                  rotation={[-Math.PI / 2, 0, -0.708]}
                  scale={100}
                >
                  <mesh
                    name="conductor001_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.conductor001_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="rug"
                  position={[67.03, -4.338, 17.716]}
                  rotation={[-Math.PI / 2, 0, 0.671]}
                  scale={100}
                >
                  <mesh
                    name="rug_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.rug_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="wheel001"
                  position={[66.739, -3.126, 16.542]}
                  rotation={[3.135, 0.901, -3.05]}
                  scale={100}
                >
                  <mesh
                    name="wheel001_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.wheel001_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="staff1"
                  position={[94.564, -1.213, -0.719]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="staff1_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.staff1_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="flask2"
                  position={[83.566, -0.086, -0.488]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="flask2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.flask2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="flask3"
                  position={[86.52, -0.086, -0.488]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="flask3_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.flask3_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="flask1"
                  position={[75.463, -0.086, -0.488]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="flask1_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.flask1_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="flask5"
                  position={[92.085, -0.086, -0.488]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="flask5_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.flask5_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="staff2"
                  position={[84.09, -1.64, -0.719]}
                  rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                  scale={100}
                >
                  <mesh
                    name="staff2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.staff2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="flask4"
                  position={[89.473, -0.086, -0.488]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="flask4_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.flask4_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="atom1"
                  position={[56.365, -2.652, -3.978]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="atom1_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.atom1_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="atom2"
                  position={[67.123, -0.444, -0.38]}
                  rotation={[-0.267, 0.228, -1.663]}
                  scale={100}
                >
                  <mesh
                    name="atom2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.atom2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="atom3"
                  position={[63.984, 0.254, 1.925]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="atom3_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.atom3_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="atom4"
                  position={[63.603, -0.967, -2.126]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="atom4__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.atom4__0.geometry}
                    material={materials.atom4__0}
                  />
                </group>
                <group
                  name="atom5"
                  position={[60.972, -2.889, 0.65]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="atom5_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.atom5_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="atom6"
                  position={[59.2, 0.556, -1.831]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="atom6__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.atom6__0.geometry}
                    material={materials.atom4__0}
                  />
                </group>
                <group
                  name="atom7"
                  position={[56.365, -1.743, -0.211]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="atom7_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.atom7_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="atom8"
                  position={[65.08, -3.995, 0.092]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="atom8__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.atom8__0.geometry}
                    material={materials.atom4__0}
                  />
                </group>
                <group
                  name="atom9"
                  position={[57.19, -3.662, 1.99]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="atom9_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.atom9_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="stick9"
                  position={[64.048, 0.21, 1.436]}
                  rotation={[2.317, 1.222, -2.659]}
                  scale={100}
                >
                  <mesh
                    name="stick9_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.stick9_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="stick1"
                  position={[60.829, -2.349, 0.458]}
                  rotation={[-0.874, 0.111, 2.01]}
                  scale={100}
                >
                  <mesh
                    name="stick1_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.stick1_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="stick2"
                  position={[61.37, -2.037, 0.767]}
                  rotation={[-2.157, -0.416, -0.715]}
                  scale={100}
                >
                  <mesh
                    name="stick2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.stick2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="stick3"
                  position={[64.333, 0.22, 1.702]}
                  rotation={[1.488, 0.019, -0.583]}
                  scale={100}
                >
                  <mesh
                    name="stick3_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.stick3_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="stick4"
                  position={[61.879, -2.97, 0.58]}
                  rotation={[-1.609, 0.484, 0.286]}
                  scale={100}
                >
                  <mesh
                    name="stick4_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.stick4_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="stick5"
                  position={[60.156, -2.95, 1.01]}
                  rotation={[-0.916, -0.093, -2.765]}
                  scale={100}
                >
                  <mesh
                    name="stick5_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.stick5_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="stick6"
                  position={[60.226, -2.744, 0.767]}
                  rotation={[-1.094, -0.003, 2.797]}
                  scale={100}
                >
                  <mesh
                    name="stick6_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.stick6_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="stick7"
                  position={[56.406, -1.615, -0.612]}
                  rotation={[-2.06, -0.465, 1.475]}
                  scale={100}
                >
                  <mesh
                    name="stick7_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.stick7_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="bar"
                  position={[50.952, -4.218, -11.116]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="bar_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.bar_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="flask"
                  position={[51.203, 3.632, -10.496]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="flask_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.flask_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="hook"
                  position={[51.165, 12.419, -7.203]}
                  scale={100}
                >
                  <mesh
                    name="hook_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.hook_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="hook2"
                  position={[51.681, 4.268, -9.916]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="hook2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.hook2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="needle"
                  position={[51.18, 10.749, -10.536]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="needle_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.needle_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="stick"
                  position={[51.186, 0.28, -5.378]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="stick_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.stick_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="large_flask"
                  position={[67.69, -2.717, -7.182]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="large_flask_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.large_flask_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="base1"
                  position={[65.057, -30.067, 41.198]}
                  rotation={[-Math.PI / 2, 0, 0.493]}
                  scale={100}
                >
                  <mesh
                    name="base1_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.base1_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="iron1"
                  position={[69.561, -12.761, 49.699]}
                  rotation={[-Math.PI / 2, 0, 0.493]}
                  scale={100}
                >
                  <mesh
                    name="iron1_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.iron1_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="seat1"
                  position={[65.183, -16.605, 41.096]}
                  rotation={[-Math.PI / 2, 0, 0.493]}
                  scale={100}
                >
                  <mesh
                    name="seat1_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.seat1_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="small_base1"
                  position={[65.057, -23.009, 41.198]}
                  rotation={[-Math.PI / 2, 0, 0.851]}
                  scale={100}
                >
                  <mesh
                    name="small_base1_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.small_base1_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="support1"
                  position={[65.07, -34.014, 41.222]}
                  rotation={[-Math.PI / 2, 0, 2.488]}
                  scale={100}
                >
                  <mesh
                    name="support1_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.support1_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="wheel1"
                  position={[65.07, -34.014, 41.222]}
                  rotation={[0, 0.891, -2.733]}
                  scale={100}
                >
                  <mesh
                    name="wheel1_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.wheel1_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="back1"
                  position={[68.72, -6.864, 48.175]}
                  rotation={[-Math.PI / 2, 0, 0.493]}
                  scale={100}
                >
                  <mesh
                    name="back1_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.back1_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="back3"
                  position={[-11.435, -8.323, -18.773]}
                  rotation={[-Math.PI / 2, 0, 1.193]}
                  scale={100}
                >
                  <mesh
                    name="back3_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.back3_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="base3"
                  position={[-18.731, -30.141, -21.752]}
                  rotation={[-Math.PI / 2, 0, 1.193]}
                  scale={100}
                >
                  <mesh
                    name="base3_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.base3_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="iron3"
                  position={[-9.811, -12.835, -18.149]}
                  rotation={[-Math.PI / 2, 0, 1.193]}
                  scale={100}
                >
                  <mesh
                    name="iron3_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.iron3_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="seat3"
                  position={[-18.7, -16.679, -21.912]}
                  rotation={[-Math.PI / 2, 0, 1.193]}
                  scale={100}
                >
                  <mesh
                    name="seat3_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.seat3_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="small_base3"
                  position={[-18.731, -23.083, -21.752]}
                  rotation={[-Math.PI / 2, 0, 1.551]}
                  scale={100}
                >
                  <mesh
                    name="small_base3_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.small_base3_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="support3"
                  position={[-18.706, -34.088, -21.742]}
                  rotation={[-Math.PI / 2, 0, -2.646]}
                  scale={100}
                >
                  <mesh
                    name="support3_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.support3_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="wheel3"
                  position={[-18.706, -34.088, -21.742]}
                  rotation={[Math.PI, 1.101, 0.409]}
                  scale={100}
                >
                  <mesh
                    name="wheel3_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.wheel3_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="back2"
                  position={[82.583, -8.249, -48.877]}
                  rotation={[-Math.PI / 2, 0, 2.474]}
                  scale={100}
                >
                  <mesh
                    name="back2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.back2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="base2"
                  position={[77.641, -30.067, -42.739]}
                  rotation={[-Math.PI / 2, 0, 2.474]}
                  scale={100}
                >
                  <mesh
                    name="base2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.base2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="iron2"
                  position={[83.646, -12.761, -50.255]}
                  rotation={[-Math.PI / 2, 0, 2.474]}
                  scale={100}
                >
                  <mesh
                    name="iron2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.iron2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="seat2"
                  position={[77.496, -16.605, -42.814]}
                  rotation={[-Math.PI / 2, 0, 2.474]}
                  scale={100}
                >
                  <mesh
                    name="seat2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.seat2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="small_base2"
                  position={[77.641, -23.009, -42.739]}
                  rotation={[-Math.PI / 2, 0, 2.831]}
                  scale={100}
                >
                  <mesh
                    name="small_base2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.small_base2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="support2"
                  position={[77.658, -34.014, -42.761]}
                  rotation={[-Math.PI / 2, 0, -1.365]}
                  scale={100}
                >
                  <mesh
                    name="support2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.support2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="wheel2"
                  position={[77.658, -34.014, -42.761]}
                  rotation={[-Math.PI, -0.18, 0.409]}
                  scale={100}
                >
                  <mesh
                    name="wheel2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.wheel2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="shelf_handle1"
                  position={[113.686, -10.5, -89.405]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="shelf_handle1_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.shelf_handle1_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="shelf_handle2"
                  position={[113.686, -18.084, -80.386]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="shelf_handle2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.shelf_handle2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="shelf_handle3"
                  position={[113.686, -34.166, -89.017]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="shelf_handle3_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.shelf_handle3_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="shelf_handle4"
                  position={[84.879, -10.5, -89.405]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="shelf_handle4_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.shelf_handle4_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="shelf_handle5"
                  position={[56.898, -10.5, -89.405]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="shelf_handle5_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.shelf_handle5_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="shelf_handle6"
                  position={[32.264, -10.5, -89.405]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="shelf_handle6_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.shelf_handle6_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="bottom_shelf1"
                  position={[113.352, -20.274, -108.83]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="bottom_shelf1_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.bottom_shelf1_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="bottom_shelf2"
                  position={[84.82, -23.005, -111.466]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="bottom_shelf2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.bottom_shelf2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="bottom_shelf3"
                  position={[57.314, -20.951, -109.073]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="bottom_shelf3_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.bottom_shelf3_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="bottom_shelf4"
                  position={[32.267, -20.94, -109.079]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="bottom_shelf4_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.bottom_shelf4_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="big_flask001"
                  position={[106.684, 5.217, -113.249]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="big_flask001_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.big_flask001_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="Petri_dish"
                  position={[109.043, -3.388, -102.626]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Petri_dish_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Petri_dish_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="flask_drying"
                  position={[112.373, 7.764, -121.763]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="flask_drying_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.flask_drying_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="holder"
                  position={[117.977, 9.496, -122.492]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="holder_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.holder_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="salver"
                  position={[113.774, -3.788, -107.069]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="salver_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.salver_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="small_flask"
                  position={[118.219, 3.237, -104.337]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="small_flask_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.small_flask_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="paper2"
                  position={[110.989, -17.545, -89.701]}
                  rotation={[-Math.PI / 2, 0, -2.648]}
                  scale={100}
                >
                  <mesh
                    name="paper2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.paper2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="paper1"
                  position={[116.692, -17.252, -90.671]}
                  rotation={[-Math.PI / 2, 0, 2.671]}
                  scale={100}
                >
                  <mesh
                    name="paper1_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.paper1_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="paper3"
                  position={[106.236, -16.105, -90.671]}
                  rotation={[-Math.PI / 2, 0, -2.655]}
                  scale={100}
                >
                  <mesh
                    name="paper3_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.paper3_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="flask9"
                  position={[88.091, -7.358, -104.491]}
                  rotation={[-0.013, 0.275, 0.004]}
                  scale={100}
                >
                  <mesh
                    name="flask9_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.flask9_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="flask10"
                  position={[78.389, -7.6, -109.11]}
                  rotation={[-0.016, -0.62, -0.009]}
                  scale={100}
                >
                  <mesh
                    name="flask10_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.flask10_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="large_flask1"
                  position={[93.187, -5.548, -116.211]}
                  rotation={[0.079, -0.322, 1.596]}
                  scale={100}
                >
                  <mesh
                    name="large_flask1_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.large_flask1_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="Petri_dish2"
                  position={[81.666, -7.526, -107.18]}
                  rotation={[-1.811, -0.349, -0.144]}
                  scale={100}
                >
                  <mesh
                    name="Petri_dish2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Petri_dish2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="tap"
                  position={[92.791, 6.739, -122.624]}
                  rotation={[-Math.PI / 2, 1.317, 2.356]}
                  scale={100}
                >
                  <mesh
                    name="tap_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.tap_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="dirt"
                  position={[84.004, -7.907, -110.176]}
                  rotation={[-Math.PI / 2, 0, -2.809]}
                  scale={100}
                >
                  <mesh
                    name="dirt_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.dirt_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="dirt2"
                  position={[86.154, -7.509, -114.488]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="dirt2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.dirt2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="dirt3"
                  position={[83.396, -7.551, -106.395]}
                  rotation={[-Math.PI / 2, 0, -2.809]}
                  scale={100}
                >
                  <mesh
                    name="dirt3_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.dirt3_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="button_"
                  position={[57.6, -2.288, -101.57]}
                  scale={100}
                >
                  <mesh
                    name="button__Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.button__Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="conductor3"
                  position={[63.601, 2.228, -124.12]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={100}
                >
                  <mesh
                    name="conductor3_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.conductor3_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="base002"
                  position={[57.6, -2.074, -108.148]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="base002_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.base002_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="frame_"
                  position={[57.6, -1.681, -108.235]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="frame__Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.frame__Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="hole"
                  position={[64.244, -2.58, -105.911]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={100}
                >
                  <mesh
                    name="hole_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.hole_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="legs_"
                  position={[52.086, -3.679, -103.009]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="legs__Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.legs__Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="plate"
                  position={[57.583, -2.05, -108.218]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="plate_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.plate_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="point_"
                  position={[63.603, 2.226, -123.902]}
                  scale={100}
                >
                  <mesh
                    name="point__Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.point__Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="socket"
                  position={[63.603, 2.226, -124.528]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="socket_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.socket_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="bottle001"
                  position={[46.947, -1.784, -118.844]}
                  rotation={[-Math.PI / 2, 0, 0.419]}
                  scale={100}
                >
                  <mesh
                    name="bottle001_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.bottle001_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="adapter"
                  position={[32.355, -0.226, -110.854]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="adapter_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.adapter_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="big_flask"
                  position={[39.239, 0.929, -118.985]}
                  rotation={[-Math.PI / 2, 0, 0.179]}
                  scale={100}
                >
                  <mesh
                    name="big_flask_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.big_flask_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="bottle002"
                  position={[23.659, -1.837, -100.461]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="bottle002_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.bottle002_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="lower_base"
                  position={[32.224, -2.378, -105.299]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="lower_base_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.lower_base_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="midle_base"
                  position={[32.347, 4.069, -109.732]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="midle_base_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.midle_base_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="eye1"
                  position={[32.347, 3.064, -107.755]}
                  rotation={[-2.056, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="eye1_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.eye1_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="eye2"
                  position={[32.339, 4.636, -104.458]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="eye2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.eye2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="head"
                  position={[32.339, 6.346, -104.458]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="head_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.head_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="iron_"
                  position={[30.206, -0.648, -105.356]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="iron__Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.iron__Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="knob1"
                  position={[33.08, 5.762, -109.406]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={100}
                >
                  <mesh
                    name="knob1_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.knob1_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="knob2"
                  position={[35.246, 7.184, -107.109]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={100}
                >
                  <mesh
                    name="knob2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.knob2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="leg"
                  position={[35.16, -3.476, -101.561]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="leg_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.leg_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="lights"
                  position={[31.069, 9.439, -103.076]}
                  rotation={[-0.727, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="lights_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.lights_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="Petri_dish4"
                  position={[42.46, -3.792, -100.672]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Petri_dish4_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Petri_dish4_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="plate2"
                  position={[32.304, -0.658, -102.723]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="plate2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.plate2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="plates"
                  position={[30.715, -0.53, -103.594]}
                  rotation={[-Math.PI / 2, 0, 0.327]}
                  scale={100}
                >
                  <mesh
                    name="plates_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.plates_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="germs"
                  position={[42.46, -3.533, -100.672]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="germs_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.germs_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="germs1"
                  position={[44.22, -3.599, -100.688]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="germs1_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.germs1_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="germs2"
                  position={[42.994, -3.497, -98.9]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="germs2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.germs2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="bottle003"
                  position={[-46.611, -1.416, -93.751]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="bottle003_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.bottle003_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="handle1"
                  position={[99.757, 32.533, -102.805]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="handle1_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.handle1_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="handle2"
                  position={[123.903, 32.533, -102.805]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="handle2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.handle2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="handle3"
                  position={[72.98, 32.533, -97.794]}
                  rotation={[-Math.PI / 2, 0, -0.306]}
                  scale={100}
                >
                  <mesh
                    name="handle3_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.handle3_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="handle4"
                  position={[53.028, 32.533, -102.805]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="handle4_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.handle4_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="shelf"
                  position={[80.331, 36.697, -119.303]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="shelf_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.shelf_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="bottle"
                  position={[70.19, 41.595, -108.455]}
                  rotation={[-Math.PI / 2, 0, 0.062]}
                  scale={100}
                >
                  <mesh
                    name="bottle_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.bottle_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="flask11"
                  position={[72.542, 28.094, -109.338]}
                  rotation={[-Math.PI / 2, 0, 0.236]}
                  scale={100}
                >
                  <mesh
                    name="flask11_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.flask11_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="Petri_dish5"
                  position={[69.455, 26.592, -108.352]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Petri_dish5_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Petri_dish5_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="tweezers"
                  position={[74.366, 40.851, -106.651]}
                  rotation={[-1.692, 0.06, 1.114]}
                  scale={100}
                >
                  <mesh
                    name="tweezers_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.tweezers_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="rack2"
                  position={[62.91, 39.814, -111.184]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="rack2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.rack2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="base"
                  position={[3.9, -16.527, -110.757]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="base_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.base_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="head3"
                  position={[3.902, -10.646, -110.478]}
                  rotation={[-Math.PI / 2, 0, -1.175]}
                  scale={100}
                >
                  <mesh
                    name="head3_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.head3_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="legs"
                  position={[10.105, -38.346, -106.982]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="legs_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.legs_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="plane_001"
                  position={[3.906, -35.041, -100.993]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="plane_001_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.plane_001_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="wall"
                  position={[3.92, -11.826, -118.805]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="wall_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.wall_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="logo001"
                  position={[3.627, -21.468, -100.667]}
                  scale={100}
                >
                  <mesh
                    name="logo001_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.logo001_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="main_"
                  position={[-50.365, -38.344, -83.331]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="main__Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.main__Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="top_plastic"
                  position={[-39.968, 44.345, -83.331]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="top_plastic_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.top_plastic_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="door"
                  position={[-39.968, 33.369, -83.331]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="door_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.door_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="lower_plastic"
                  position={[-39.968, -23.716, -83.331]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="lower_plastic_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.lower_plastic_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="handel"
                  position={[-37.811, 16.722, -66.272]}
                  rotation={[-Math.PI / 2, 0, -0.545]}
                  scale={100}
                >
                  <mesh
                    name="handel_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.handel_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="legs1"
                  position={[-44.417, -33.815, -68.456]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="legs1_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.legs1_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="weels"
                  position={[-44.418, -36.334, -68.314]}
                  scale={100}
                >
                  <mesh
                    name="weels_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.weels_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="door001"
                  position={[-39.968, 33.369, -83.331]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="door001_glass_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.door001_glass_0.geometry}
                    material={materials.glass}
                  />
                </group>
                <group
                  name="flask_drying3"
                  position={[-45.668, 15.773, -92.731]}
                  rotation={[-Math.PI / 2, 0, -2.291]}
                  scale={100}
                >
                  <mesh
                    name="flask_drying3_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.flask_drying3_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="holder3"
                  position={[-49.911, 16.649, -88.998]}
                  rotation={[-Math.PI / 2, 0, 0.851]}
                  scale={100}
                >
                  <mesh
                    name="holder3_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.holder3_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="chalk1"
                  position={[-6.854, 7.433, -121.345]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="chalk1__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.chalk1__0.geometry}
                    material={materials.atom4__0}
                  />
                </group>
                <group
                  name="chalk2"
                  position={[-17.814, 7.159, -121.345]}
                  rotation={[-0.724, 0, 3.099]}
                  scale={100}
                >
                  <mesh
                    name="chalk2__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.chalk2__0.geometry}
                    material={materials.atom4__0}
                  />
                </group>
                <group
                  name="frame_001"
                  position={[-18.71, 29.056, -123.184]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="frame_001_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.frame_001_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="plane_"
                  position={[-18.71, 6.426, -120.107]}
                  rotation={[-1.668, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="plane__Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.plane__Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="berth"
                  position={[-61.454, -0.558, -4.133]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={100}
                >
                  <mesh
                    name="berth_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.berth_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="bottle3"
                  position={[-51.042, -1.867, -44.04]}
                  rotation={[-Math.PI / 2, 0, 2.24]}
                  scale={100}
                >
                  <mesh
                    name="bottle3_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.bottle3_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="cane"
                  position={[-38.375, -7.215, 4.23]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="cane_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.cane_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="flask12"
                  position={[-46.851, 1.669, -50.542]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="flask12_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.flask12_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="flask13"
                  position={[-50.903, 4.094, -34.384]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="flask13_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.flask13_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="flask14"
                  position={[-53.599, 9.922, -34.152]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="flask14_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.flask14_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="funnel"
                  position={[-41.586, -2.665, -0.929]}
                  rotation={[-0.29, -0.261, 3.065]}
                  scale={100}
                >
                  <mesh
                    name="funnel_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.funnel_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="hanger"
                  position={[-53.454, 12.924, -34.337]}
                  rotation={[-Math.PI / 2, 0, -0.419]}
                  scale={100}
                >
                  <mesh
                    name="hanger_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.hanger_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="lamp"
                  position={[-58.018, -1.374, 2.351]}
                  rotation={[-Math.PI / 2, 0, 0.557]}
                  scale={100}
                >
                  <mesh
                    name="lamp_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.lamp_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="leaf2"
                  position={[-62.748, 18.379, -20.836]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={100}
                >
                  <mesh
                    name="leaf2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.leaf2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="loupe"
                  position={[-39.5, -3.628, -33.981]}
                  rotation={[0, 0.91, 0]}
                  scale={100}
                >
                  <mesh
                    name="loupe_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.loupe_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="old_microscope"
                  position={[-39.869, -0.407, -21.117]}
                  rotation={[-1.676, 0.441, -1.329]}
                  scale={100}
                >
                  <mesh
                    name="old_microscope_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.old_microscope_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="Petri_dish12"
                  position={[-39.42, -3.777, -11.241]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Petri_dish12_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Petri_dish12_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="base_"
                  position={[-53.562, -5.214, -22.939]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="base__Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.base__Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="plate8"
                  position={[-47.872, -3.295, -5.827]}
                  rotation={[-Math.PI / 2, 0, -0.042]}
                  scale={100}
                >
                  <mesh
                    name="plate8_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.plate8_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="point9"
                  position={[-62.75, 19.588, -20.792]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={100}
                >
                  <mesh
                    name="point9_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.point9_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="scales"
                  position={[-46.845, 0.057, -50.552]}
                  rotation={[-Math.PI / 2, 0, -0.464]}
                  scale={100}
                >
                  <mesh
                    name="scales_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.scales_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="tube_"
                  position={[-38.552, -3.268, -47.016]}
                  rotation={[0.093, -0.174, -0.208]}
                  scale={100}
                >
                  <mesh
                    name="tube__Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.tube__Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="tubes"
                  position={[-61.23, 0.536, -6.206]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={100}
                >
                  <mesh
                    name="tubes_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.tubes_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="frame3"
                  position={[-61.834, 51.254, 0.545]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={100}
                >
                  <mesh
                    name="frame3_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.frame3_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="point2"
                  position={[-63.24, 51.254, 0.545]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={100}
                >
                  <mesh
                    name="point2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.point2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="Micro"
                  position={[-40.084, -3.6, -10.959]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Micro_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Micro_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="Micro1"
                  position={[-38.036, -3.6, -10.959]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Micro1_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Micro1_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="lines"
                  position={[-61.418, 54.747, 4.053]}
                  rotation={[0.799, 1.571, 0]}
                  scale={100}
                >
                  <mesh
                    name="lines_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.lines_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="lines2"
                  position={[-61.581, 52.346, 1.467]}
                  rotation={[0.674, Math.PI / 2, 0]}
                  scale={100}
                >
                  <mesh
                    name="lines2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.lines2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="flask12001"
                  position={[-43.652, -0.801, -80.143]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="flask12001_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.flask12001_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="flask14001"
                  position={[-53.491, 25.119, -84.734]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="flask14001_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.flask14001_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="blot_blue"
                  position={[-31.421, -38.006, -57.42]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="blot_blue_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.blot_blue_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="flask13001"
                  position={[-40.734, -2.771, -56.159]}
                  rotation={[2.717, 1.172, -0.104]}
                  scale={100}
                >
                  <mesh
                    name="flask13001_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.flask13001_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="cane1"
                  position={[-46.943, 5.15, 40.205]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={100}
                >
                  <mesh
                    name="cane1_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.cane1_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="cane3"
                  position={[-36.348, -6.888, 63.572]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="cane3_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.cane3_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="canister1"
                  position={[-53.283, 3.652, 16.32]}
                  rotation={[-3.102, -1.002, 1.581]}
                  scale={100}
                >
                  <mesh
                    name="canister1_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.canister1_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="canister2"
                  position={[-51.919, 17.025, 47.972]}
                  rotation={[-0.944, -0.587, 2.488]}
                  scale={100}
                >
                  <mesh
                    name="canister2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.canister2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="canister3"
                  position={[-47.372, 17.025, 56.543]}
                  rotation={[-Math.PI / 2, -0.831, Math.PI / 2]}
                  scale={100}
                >
                  <mesh
                    name="canister3_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.canister3_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="canister4"
                  position={[-50.831, -11.824, 55.094]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="canister4_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.canister4_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="canister5"
                  position={[-50.831, -11.824, 43.983]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="canister5_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.canister5_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="canister6"
                  position={[-44.001, -15.773, 32.41]}
                  rotation={[-Math.PI, -0.715, -Math.PI / 2]}
                  scale={100}
                >
                  <mesh
                    name="canister6_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.canister6_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="fastening"
                  position={[-63.57, 5.102, 63.624]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={100}
                >
                  <mesh
                    name="fastening_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.fastening_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="points"
                  position={[-63.224, 21.695, 32.602]}
                  rotation={[-2.405, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="points_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.points_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="poster"
                  position={[-63.226, 32.308, 38.975]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={100}
                >
                  <mesh
                    name="poster_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.poster_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="shelf1"
                  position={[-53.961, -1.085, 41.946]}
                  scale={100}
                >
                  <mesh
                    name="shelf1_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.shelf1_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="cane2"
                  position={[-46.943, -15.647, 40.359]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={100}
                >
                  <mesh
                    name="cane2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.cane2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="logo"
                  position={[-50.748, 7.935, 24.648]}
                  rotation={[-1.54, 0.005, 0.171]}
                  scale={100}
                >
                  <mesh
                    name="logo_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.logo_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="logo002"
                  position={[-46.153, 9.03, 60.573]}
                  scale={100}
                >
                  <mesh
                    name="logo002_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.logo002_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="logo003"
                  position={[-48.579, 9.418, 50.575]}
                  rotation={[0, 0.709, 0]}
                  scale={100}
                >
                  <mesh
                    name="logo003_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.logo003_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="logo004"
                  position={[-44.97, -10.609, 31.361]}
                  rotation={[-1.547, 0.021, 0.72]}
                  scale={100}
                >
                  <mesh
                    name="logo004_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.logo004_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="shelf3"
                  position={[-50.442, 22.354, -83.083]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="shelf3_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.shelf3_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="shelf1001"
                  position={[-50.442, 10.512, -83.083]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="shelf1001_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.shelf1001_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="shelf2"
                  position={[-50.442, -4.099, -83.083]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="shelf2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.shelf2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="table1"
                  position={[66.603, -9.44, 13.796]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="table1_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.table1_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="table2"
                  position={[66.603, -9.44, -15.084]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="table2_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.table2_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="piece_of_paper"
                  position={[113.812, -25.291, 10.455]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="piece_of_paper__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.piece_of_paper__0.geometry}
                    material={materials.atom4__0}
                  />
                </group>
                <group
                  name="basket"
                  position={[114.229, -28.115, 13.77]}
                  rotation={[-Math.PI / 2, 0, -0.726]}
                  scale={100}
                >
                  <mesh
                    name="basket_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.basket_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="leaf_4"
                  position={[116.047, -26.385, 13.056]}
                  rotation={[-1.023, -0.443, 0.958]}
                  scale={100}
                >
                  <mesh
                    name="leaf_4__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.leaf_4__0.geometry}
                    material={materials.atom4__0}
                  />
                </group>
                <group
                  name="leaf1"
                  position={[112.601, -24.374, 14.492]}
                  rotation={[1.792, -0.443, 0.958]}
                  scale={100}
                >
                  <mesh
                    name="leaf1_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.leaf1_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="leaf5"
                  position={[105.807, -37.029, 24.875]}
                  rotation={[2.039, -0.387, 0.754]}
                  scale={100}
                >
                  <mesh
                    name="leaf5_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.leaf5_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="leaf3"
                  position={[109.317, -37.023, 25.787]}
                  rotation={[2.039, -0.387, 0.754]}
                  scale={100}
                >
                  <mesh
                    name="leaf3_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.leaf3_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="floor_and_walls"
                  position={[-7.567, -7.6, -68.003]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="floor_and_walls_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.floor_and_walls_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="tile"
                  position={[32.218, -38.662, -28.362]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="tile_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.tile_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="dirty_footprints"
                  position={[78.131, -37.617, -80.432]}
                  rotation={[-1.551, -0.014, -3.137]}
                  scale={100}
                >
                  <mesh
                    name="dirty_footprints_Main_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.dirty_footprints_Main_0.geometry}
                    material={materials.Main}
                  />
                </group>
                <group
                  name="Armature"
                  position={[-0.009, -4.598, 36.699]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="Object_443">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_464"
                      geometry={nodes.Object_464.geometry}
                      material={materials.Main}
                      skeleton={nodes.Object_464.skeleton}
                    />
                    <group
                      name="Object_463"
                      position={[-0.009, -4.687, 35.274]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                  </group>
                </group>
                <group
                  name="scientist"
                  position={[-0.009, -4.687, 35.274]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  );
}
