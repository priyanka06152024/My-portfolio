import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

function PageTransition() {
  const transitionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    gsap.fromTo(
      transitionRef.current,
      {
        yPercent: 0,
      },
      {
        yPercent: -100,
        duration: 0.9,
        ease: "power4.inOut",
      }
    );
  }, [location.pathname]);

  return (
    <div
      ref={transitionRef}
      className="fixed inset-0 z-[9998] bg-[#D7FF3F] pointer-events-none"
    />
  );
}

export default PageTransition;