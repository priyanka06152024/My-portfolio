const links = [
  {
    name: "GitHub",
    url: "https://github.com/",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/",
  },
];

function SocialLinks() {
  return (
    <section className="bg-[#111] text-[#F4F1EA] py-[10vh]">
      <div className="container">
        {links.map((link, index) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between border-t border-white/15 py-6 group"
            data-cursor="OPEN"
          >
            <div className="flex gap-5 items-center">
              <span className="text-[10px] text-white/30">
                0{index + 1}
              </span>

              <span className="display-font text-[clamp(35px,6vw,80px)] tracking-[-0.06em] group-hover:text-[#D7FF3F] transition-colors">
                {link.name}
              </span>
            </div>

            <span className="text-2xl group-hover:rotate-45 transition-transform">
              ↗
            </span>
          </a>
        ))}

        <div className="border-t border-white/15 mt-20 pt-6 flex justify-between text-[9px] uppercase tracking-[0.15em] text-white/30">
          <span>Priyanka Chauhan</span>
          <span>© 2026</span>
        </div>
      </div>
    </section>
  );
}

export default SocialLinks;