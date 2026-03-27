import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";

export default function HeroAvatar() {
  const ref = useRef<any>(null);

  const texture = useLoader(THREE.TextureLoader, "/profile.jpg");

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002; // 🔥 smoother + less vanish
    }
  });

  return (
    <group ref={ref}>

      {/* 🧍 PROFILE IMAGE */}
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={1.2}>
        <mesh>
          {/* 🔥 RESPONSIVE SIZE */}
          <circleGeometry args={[1.5, 64]} />
          <meshBasicMaterial 
            map={texture} 
            side={THREE.DoubleSide} 
            transparent
          />
        </mesh>
      </Float>

      {/* 💻 FLOATING SYMBOLS (SPACED + CLEAN) */}

      <Float speed={2.5} floatIntensity={3}>
        <Html position={[-2.5, 1.8, 0]} transform>
          <div className="text-primary text-lg sm:text-2xl opacity-80">&lt;/&gt;</div>
        </Html>
      </Float>

      <Float speed={2} floatIntensity={2}>
        <Html position={[2.5, 0.5, 0]} transform>
          <div className="text-primary text-base sm:text-xl opacity-70">{`{ }`}</div>
        </Html>
      </Float>

      <Float speed={1.6} floatIntensity={2}>
        <Html position={[0, 2.5, 0]} transform>
          <div className="text-primary text-base sm:text-lg opacity-60">⚛️</div>
        </Html>
      </Float>

      <Float speed={2.4} floatIntensity={2.5}>
        <Html position={[-2, -2, 0]} transform>
          <div className="text-primary text-base sm:text-lg opacity-70">🤖</div>
        </Html>
      </Float>

      <Float speed={2.6} floatIntensity={2.5}>
        <Html position={[2, -1.8, 0]} transform>
          <div className="text-primary text-sm sm:text-lg opacity-60">💻</div>
        </Html>
      </Float>

      <Float speed={3} floatIntensity={3}>
        <Html position={[1.5, 1.8, 0]} transform>
          <div className="text-primary text-xs sm:text-sm opacity-50">🌐</div>
        </Html>
      </Float>

    </group>
  );
}