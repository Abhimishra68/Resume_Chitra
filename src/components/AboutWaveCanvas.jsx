import React, { useEffect, useRef } from 'react';

export default function AboutWaveCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    let time = 0;

    // Mouse movement interaction
    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
      parent.addEventListener('mouseleave', handleMouseLeave);
    }

    const render = () => {
      time += 0.012;
      ctx.clearRect(0, 0, width, height);

      // 3D Undulating Wave Grid Parameters matching reference
      const gridRows = 22;
      const gridCols = 38;
      const centerX = width * 0.55;
      const centerY = height * 0.48;

      // Calculated 3D points
      const points = [];

      for (let r = 0; r < gridRows; r++) {
        points[r] = [];
        const rNorm = r / (gridRows - 1); // 0 (horizon/back) to 1 (front)
        const depth = 0.2 + rNorm * 0.8; // Perspective scaling

        for (let c = 0; c < gridCols; c++) {
          const cNorm = (c / (gridCols - 1) - 0.5) * 2; // -1 to 1

          // Wave function with multiple harmonics for cyber topography
          const wave1 = Math.sin(cNorm * 3.5 + time * 1.2 + rNorm * 4) * 22;
          const wave2 = Math.cos(cNorm * 5.0 - time * 0.8 + rNorm * 2.5) * 14;
          const wave3 = Math.sin(cNorm * 2.0 + rNorm * 6.0 + time) * 18;
          const elevation = (wave1 + wave2 + wave3) * rNorm;

          // Perspective projection
          const spreadX = cNorm * (width * 0.68 * (0.4 + rNorm * 0.8));
          const px = centerX + spreadX;
          const py = centerY + Math.pow(rNorm, 1.4) * (height * 0.52) + elevation;

          // Distance to mouse for subtle interactive displacement
          const dx = px - mouse.x;
          const dy = py - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mouseLift = dist < 140 ? (1 - dist / 140) * -22 : 0;

          points[r][c] = {
            x: px,
            y: py + mouseLift,
            z: depth,
            alpha: Math.min(1, Math.max(0.08, rNorm * 0.85)),
          };
        }
      }

      // Draw Grid Horizontal Lines (Ribbons)
      ctx.lineWidth = 1.1;
      for (let r = 0; r < gridRows; r++) {
        ctx.beginPath();
        for (let c = 0; c < gridCols; c++) {
          const pt = points[r][c];
          if (c === 0) {
            ctx.moveTo(pt.x, pt.y);
          } else {
            ctx.lineTo(pt.x, pt.y);
          }
        }
        const alpha = points[r][0].alpha * 0.42;
        ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
        ctx.stroke();
      }

      // Draw Grid Vertical Lines (Perspective rays)
      for (let c = 0; c < gridCols; c += 2) {
        ctx.beginPath();
        for (let r = 0; r < gridRows; r++) {
          const pt = points[r][c];
          if (r === 0) {
            ctx.moveTo(pt.x, pt.y);
          } else {
            ctx.lineTo(pt.x, pt.y);
          }
        }
        const alpha = (points[gridRows - 1][c]?.alpha || 0.5) * 0.32;
        ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
        ctx.stroke();
      }

      // Draw glowing vertices at selective intersections (especially near the peaks)
      for (let r = 2; r < gridRows; r += 2) {
        for (let c = 1; c < gridCols; c += 3) {
          const pt = points[r][c];
          const brightness = Math.sin(time * 2 + r + c) * 0.3 + 0.7;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 1.4 * pt.z, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 229, 255, ${pt.alpha * brightness * 0.9})`;
          ctx.shadowColor = 'rgba(0, 240, 255, 0.8)';
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-80 z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
