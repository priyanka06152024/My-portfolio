import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutStory() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".story-line", {
        width: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-[12vh]">
      <div className="container grid md:grid-cols-[0.4fr_1fr] gap-12">
        <div>
          <span className="section-label">My approach</span>
        </div>

        <div>
          <div className="story-line h-[2px] bg-black mb-10" />

          <p className="display-font text-[clamp(35px,5vw,75px)] leading-[1] tracking-[-0.055em]">
            I&apos;m a frontend developer who loves combining{" "}
            <span className="text-black/25">design, motion and technology</span>{" "}
            to create memorable digital experiences.
          </p>

          <p className="max-w-[600px] mt-12 text-black/55 leading-[1.7]">
            My work sits somewhere between development and visual
            experimentation. I enjoy learning new technologies and turning
            ambitious concepts into polished interfaces.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutStory;
