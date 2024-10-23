// components/ClientAnimatedBackground.tsx
'use client';

import React, { useEffect, useRef } from 'react';

export default function ClientAnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Gradient animation parameters
    let t = 0;
    const gradientSpeed = 0.002;
    let animationFrameId: number;

    // Create gradient animation
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create multiple gradients with different phases
      const gradients = [
        {
          x1: Math.sin(t) * canvas.width,
          y1: Math.cos(t) * canvas.height,
          x2: Math.cos(t) * canvas.width,
          y2: Math.sin(t) * canvas.height,
          colorStops: [
            { pos: 0, color: 'rgba(59, 130, 246, 0.1)' }, // blue-500
            { pos: 1, color: 'rgba(239, 68, 68, 0.1)' }   // red-500
          ]
        },
        {
          x1: Math.cos(t * 1.1) * canvas.width,
          y1: Math.sin(t * 1.1) * canvas.height,
          x2: Math.sin(t * 1.1) * canvas.width,
          y2: Math.cos(t * 1.1) * canvas.height,
          colorStops: [
            { pos: 0, color: 'rgba(239, 68, 68, 0.1)' },  // red-500
            { pos: 1, color: 'rgba(59, 130, 246, 0.1)' }  // blue-500
          ]
        }
      ];

      // Draw each gradient
      gradients.forEach(gradient => {
        const linearGradient = ctx.createLinearGradient(
          gradient.x1, gradient.y1,
          gradient.x2, gradient.y2
        );

        gradient.colorStops.forEach(stop => {
          linearGradient.addColorStop(stop.pos, stop.color);
        });

        ctx.fillStyle = linearGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Update time
      t += gradientSpeed;

      // Request next frame
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{ 
        WebkitBackdropFilter: 'blur(100px)',
        backdropFilter: 'blur(100px)'
      }}
    />
  );
}