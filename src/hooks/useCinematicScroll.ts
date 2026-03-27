import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useCinematicScroll(): void {
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      // 🔥 MAIN TIMELINE
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#main-container",
          start: "top top",
          end: "+=100", // scroll length
          scrub: true,
          pin: true,
        },
      });

      // 🎬 HERO EXIT
      tl.to("#hero", {
        scale: 0.7,
        opacity: 0,
        filter: "blur(15px)",
        duration: 1,
      });

      // 🎬 SERVICES ENTRY
      tl.fromTo(
        "#services",
        { y: 300, opacity: 0, rotateX: 50 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1 }
      );

      // 🎬 SERVICES HOLD
      tl.to("#services", {
        scale: 1,
        duration: 0.5,
      });

      // 🎬 PORTFOLIO ENTRY
      tl.fromTo(
        "#portfolio",
        { y: 300, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      );

      // 🔥 PORTFOLIO STAGGER (REAL CINEMATIC)
gsap.to(".portfolio-card", {
  y: -50,
  opacity: 0,
  rotateX: 50,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: "#portfolio",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  },
});

      // 🔥 ABOUT SECTION CINEMATIC ENTRY
gsap.from(".about-section", {
  y: 200,
  rotateX: 40,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  },
});

// 🔥 SKILLS STAGGER
gsap.from(".about-card", {
  y: 100,
  opacity: 0,
  rotateX: 40,
  stagger: 0.15,
  duration: 1,
  scrollTrigger: {
    trigger: "#about",
    start: "top 70%",
    scrub: true,
  },
});

// 🔥 FLOATING EFFECT
gsap.to(".about-card", {
  y: -40,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#about",
    scrub: true,
  },
});

    });

    return () => ctx.revert();
  }, []);
}