import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function ContactHero() {
  return (
    <section className="min-h-screen flex items-end pb-[10vh]">
      <div className="container">
        <span className="section-label">
           Contact
        </span>

        <h1 className="display-font text-[clamp(65px,13vw,200px)] font-semibold tracking-[-0.1em] leading-[0.72] mt-8">
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
          className="inline-flex items-center gap-3 mt-14 border-b border-black pb-3 uppercase text-[11px] tracking-[0.15em]"
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