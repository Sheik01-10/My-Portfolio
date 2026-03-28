import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useCinematicScroll(): void {
  useEffect(() => {
    const ctx = gsap.context(() => {

      ScrollTrigger.getAll().forEach(t => t.kill());

      // 🔥 HERO EXIT (CINEMATIC)
      gsap.to("#hero", {
        scale: 0.95,
        opacity: 0.3,
        filter: "blur(6px)",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // 🔥 SECTIONS ENTRY (APPLE STYLE)
      const sections = ["#services", "#portfolio", "#about", "#contact"];

      sections.forEach((sec) => {
        gsap.from(sec, {
          y: 120,
          opacity: 0,
          scale: 0.98,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        });
      });

      // 🔥 CARDS STAGGER (SUPER SMOOTH)
      gsap.from(".portfolio-card", {
        y: 100,
        opacity: 0,
        scale: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#portfolio",
          start: "top 80%",
          scrub: true,
        },
      });

      // 🔥 FLOATING PARALLAX (DEPTH)
      gsap.to(".floating", {
        y: -50,
        scrollTrigger: {
          trigger: "#portfolio",
          scrub: true,
        },
      });

      // 🔥 TEXT PARALLAX
      gsap.to(".parallax-text", {
        y: -80,
        scrollTrigger: {
          trigger: "#main-container",
          scrub: true,
        },
      });

    });

    return () => ctx.revert();
  }, []);
}