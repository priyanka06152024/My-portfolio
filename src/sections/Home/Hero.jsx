
import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";

import MagneticButton from "../../components/MagneticButton";
import HeroScene from "../../ThreeD/HeroScene";

function Hero() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);

  const navigate = useNavigate();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 1.5,
      });

      tl.from(".hero-line", {
        yPercent: 120,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
      })
        .from(
          subRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          ".hero-meta",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#F4F1EA] overflow-hidden"
    >
      <div className="container min-h-screen relative flex items-center">
        <div className="relative z-20 w-full pt-20">
          <div className="hero-meta flex items-center gap-3 mb-10">
            <span className="lime-dot" />

            <span className="section-label">
              Frontend / Creative Developer
            </span>
          </div>

          <div ref={titleRef}>
            <div className="overflow-hidden">
              <h1 className="hero-line display-font text-[clamp(70px,13vw,210px)] font-semibold tracking-[-0.09em] leading-[0.72]">
                PRIYANKA
              </h1>
            </div>

            <div className="overflow-hidden ml-[8vw]">
              <h1 className="hero-line display-font text-[clamp(70px,13vw,210px)] font-semibold tracking-[-0.09em] leading-[0.8]">
                CHAUHAN<span className="text-[#D7FF3F]">.</span>
              </h1>
            </div>
          </div>

          <div className="mt-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p
              ref={subRef}
              className="max-w-[430px] text-[15px] md:text-[17px] leading-[1.5] text-black/60"
            >
              I build immersive digital experiences where clean interfaces,
              motion and creative technology meet.
            </p>

            <MagneticButton onClick={() => navigate("/projects")}>
              Explore my work
            </MagneticButton>
          </div>
        </div>

        <div className="absolute right-[-8%] top-[15%] w-[55vw] h-[65vh] max-w-[800px] z-10 pointer-events-none">
          <HeroScene />
        </div>
      </div>

      <div className="absolute bottom-8 left-[4%] flex items-center gap-3 text-[9px] uppercase tracking-[0.2em]">
        <ArrowDown size={13} />
        Scroll to explore
      </div>

      <div className="absolute bottom-8 right-[4%] text-[9px] uppercase tracking-[0.2em] text-black/40">
        Based in India
      </div>
    </section>
  );
}

export default Hero;

