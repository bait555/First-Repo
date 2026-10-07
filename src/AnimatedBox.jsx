import anime from 'animejs';
import { useEffect, useRef } from 'react';

export default function AnimatedBox() {
  const boxRef = useRef(null);

  useEffect(() => {
    anime({
      targets: boxRef.current,
      translateX: [0, 250],
      duration: 1000,
      easing: 'easeInOutQuad'
    });
  }, []); 

  return <div ref={boxRef} className="w-12 h-12 bg-indigo-500" />;
}