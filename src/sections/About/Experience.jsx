
function Experience() {
  return (
    <section className="py-[10vh] sm:py-[15vh]">
      <div className="container">
        <span className="section-label">04 / Journey</span>

        <h2 className="display-font text-[clamp(42px,9vw,130px)] tracking-[-0.07em] sm:tracking-[-0.08em] leading-[0.85] sm:leading-[0.8] mt-6 mb-12 sm:mb-20">
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
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-8 py-6 sm:py-8 border-b border-black/15"
            >
              <span className="display-font text-xl sm:text-2xl">
                {year}
              </span>

              <p className="text-base sm:text-[18px] text-black/60 leading-relaxed">
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

