import React, { useEffect, useRef } from 'react';

const ScrollAnimator = ({ children, animationClass }) => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass, 'visible');
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [animationClass]);

  return (
    <div ref={ref} className={`scroll-animate ${animationClass}`}>
      {children}
    </div>
  );
};

export default ScrollAnimator;