import React, { useEffect, useRef } from "react";

// Golden spark cursor: dot + trailing particle bursts
const SparkCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: -100, y: -100, lastX: -100, lastY: -100, moved: false });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.moved = true;
      const dx = e.clientX - mouse.current.lastX;
      const dy = e.clientY - mouse.current.lastY;
      const dist = Math.hypot(dx, dy);
      const count = Math.min(6, Math.max(1, Math.floor(dist / 6)));
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.6 + Math.random() * 2.4;
        const size = 1 + Math.random() * 3.2;
        particles.current.push({
          x: e.clientX + (Math.random() - 0.5) * 6,
          y: e.clientY + (Math.random() - 0.5) * 6,
          vx: Math.cos(angle) * speed * 0.5 + dx * 0.05,
          vy: Math.sin(angle) * speed * 0.5 + dy * 0.05 - 0.4,
          life: 1,
          decay: 0.018 + Math.random() * 0.022,
          size,
          rot: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.2,
          hue: 42 + Math.random() * 14,
        });
      }
      if (particles.current.length > 220) {
        particles.current.splice(0, particles.current.length - 220);
      }
      mouse.current.lastX = e.clientX;
      mouse.current.lastY = e.clientY;
    };

    const onDown = () => {
      // Burst on click
      for (let i = 0; i < 28; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1.5 + Math.random() * 4;
        particles.current.push({
          x: mouse.current.x,
          y: mouse.current.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.4,
          life: 1,
          decay: 0.02 + Math.random() * 0.02,
          size: 2 + Math.random() * 4,
          rot: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.3,
          hue: 42 + Math.random() * 16,
        });
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);

    let raf;
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.03; // gentle gravity
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.rot += p.rotSpeed;
        p.life -= p.decay;
        if (p.life <= 0) {
          particles.current.splice(i, 1);
          continue;
        }
        const alpha = Math.max(0, p.life);
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.shadowColor = `hsla(${p.hue}, 100%, 60%, ${alpha})`;
        ctx.shadowBlur = 12;
        ctx.fillStyle = `hsla(${p.hue}, 100%, 58%, ${alpha})`;
        const s = p.size * (0.6 + p.life * 0.6);
        ctx.fillRect(-s / 2, -s / 6, s, s / 3);
        ctx.restore();
      }

      // update visual cursor
      if (dotRef.current && ringRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 4}px, ${mouse.current.y - 4}px, 0)`;
        ringRef.current.style.transform = `translate3d(${mouse.current.x - 18}px, ${mouse.current.y - 18}px, 0)`;
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[300] hidden md:block"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[301] w-9 h-9 rounded-full border-2 border-[#f3b700] pointer-events-none hidden md:block"
        style={{ mixBlendMode: "difference", transition: "width 0.2s, height 0.2s" }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[301] w-2 h-2 rounded-full bg-[#f3b700] pointer-events-none hidden md:block"
        style={{ boxShadow: "0 0 14px 2px rgba(243,183,0,0.7)" }}
      />
    </>
  );
};

export default SparkCursor;
