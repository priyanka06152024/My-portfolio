import { useEffect, useRef } from "react";
import gsap from "gsap";

function CustomCursor() {
  const cursorRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const label = labelRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power3.out",
      });

      gsap.to(label, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    const enterInteractive = (e) => {
      const type = e.currentTarget.dataset.cursor || "VIEW";

      label.textContent = type;

      gsap.to(cursor, {
        scale: 0,
        duration: 0.2,
      });

      gsap.to(label, {
        scale: 1,
        opacity: 1,
        duration: 0.25,
      });
    };

    const leaveInteractive = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.2,
      });

      gsap.to(label, {
        scale: 0,
        opacity: 0,
        duration: 0.2,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    const elements = document.querySelectorAll("[data-cursor]");

    elements.forEach((element) => {
      element.addEventListener("mouseenter", enterInteractive);
      element.addEventListener("mouseleave", leaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      elements.forEach((element) => {
        element.removeEventListener("mouseenter", enterInteractive);
        element.removeEventListener("mouseleave", leaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={labelRef} className="cursor-label" />
    </>
  );
}

export default CustomCursor;