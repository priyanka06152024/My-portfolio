import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Intro() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".intro-word", {
        yPercent: 100,
        opacity: 0,
        stagger: 0.08,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const words = ["I", "CREATE", "DIGITAL", "EXPERIENCES"];

  return (
    <section
      ref={sectionRef}
      className="bg-[#F4F1EA] py-[18vh] border-t border-black/10"
    >
      <div className="container">
        <div className="flex items-center gap-3 mb-12">
          <span className="lime-dot" />
          <span className="section-label">A little introduction</span>
        </div>

        <h2 className="display-font text-[clamp(45px,8vw,125px)] font-medium tracking-[-0.075em] leading-[0.85]">
          {words.map((word) => (
            <span
              key={word}
              className={`intro-word inline-block mr-[0.2em] ${
                word === "DIGITAL" ? "text-black/25" : ""
              }`}
            >
              {word}
            </span>
          ))}
        </h2>

        <p className="max-w-[500px] ml-auto mt-20 text-black/55 text-[15px] leading-[1.6]">
          My focus is frontend development, interaction design and creative
          web experiences. I enjoy turning ideas into websites that feel as
          good as they function.
        </p>
      </div>
    </section>
  );
}

export default Intro;