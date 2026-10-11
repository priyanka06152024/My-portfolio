
function AboutHero() {
  return (
    <section className="min-h-screen flex items-end pb-[8vh] sm:pb-[10vh] lg:pb-[12vh]">
      <div className="container">
        <span className="section-label">
          About
        </span>

        <h1 className="display-font text-[clamp(42px,10vw,200px)] sm:text-[clamp(65px,13vw,200px)] font-semibold tracking-[-0.07em] sm:tracking-[-0.09em] leading-[0.85] sm:leading-[0.75] mt-6 sm:mt-8">
          A LITTLE
          <br />
          <span className="text-black/20">ABOUT ME.</span>
        </h1>
      </div>
    </section>
  );
}

export default AboutHero;
