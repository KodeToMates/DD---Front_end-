'use client';

import React, { useEffect, useRef } from 'react';

export interface InteractiveParticlesProps {
  /** Hex or rgba color for particle dots (default: '#38BDF8') */
  particleColor?: string;
  /** RGB triplet string for connection lines (default: '56, 189, 248') */
  lineColor?: string;
  /** Number of particles (default: 65) */
  particleCount?: number;
  /** Max distance in px for particles to connect lines (default: 120) */
  maxDistance?: number;
  /** Interaction radius around the cursor in px (default: 150) */
  mouseRadius?: number;
  /** Additional canvas container CSS classes */
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
}

export default function InteractiveParticles({
  particleColor = '#38BDF8',
  lineColor = '56, 189, 248',
  particleCount = 65,
  maxDistance = 120,
  mouseRadius = 150,
  className = '',
}: InteractiveParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let isVisible = true;

    // Track mouse relative to canvas
    const mouse = {
      x: -9999,
      y: -9999,
      isActive: false,
    };

    // Responsive Canvas Resize
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const count = Math.min(
        particleCount,
        Math.floor((width * height) / 12000) || particleCount
      );

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.55,
          vy: (Math.random() - 0.5) * 0.55,
          radius: Math.random() * 1.6 + 1.2,
          baseAlpha: Math.random() * 0.45 + 0.35,
        });
      }
    };

    resizeCanvas();
    initParticles();

    // Resize observer
    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
      initParticles();
    });
    resizeObserver.observe(container);

    // Mouse listeners on container
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
      mouse.isActive = false;
    };

    // Optional subtle click particle impulse
    const handleClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      particles.forEach((p) => {
        const dx = p.x - clickX;
        const dy = p.y - clickY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180 && dist > 0) {
          const force = (180 - dist) / 180;
          p.vx += (dx / dist) * force * 2.5;
          p.vy += (dy / dist) * force * 2.5;
        }
      });
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    container.addEventListener('click', handleClick, { passive: true });

    // Pause rendering when element is off-screen for maximum performance
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    // Main animation loop
    const render = () => {
      if (isVisible && width > 0 && height > 0) {
        ctx.clearRect(0, 0, width, height);

        // Update & Draw Particles
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Natural drift
          p.x += p.vx;
          p.y += p.vy;

          // Gentle friction to prevent runaway velocity from mouse impulses
          p.vx *= 0.99;
          p.vy *= 0.99;

          // Re-boost if stopped
          if (Math.abs(p.vx) < 0.15) p.vx += (Math.random() - 0.5) * 0.1;
          if (Math.abs(p.vy) < 0.15) p.vy += (Math.random() - 0.5) * 0.1;

          // Wrap edges smoothly
          if (p.x < -10) p.x = width + 10;
          else if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          else if (p.y > height + 10) p.y = -10;

          // Mouse Attraction / Interaction
          if (mouse.isActive) {
            const mdx = mouse.x - p.x;
            const mdy = mouse.y - p.y;
            const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

            if (mDist < mouseRadius) {
              // Draw luminous connection line to cursor
              const mouseAlpha = (1 - mDist / mouseRadius) * 0.65;
              ctx.strokeStyle = `rgba(${lineColor}, ${mouseAlpha})`;
              ctx.lineWidth = 1.1;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.stroke();

              // Subtle gravity pull toward cursor
              const pull = (1 - mDist / mouseRadius) * 0.08;
              p.vx += (mdx / mDist) * pull;
              p.vy += (mdy / mDist) * pull;
            }
          }

          // Connect nearby particles
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxDistance) {
              const alpha = (1 - dist / maxDistance) * 0.28;
              ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }

          // Draw the particle point with subtle radial glow
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = particleColor;
          ctx.globalAlpha = p.baseAlpha;
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('click', handleClick);
    };
  }, [particleColor, lineColor, particleCount, maxDistance, mouseRadius]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-auto ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full pointer-events-none"
      />
    </div>
  );
}
