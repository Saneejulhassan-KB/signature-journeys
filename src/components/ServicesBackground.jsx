import { useRef, useEffect } from "react";

const ServicesBackground = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width, height;
    const gridSize = 40;
    const points = [];

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;

      points.length = 0;
      for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
          points.push({
            x,
            y,
            ox: x,
            oy: y,
          });
        }
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(56,189,248,0.25)";
      ctx.lineWidth = 1;

      points.forEach((p) => {
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const force = Math.max(0, 120 - dist);
        const depth = force * 0.25;

        p.x += (p.ox - dx * depth * 0.01 - p.x) * 0.5;
        p.y += (p.oy - dy * depth * 0.01 - p.y) * 0.5;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgb(101, 107, 109)";
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();

    const move = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="services-3d-bg"
    />
  );
};

export default ServicesBackground;
