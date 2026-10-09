import { useState } from "react";

const skills = [
  "Html",
  "Css",
  "React",
  "JavaScript",
  "C++",
  "Tailwind CSS",
  "GSAP",
  "Three.js",
  "React Three Fiber",
  "Git / GitHub",
];

function Skills() {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-[#111] text-[#F4F1EA] py-[14vh]">
      <div className="container">
        <div className="mb-16">
          <span className="section-label text-white/40">
             Toolkit
          </span>

          <h2 className="display-font text-[clamp(55px,9vw,130px)] tracking-[-0.08em] leading-[0.8] mt-5">
            SKILLS<span className="text-[#D7FF3F]">.</span>
          </h2>
        </div>

        <div>
          {skills.map((skill, index) => (
            <div
              key={skill}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              className="group border-t border-white/15 py-5 flex items-center justify-between"
            >
              <div className="flex items-center gap-5">
                <span className="text-[10px] text-white/30">
                  0{index + 1}
                </span>

                <span
                  className={`display-font text-[clamp(30px,5vw,70px)] tracking-[-0.06em] transition-colors duration-300 ${
                    active === index ? "text-[#D7FF3F]" : ""
                  }`}
                >
                  {skill}
                </span>
              </div>

              <span className="text-white/30 text-xl">
                {active === index ? "↗" : "＋"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;