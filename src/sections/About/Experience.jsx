function Experience() {
  return (
    <section className="py-[15vh]">
      <div className="container">
        <span className="section-label">04 / Journey</span>

        <h2 className="display-font text-[clamp(55px,9vw,130px)] tracking-[-0.08em] leading-[0.8] mt-6 mb-20">
          MY PATH<span className="text-[#D7FF3F]">.</span>
        </h2>

        <div className="relative border-t border-black/15">
          {[
            ["2024", "Started exploring frontend development"],
            ["2025", "React, Tailwind and modern UI development"],
            ["2026", "Creative development, GSAP and 3D"],
          ].map(([year, text]) => (
            <div
              key={year}
              className="grid md:grid-cols-[180px_1fr] gap-8 py-8 border-b border-black/15"
            >
              <span className="display-font text-2xl">
                {year}
              </span>

              <p className="text-[18px] text-black/60">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;