import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function HomeCTA() {
  return (
    <section className="bg-[#F4F1EA] py-[18vh]">
      <div className="container">
        <span className="section-label">Have an idea?</span>

        <Link
          to="/contact"
          className="group block mt-10"
          data-cursor="GO"
        >
          <h2 className="display-font text-[clamp(60px,11vw,170px)] font-semibold tracking-[-0.09em] leading-[0.78]">
            LET&apos;S
            <br />
            MAKE
            <br />
            <span className="group-hover:text-[#D7FF3F] transition-colors duration-500">
              SOMETHING<span className="text-[#D7FF3F]">.</span>
            </span>
          </h2>

          <div className="mt-12 flex items-center gap-3 uppercase text-[11px] tracking-[0.15em]">
            Start a conversation
            <ArrowUpRight size={15} />
          </div>
        </Link>
      </div>
    </section>
  );
}

export default HomeCTA;