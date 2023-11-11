import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/bird.glb";

export function Bird({ isRotating }) {
  const birdRef = useRef();

  const { scene, animations } = useGLTF(birdScene);

  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    if (actions && actions["Take 001"]) {
      if (isRotating) {
        actions["Take 001"].play();
      } else {
        actions["Take 001"].stop();
      }
    }
  }, [actions, isRotating]);

  return (
    <mesh
      ref={birdRef}
      position={[0, 0, 0]}
      onClick={() => console.log("Clicked on the bird!")} // Add your interaction logic here
      onPointerOver={(event) => (
        event.object.material.color.set(0xff0000),
        console.log("Mouse over the bird!")
      )}
      onPointerOut={(event) => (
        event.object.material.color.set(0xffffff),
        console.log("Mouse out of the bird!")
      )}
    >
      <primitive object={scene} />
    </mesh>
  );
}
