import { useRef } from "react";
import gsap from "gsap";

export default function TiltCard({ title, desc }) {
  const card = useRef();

  const handleMove = (e) => {
    const rect = card.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -10;
    const rotateY = (x / rect.width - 0.5) * 10;

    gsap.to(card.current, {
      rotateX,
      rotateY,
      transformPerspective: 800,
      duration: 0.4,
    });
  };

  const reset = () => {
    gsap.to(card.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
    });
  };

  return (
    <div
      ref={card}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="
        p-6 rounded-2xl
        bg-white/5 backdrop-blur-xl
        border border-white/10
      "
    >
      <h3 className="text-lg font-light">{title}</h3>
      <p className="text-sm opacity-60 mt-2">{desc}</p>
    </div>
  );
}