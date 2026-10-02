
import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

import { projects } from "../../data/projects";

gsap.registerPlugin(ScrollTrigger);

function FeaturedProjects() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      // -----------------------------
      // HEADING ANIMATION
      // -----------------------------
      gsap.from(".project-heading", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });

      // -----------------------------
      // PROJECT CARDS
      // -----------------------------
      const cards = gsap.utils.toArray(".featured-card");

      if (!cards.length) return;

      ScrollTrigger.batch(cards, {
        start: "top 88%",
        once: true,

        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            {
              y: 70,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.08,
              ease: "power3.out",
              overwrite: true,
              clearProps: "transform,opacity",
            }
          );
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="dark-section py-[14vh]"
    >
      <div className="container">

        {/* -----------------------------
            HEADER
        ----------------------------- */}
        <div className="flex justify-between items-end mb-20">
          <div>
            <span className="section-label text-white/40">
              Selected work
            </span>

            <h2
              className="
                project-heading
                display-font
                text-[clamp(55px,9vw,140px)]
                tracking-[-0.08em]
                leading-[0.8]
                mt-5
              "
            >
              WORK<span className="text-[#D7FF3F]">.</span>
            </h2>
          </div>

          <span
            className="
              hidden md:block
              text-[10px]
              uppercase
              tracking-[0.15em]
              text-white/40
            "
          >
            Scroll to explore
          </span>
        </div>

        {/* -----------------------------
            PROJECTS
        ----------------------------- */}
        <div className="space-y-28">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className={`
                featured-card
                group
                block
                ${index % 2 !== 0 ? "md:ml-[15%]" : ""}
              `}
              data-cursor="VIEW"
            >
              {/* IMAGE */}
              <div
                className="
                  relative
                  overflow-hidden
                  aspect-[16/9]
                  bg-[#222]
                  isolate
                "
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index === 0 ? "high" : "auto"}
                    className="
                      block
                      w-full
                      h-full
                      object-cover
                      grayscale
                      scale-100
                      group-hover:grayscale-0
                      group-hover:scale-[1.03]
                      transition-[transform,filter]
                      duration-700
                      ease-out
                      will-change-transform
                    "
                  />
                ) : (
                  <div
                    className="
                      w-full
                      h-full
                      flex
                      items-center
                      justify-center
                      text-white/20
                      text-[50px]
                    "
                  >
                    {project.title}
                  </div>
                )}

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/10
                    group-hover:bg-transparent
                    transition-[background-color]
                    duration-500
                    pointer-events-none
                  "
                />

                {/* ARROW */}
                <div
                  className="
                    absolute
                    top-5
                    right-5
                    w-12
                    h-12
                    rounded-full
                    bg-[#D7FF3F]
                    text-black
                    flex
                    items-center
                    justify-center
                    opacity-0
                    scale-90
                    rotate-0
                    group-hover:opacity-100
                    group-hover:scale-100
                    group-hover:rotate-45
                    transition-[opacity,transform]
                    duration-400
                    pointer-events-none
                  "
                >
                  <ArrowUpRight size={18} strokeWidth={1.8} />
                </div>
              </div>

              {/* PROJECT INFO */}
              <div
                className="
                  flex
                  justify-between
                  items-start
                  mt-5
                  border-b
                  border-white/15
                  pb-5
                "
              >
                <div>
                  <span className="text-[10px] text-white/35">
                    {project.id} / {project.year}
                  </span>

                  <h3
                    className="
                      display-font
                      text-[clamp(30px,4vw,65px)]
                      tracking-[-0.05em]
                      mt-2
                    "
                  >
                    {project.title}
                  </h3>
                </div>

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.12em]
                    text-white/45
                    mt-3
                  "
                >
                  {project.category}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedProjects;



