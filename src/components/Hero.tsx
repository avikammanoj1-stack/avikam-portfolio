/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Download, ArrowRight, FileText, Database, Brain, Sparkles, MapPin, Github, Linkedin } from 'lucide-react';

interface HeroProps {
  onViewProjectsClick: () => void;
  onOpenResumeModal: () => void;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function Hero({ onViewProjectsClick, onOpenResumeModal }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const [activeSubtitle, setActiveSubtitle] = useState(0);

  const subtitles = [
    'Software Engineer',
    'Data Science Specialist',
    'Machine Learning Developer',
    'Full Stack Architect',
  ];

  // Auto-rotate the subtitles
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSubtitle((prev) => (prev + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [subtitles.length]);

  // Handle Particle Network Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 60;
    const connectionDistance = 120;
    const mouseConnectionDistance = 180;

    const handleResize = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      canvas.width = rect?.width || window.innerWidth;
      canvas.height = rect?.height || window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.min(particleCount, (canvas.width * canvas.height) / 15000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
        });
      }
    };

    const draw = () => {
      // Clear canvas with adaptive styling
      const isDark = document.documentElement.classList.contains('dark');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const dotColor = isDark ? 'rgba(59, 130, 246, 0.3)' : 'rgba(37, 99, 235, 0.15)';
      const lineColor = isDark ? 'rgba(59, 130, 246, 0.06)' : 'rgba(37, 99, 235, 0.05)';
      const mouseLineColor = isDark ? 'rgba(59, 130, 246, 0.12)' : 'rgba(37, 99, 235, 0.08)';

      // Draw and update particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundaries
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
      });

      // Draw connection lines between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.6;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = lineColor.replace(')', `, ${alpha})`);
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw connection lines to mouse
      if (mouseRef.current.x >= 0 && mouseRef.current.y >= 0) {
        particles.forEach((p) => {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseConnectionDistance) {
            const alpha = (1 - dist / mouseConnectionDistance) * 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.strokeStyle = mouseLineColor.replace(')', `, ${alpha})`);
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    // Listen to mouse moving on the container
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      id="hero-container"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F8F9FB] dark:bg-[#0B0F19] px-6 pt-20"
    >
      {/* Background Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Modern Gradient Overlays */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-400/10 dark:bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-indigo-300/10 dark:bg-indigo-500/5 blur-[140px] pointer-events-none" />

      {/* Grid line pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] opacity-[0.25] dark:opacity-[0.12] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10 relative select-none">
        
        {/* Floating Accent Location Tag */}
        <motion.div
          id="hero-location-tag"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200/50 dark:border-gray-800/50 text-xs font-medium text-gray-500 dark:text-gray-400 mb-8 shadow-sm"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <MapPin className="w-3.5 h-3.5 text-gray-400" />
          <span>Kerala, India</span>
        </motion.div>

        {/* Hello I'm label */}
        <motion.p
          id="hero-greeting"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs font-mono uppercase tracking-[0.3em] text-blue-600 dark:text-blue-500 font-bold mb-4"
        >
          Hello, I'm
        </motion.p>

        {/* Display Heading */}
        <motion.h1
          id="hero-display-name"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl font-display font-black tracking-tight text-[#111827] dark:text-white leading-[0.95]"
        >
          AVIKAM MANOJ
        </motion.h1>

        {/* Rotating Roles Tagline */}
        <div className="h-14 mt-6 flex items-center justify-center overflow-hidden">
          <motion.div
            key={activeSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 md:gap-3 text-lg md:text-2xl font-display font-semibold text-gray-800 dark:text-gray-100"
          >
            {activeSubtitle === 1 && <Database className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />}
            {activeSubtitle === 2 && <Brain className="w-5 h-5 md:w-6 md:h-6 text-indigo-500" />}
            {activeSubtitle === 3 && <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />}
            {activeSubtitle === 0 && <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />}
            <span>{subtitles[activeSubtitle]}</span>
          </motion.div>
        </div>

        {/* Short introduction bio */}
        <motion.p
          id="hero-bio"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-xl mx-auto text-sm md:text-base text-gray-500 dark:text-gray-400 mt-6 leading-relaxed"
        >
          Building intelligent, scalable software ecosystems and resolving intricate real-world bottlenecks 
          by marrying core Software Engineering principles with cutting-edge Machine Learning architectures.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          id="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 mt-12 max-w-3xl mx-auto"
        >
          {/* View Projects */}
          <button
            id="hero-btn-projects"
            onClick={onViewProjectsClick}
            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#111827] text-white dark:bg-white dark:text-gray-900 font-semibold text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-md cursor-pointer active:scale-98"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Download / View Resume */}
          <button
            id="hero-btn-resume"
            onClick={onOpenResumeModal}
            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-800 dark:hover:bg-gray-700 font-semibold text-sm transition-all shadow-sm cursor-pointer active:scale-98"
          >
            <FileText className="w-4 h-4 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
            <span>Download Resume</span>
          </button>

          {/* GitHub link */}
          <a
            id="hero-btn-github"
            href="https://github.com/avikammanoj1-stack"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-800 dark:hover:bg-gray-700 font-semibold text-sm transition-all shadow-sm cursor-pointer active:scale-98"
          >
            <Github className="w-4 h-4 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
            <span>GitHub</span>
          </a>

          {/* LinkedIn link */}
          <a
            id="hero-btn-linkedin"
            href="https://www.linkedin.com/in/avikam-manoj-world1822"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-800 dark:hover:bg-gray-700 font-semibold text-sm transition-all shadow-sm cursor-pointer active:scale-98"
          >
            <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
            <span>LinkedIn</span>
          </a>
        </motion.div>

        {/* Footer style tagline alignment */}
        <motion.div
          id="hero-floating-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 flex flex-col items-center justify-center"
        >
          <span className="text-[10px] font-mono tracking-[0.5em] uppercase text-gray-400 dark:text-gray-500">
            Build. Grow. Serve.
          </span>
          <div className="w-[1px] h-8 bg-gray-200 dark:bg-gray-800 mt-4 animate-bounce" />
        </motion.div>
      </div>
    </div>
  );
}
