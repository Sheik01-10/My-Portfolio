import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";

export default function HeroAvatar() {
  const ref = useRef<any>(null);

  // ✅ LOAD IMAGE TEXTURE INSIDE COMPONENT
  const texture = useLoader(THREE.TextureLoader, "/profile.jpg");

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={ref}>

      {/* 🧍 PROFILE IMAGE (PURE 3D — NO BOX 🔥) */}
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.2}>
        <mesh>
          <circleGeometry args={[2.0, 50]} />
          <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
        </mesh>
      </Float>

      {/* 💻 FLOATING SYMBOLS */}

      <Float speed={3.5} floatIntensity={4}>
        <Html position={[-3, 2, 0]} transform>
          <div className="text-primary text-2xl font-bold opacity-90">&lt;/&gt;</div>
        </Html>
      </Float>

      <Float speed={2.2} floatIntensity={2.5}>
        <Html position={[3, 0.5, 0]} transform>
          <div className="text-primary text-xl opacity-70">{`{ }`}</div>
        </Html>
      </Float>

      <Float speed={1.8} floatIntensity={2}>
        <Html position={[0, 3, 0]} transform>
          <div className="text-primary text-lg opacity-60">⚛️</div>
        </Html>
      </Float>

      <Float speed={2.8} floatIntensity={3}>
        <Html position={[-2.5, -2.5, 0]} transform>
          <div className="text-primary text-xl opacity-70">🤖</div>
        </Html>
      </Float>

      <Float speed={3} floatIntensity={3}>
        <Html position={[2.5, -2.2, 0]} transform>
          <div className="text-primary text-lg opacity-60">💻</div>
        </Html>
      </Float>

      <Float speed={4} floatIntensity={5}>
        <Html position={[1.5, 2.2, 0]} transform>
          <div className="text-primary text-sm opacity-50">🌐</div>
        </Html>
      </Float>

    </group>
  );
}