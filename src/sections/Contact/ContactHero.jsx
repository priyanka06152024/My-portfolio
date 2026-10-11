
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function ContactHero() {
  return (
    <section className="min-h-screen flex items-end pb-[7vh] sm:pb-[10vh]">
      <div className="container">
        <span className="section-label">
          Contact
        </span>

        <h1 className="display-font text-[clamp(42px,10vw,200px)] sm:text-[clamp(65px,13vw,200px)] font-semibold tracking-[-0.07em] sm:tracking-[-0.1em] leading-[0.82] sm:leading-[0.72] mt-6 sm:mt-8">
          LET&apos;S
          <br />
          MAKE
          <br />
          <span className="text-black/20">
            SOMETHING.
          </span>
        </h1>

        <Link
          to="mailto:your-email@example.com"
          className="inline-flex items-center gap-2 sm:gap-3 mt-9 sm:mt-14 border-b border-black pb-3 uppercase text-[10px] sm:text-[11px] tracking-[0.12em] sm:tracking-[0.15em]"
          data-cursor="MAIL"
        >
          Start a conversation
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </section>
  );
}

export default ContactHero;

