import { useEffect, useRef } from "react";
import gsap from "gsap";

function Preloader({ onComplete }) {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete,
    });

    tl.fromTo(
      textRef.current,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power4.out",
      }
    )
      .fromTo(
        lineRef.current,
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: 1,
          ease: "power3.inOut",
        },
        "-=0.4"
      )
      .to(textRef.current, {
        y: -60,
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
      })
      .to(
        loaderRef.current,
        {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
        },
        "-=0.2"
      );

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[99990] bg-[#111] text-[#F4F1EA] flex items-center justify-center"
    >
      <div className="w-[min(80%,500px)]">
        <div
          ref={textRef}
          className="text-center text-[clamp(30px,6vw,80px)] font-semibold tracking-[-0.06em]"
        >
          PRIYANKA
        </div>

        <div className="mt-6 h-[1px] bg-white/20 overflow-hidden">
          <div ref={lineRef} className="h-full bg-[#D7FF3F] origin-left" />
        </div>

        <div className="mt-3 flex justify-between text-[9px] uppercase tracking-[0.2em] text-white/40">
          <span>Creative Developer</span>
          <span>2026</span>
        </div>
      </div>
    </div>
  );
}

export default Preloader;