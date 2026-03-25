import { useEffect } from "react";
import gsap from "gsap";

export default function useMouseParallax(): void {
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      // 🔥 BACKGROUND MOVE
      gsap.to(".parallax-bg", {
        x: x * 40,
        y: y * 40,
        duration: 1,
        ease: "power3.out",
      });

      // 🔥 TEXT MOVE
      gsap.to(".parallax-text", {
        x: x * 20,
        y: y * 20,
        duration: 1,
      });

      // 🔥 CARD DEPTH
      gsap.to(".parallax-card", {
        rotateX: -y * 10,
        rotateY: x * 10,
        transformPerspective: 1000,
        transformOrigin: "center",
        duration: 0.6,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);
}