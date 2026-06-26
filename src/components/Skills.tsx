/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, Coffee, Code, Code2, 
  Atom, FileCode, Layers, Palette, 
  Database, Zap, Table, Binary, 
  Brain, Network, Sparkles, GitBranch, 
  Github, Layers2
} from 'lucide-react';
import { skillsData } from '../data';
import { Skill } from '../types';

// Premium high-fidelity icon mapper for our tech stack
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Python':
      return <Terminal className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    case 'Java':
      return <Coffee className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
    case 'Code':
      return <Code className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />;
    case 'Code2':
      return <Code2 className="w-5 h-5 text-sky-500 dark:text-sky-400" />;
    case 'Cpu': // React
      return <Atom className="w-5 h-5 text-cyan-500 dark:text-cyan-400 animate-spin" style={{ animationDuration: '10s' }} />;
    case 'FileCode':
      return <FileCode className="w-5 h-5 text-orange-500 dark:text-orange-400" />;
    case 'Layers':
      return <Layers className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
    case 'Palette':
      return <Palette className="w-5 h-5 text-teal-500 dark:text-teal-400" />;
    case 'Database':
      return <Database className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />;
    case 'CloudLightning': // Supabase
      return <Zap className="w-5 h-5 text-emerald-500 dark:text-emerald-400 fill-emerald-500/10" />;
    case 'Table':
      return <Table className="w-5 h-5 text-violet-500 dark:text-violet-400" />;
    case 'Binary':
      return <Binary className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
    case 'Brain':
      return <Brain className="w-5 h-5 text-pink-500 dark:text-pink-400" />;
    case 'Workflow':
      return <Network className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
    case 'Sparkles':
      return <Sparkles className="w-5 h-5 text-purple-500 dark:text-purple-400" />;
    case 'GitBranch':
      return <GitBranch className="w-5 h-5 text-red-500 dark:text-red-400" />;
    case 'Github':
      return <Github className="w-5 h-5 text-gray-900 dark:text-gray-100" />;
    default:
      return <Layers2 className="w-5 h-5 text-blue-500" />;
  }
};

const categories = ['All', 'Programming', 'Frontend', 'Database', 'AI & Data Science', 'Version Control'] as const;

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>('All');

  const filteredSkills = skillsData.filter((skill) => {
    if (selectedCategory === 'All') return true;
    return skill.category === selectedCategory;
  });

  return (
    <section
      id="skills"
      className="py-24 bg-[#F8F9FB] dark:bg-[#080B11] border-t border-gray-100/40 dark:border-gray-900/40 relative overflow-hidden"
    >
      {/* Absolute decorative premium glow vector */}
      <div className="absolute top-1/4 right-10 w-[350px] h-[350px] rounded-full bg-blue-100/10 dark:bg-blue-950/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-indigo-100/10 dark:bg-indigo-950/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
              02 / CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-gray-900 dark:text-white mt-2">
              Skills & Stack
            </h2>
          </div>

          {/* Tab Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white/80 dark:bg-gray-900/40 p-1.5 rounded-2xl border border-gray-200/50 dark:border-gray-800/40 shadow-sm backdrop-blur-md self-start lg:self-auto max-w-full overflow-x-auto no-scrollbar">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-white bg-blue-600 dark:bg-blue-500 shadow-sm'
                      : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="group relative p-5 md:p-6 rounded-[20px] bg-white dark:bg-gray-900/10 border border-gray-200/50 dark:border-gray-800/40 shadow-sm hover:shadow-[0_0_25px_rgba(37,99,235,0.08)] hover:border-blue-500/20 dark:hover:border-blue-400/20 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden"
              >
                {/* Premium blue gradient accent overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/[0.01] dark:to-blue-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Subtle light bar at top on hover */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-blue-500/0 group-hover:bg-blue-500/40 transition-all duration-300 rounded-full" />

                {/* Top Section with Icon and Category Badge */}
                <div className="flex items-start justify-between gap-3 mb-6 relative z-10">
                  <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/30 group-hover:scale-105 transition-all duration-300">
                    {getIconComponent(skill.iconName)}
                  </div>
                  
                  <span className="text-[9px] font-mono font-bold uppercase text-gray-400 dark:text-gray-500 px-2 py-0.5 rounded-md bg-gray-100/50 dark:bg-gray-800/40 border border-gray-200/10 dark:border-gray-700/10">
                    {skill.category}
                  </span>
                </div>

                {/* Bottom Section with Title */}
                <div className="relative z-10">
                  <h3 className="text-sm md:text-base font-display font-bold text-gray-900 dark:text-white transition-colors duration-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {skill.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
