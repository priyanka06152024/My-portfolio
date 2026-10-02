import { useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

function MagneticButton({
  children = "View Project",
  onClick,
}) {
  const buttonRef = useRef(null);

  const handleMove = (e) => {
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();

    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    gsap.to(button, {
      x: x * 0.25,
      y: y * 0.25,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
    });
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      className="lime-button"
      data-cursor="CLICK"
    >
      {children}
      <ArrowUpRight size={15} />
    </button>
  );
}

export default MagneticButton;