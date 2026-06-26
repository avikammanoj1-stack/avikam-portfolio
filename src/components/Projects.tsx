/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ExternalLink, Github, MessageSquare, Code2, LineChart, Cpu, Sparkles, Terminal } from 'lucide-react';
import { projectsData } from '../data';

// Render customized visual headers matching each project ID
const renderProjectBanner = (id: string) => {
  switch (id) {
    case 'echonote':
      return (
        <div className="relative w-full h-48 bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center overflow-hidden">
          {/* Animated Wave Sound effect */}
          <div className="absolute inset-0 bg-black/10" />
          <div className="flex items-end gap-[3px] h-12 z-10">
            {[30, 60, 45, 90, 75, 40, 60, 80, 50, 95, 30, 65, 50, 85, 40, 30].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 10 }}
                animate={{ height: h }}
                transition={{
                  duration: 0.5 + Math.random() * 0.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
                className="w-[3px] bg-white/80 rounded-full"
              />
            ))}
          </div>
          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-md text-[10px] font-mono font-bold text-white uppercase">
            <MessageSquare className="w-3.5 h-3.5 animate-pulse" />
            <span>Transcription Active</span>
          </div>
        </div>
      );

    case 'employee-mgmt':
      return (
        <div className="relative w-full h-48 bg-gradient-to-tr from-[#0F2027] via-[#203A43] to-[#2C5364] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Dashboard HUD simulation */}
          <div className="relative w-11/12 h-5/6 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 p-3 flex flex-col justify-between z-10">
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
              <span className="text-[9px] font-mono text-white/60">SYS OPERATIONAL</span>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 my-2">
              <div className="p-1.5 bg-white/5 border border-white/5 rounded flex flex-col">
                <span className="text-[7px] font-mono text-white/40">STAFF</span>
                <span className="text-xs font-semibold text-white">418</span>
              </div>
              <div className="p-1.5 bg-white/5 border border-white/5 rounded flex flex-col">
                <span className="text-[7px] font-mono text-white/40">DEPT</span>
                <span className="text-xs font-semibold text-white">12</span>
              </div>
              <div className="p-1.5 bg-white/5 border border-white/5 rounded flex flex-col">
                <span className="text-[7px] font-mono text-white/40">ACTIVE</span>
                <span className="text-xs font-semibold text-green-400">98%</span>
              </div>
            </div>

            <div className="w-full h-2 bg-white/10 rounded overflow-hidden">
              <div className="w-4/5 h-full bg-teal-400" />
            </div>
          </div>
        </div>
      );

    case 'student-predictor':
      return (
        <div className="relative w-full h-48 bg-gradient-to-tr from-[#243B55] to-[#141E30] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />

          {/* SVG mathematical curve plotting predictor */}
          <svg className="absolute inset-0 w-full h-full stroke-blue-500/20" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="10" y1="90" x2="90" y2="90" strokeWidth="0.5" />
            <line x1="10" y1="10" x2="10" y2="90" strokeWidth="0.5" />
            {Array.from({ length: 9 }).map((_, i) => (
              <line key={i} x1={10 + i * 10} y1="10" x2={10 + i * 10} y2="90" strokeDasharray="1,2" strokeWidth="0.2" />
            ))}
          </svg>

          <div className="relative w-10/12 z-10 flex flex-col gap-1.5">
            <span className="text-[9px] font-mono text-indigo-400 uppercase font-bold flex items-center gap-1">
              <LineChart className="w-3.5 h-3.5" />
              Regression Matrix
            </span>
            <div className="h-20 border border-indigo-500/30 rounded-lg bg-black/30 p-2 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 100 40">
                {/* Dots */}
                <circle cx="15" cy="35" r="1.5" fill="#818CF8" />
                <circle cx="30" cy="28" r="1.5" fill="#818CF8" />
                <circle cx="45" cy="22" r="1.5" fill="#818CF8" />
                <circle cx="55" cy="18" r="1.5" fill="#818CF8" />
                <circle cx="70" cy="12" r="1.5" fill="#818CF8" />
                <circle cx="85" cy="5" r="1.5" fill="#818CF8" />
                {/* Trendline */}
                <motion.line
                  x1="10"
                  y1="37"
                  x2="90"
                  y2="3"
                  stroke="#3B82F6"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                />
              </svg>
            </div>
            <div className="flex items-center justify-between text-[7px] font-mono text-white/50">
              <span>R² Score: 0.941</span>
              <span>MSE: 0.024</span>
            </div>
          </div>
        </div>
      );

    case 'grammar-calibrator':
      return (
        <div className="relative w-full h-48 bg-gradient-to-tr from-emerald-950 via-gray-950 to-emerald-900 flex items-center justify-center overflow-hidden font-mono">
          <div className="absolute inset-0 bg-black/15" />
          <div className="relative w-11/12 h-5/6 bg-black/50 backdrop-blur-md rounded-lg border border-emerald-500/20 p-3 flex flex-col justify-between z-10 text-[9px]">
            <div className="flex items-center justify-between border-b border-emerald-500/10 pb-1 text-[7px] text-emerald-400">
              <span className="flex items-center gap-1">
                <Terminal className="w-3 h-3 text-emerald-400" />
                GRAMMAR CALIBRATOR v1.0
              </span>
              <span className="animate-pulse">● CALIBRATED</span>
            </div>
            <div className="space-y-1 my-1">
              <div className="text-red-400/80 line-through">Input: He don't has no learning limits.</div>
              <div className="text-emerald-400">Output: He does not have any learning limits.</div>
            </div>
            <div className="text-[7px] text-emerald-500/50 flex justify-between">
              <span>Confidence: 99.8%</span>
              <span>Tokens: 7/7</span>
            </div>
          </div>
        </div>
      );

    case 'gesture-classifier':
      return (
        <div className="relative w-full h-48 bg-gradient-to-tr from-slate-900 to-indigo-950 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          {/* Custom vector showing hand skeleton tracking points */}
          <div className="relative w-11/12 h-5/6 rounded-lg border border-indigo-500/20 bg-black/35 backdrop-blur-sm p-3 flex flex-col justify-between z-10">
            <div className="flex items-center justify-between text-[8px] font-mono text-indigo-400">
              <span className="flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                OPENCV / MEDIAPIPE LIVE
              </span>
              <span>FPS: 60.0</span>
            </div>
            {/* Skeletal line mapping simulation */}
            <div className="h-16 flex items-center justify-center relative">
              <svg className="w-24 h-16 stroke-indigo-400/80 fill-none" viewBox="0 0 100 60">
                {/* Hand wrist root */}
                <circle cx="50" cy="55" r="2" fill="#818CF8" />
                {/* Thumb */}
                <line x1="50" y1="55" x2="35" y2="45" strokeWidth="1" />
                <line x1="35" y1="45" x2="25" y2="40" strokeWidth="1" />
                <circle cx="25" cy="40" r="1.5" fill="#3B82F6" />
                {/* Index finger */}
                <line x1="50" y1="55" x2="42" y2="30" strokeWidth="1" />
                <line x1="42" y1="30" x2="38" y2="15" strokeWidth="1" />
                <circle cx="38" cy="15" r="1.5" fill="#3B82F6" />
                {/* Middle finger */}
                <line x1="50" y1="55" x2="50" y2="25" strokeWidth="1" />
                <line x1="50" y1="25" x2="50" y2="10" strokeWidth="1" />
                <circle cx="50" cy="10" r="1.5" fill="#3B82F6" />
                {/* Ring finger */}
                <line x1="50" y1="55" x2="58" y2="28" strokeWidth="1" />
                <line x1="58" y1="28" x2="62" y2="14" strokeWidth="1" />
                <circle cx="62" cy="14" r="1.5" fill="#3B82F6" />
                {/* Pinky finger */}
                <line x1="50" y1="55" x2="65" y2="35" strokeWidth="1" />
                <line x1="65" y1="35" x2="72" y2="22" strokeWidth="1" />
                <circle cx="72" cy="22" r="1.5" fill="#3B82F6" />
              </svg>
              <div className="absolute top-1 right-1 border border-green-500/40 bg-green-500/10 text-[7px] font-mono font-bold text-green-400 px-1 py-0.5 rounded">
                THUMBS_UP (0.97)
              </div>
            </div>
            <div className="text-[7px] font-mono text-indigo-400/40 text-center">
              Active: 21 Landmarks detected
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-48 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <Code2 className="w-8 h-8 text-gray-400" />
        </div>
      );
  }
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-[#0B0F19] border-t border-gray-100/40 dark:border-gray-900/40 relative overflow-hidden"
    >
      {/* Visual background vector blurs */}
      <div className="absolute top-0 left-1/3 w-[350px] h-[350px] rounded-full bg-indigo-100/10 dark:bg-indigo-950/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
              03 / CREATIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-gray-900 dark:text-white mt-2">
              Featured Projects
            </h2>
          </div>
          <p className="text-xs font-mono text-gray-400 dark:text-gray-500 uppercase">
            // Crafted with modern stacks
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group rounded-[20px] bg-white dark:bg-gray-800/20 border border-gray-200/50 dark:border-gray-800/40 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Visual Header Banner */}
                <div className="overflow-hidden relative">
                  {renderProjectBanner(project.id)}
                  
                  {/* Category Pill Floating */}
                  <span className="absolute top-4 right-4 text-[10px] font-mono uppercase font-bold px-2.5 py-1 rounded-full bg-white/90 text-gray-900 shadow-sm backdrop-blur-md dark:bg-gray-900/90 dark:text-gray-100 border border-gray-200/20">
                    {project.category}
                  </span>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-2 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 min-h-[56px] flex items-center">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-6 line-clamp-4 min-h-[72px]">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/40 border border-gray-200/30 dark:border-gray-700/30 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer Buttons */}
              <div className="p-6 pt-0 border-t border-gray-100/50 dark:border-gray-800/50 flex items-center justify-between mt-6">
                {/* GitHub link */}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                ) : (
                  <span className="text-xs text-gray-300 dark:text-gray-700">No Repo</span>
                )}

                {/* Live demo link */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
