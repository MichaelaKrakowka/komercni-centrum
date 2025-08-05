import React from "react";
import "./RevealSection.css";

export const RevealSection = ({ children }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const spyGuy = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          spyGuy.disconnect();
        }
      },
      { rootMargin: "-100px" }
    );
    if (ref.current) spyGuy.observe(ref.current);
    return () => spyGuy.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${isVisible ? "slide-in" : ""}`}>
      {children}
    </div>
  );
};
