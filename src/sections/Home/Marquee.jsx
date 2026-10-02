function Marquee() {
  const text =
    "REACT • THREE.JS • GSAP • R3F • TAILWIND • CREATIVE DEVELOPMENT • ";

  return (
    <section className="overflow-hidden bg-[#D7FF3F] py-7">
      <div className="flex whitespace-nowrap animate-[marquee_22s_linear_infinite]">
        <div className="display-font text-[clamp(35px,5vw,80px)] tracking-[-0.05em] font-semibold">
          {text.repeat(5)}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

export default Marquee;