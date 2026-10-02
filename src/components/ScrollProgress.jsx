import { useEffect, useRef } from "react";
import gsap from "gsap";

function ScrollProgress() {
  const progressRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = height > 0 ? scrollTop / height : 0;

      gsap.to(progressRef.current, {
        scaleX: progress,
        duration: 0.15,
        ease: "none",
      });
    };

    window.addEventListener("scroll", update);

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[10000] pointer-events-none">
      <div
        ref={progressRef}
        className="h-full bg-[#D7FF3F] origin-left scale-x-0"
      />
    </div>
  );
}

export default ScrollProgress;