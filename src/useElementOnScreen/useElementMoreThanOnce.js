import { useRef, useState, useEffect } from "react";

export default function UseElementMoreThanOnce(options) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callBackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    let current = containerRef.current;

    const observer = new IntersectionObserver(callBackFunction, options);
    if (current) observer.observe(current);

    return () => {
      if (current) observer.observe(current);
      observer.unobserve(current);
    };
  }, [containerRef, options, isVisible]);

  return [containerRef, isVisible];
}
