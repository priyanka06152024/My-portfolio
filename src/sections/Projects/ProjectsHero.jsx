function ProjectsHero() {
  return (
    <section className="min-h-screen flex items-end pb-[12vh]">
      <div className="container">
        <span className="section-label text-white/40">
           Selected work
        </span>

        <h1 className="display-font text-[clamp(70px,14vw,210px)] font-semibold tracking-[-0.1em] leading-[0.72] mt-8">
          PROJECTS<span className="text-[#D7FF3F]">.</span>
        </h1>

        <p className="max-w-[420px] text-white/40 mt-10 text-sm leading-[1.6]">
          A collection of interfaces, interactive experiences and experiments
          built with modern frontend technologies.
        </p>
      </div>
    </section>
  );
}

export default ProjectsHero;