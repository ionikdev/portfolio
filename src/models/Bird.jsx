import React, { useEffect, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { useAnimations } from "@react-three/drei";

import birdScene from "../assets/3d/bird.glb";

export function Bird({ isRotating }) {
  const birdRef = useRef();
  const { scene, animations } = useLoader(GLTFLoader, birdScene);
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

  useFrame(() => {
    if (birdRef.current) {
      birdRef.current.rotation.x += 0.01; // Adjust the rotation speed as needed
      birdRef.current.rotation.y += 0.01; // Adjust the rotation speed as needed
    }
  });

  return (
    <mesh
      ref={birdRef}
      position={[0, 0, 0]}
      onClick={() => console.log("Clicked on the bird!")}
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
