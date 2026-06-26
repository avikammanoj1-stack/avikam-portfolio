/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { User, GraduationCap, Briefcase, Award, ArrowUpRight } from 'lucide-react';
import { ownerDetails } from '../data';

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: 'Education',
      value: 'B.Tech CS (Data Science)',
    },
    {
      icon: <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      title: 'Current Role',
      value: 'Software Engineering Intern',
    },
    {
      icon: <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
      title: 'Specializations',
      value: 'ML & Data Systems',
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-[#0B0F19] border-t border-gray-100/40 dark:border-gray-900/40 relative overflow-hidden"
    >
      {/* Decorative subtle background gradient */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-blue-100/10 dark:bg-blue-900/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
              01 / PROFILE
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-gray-900 dark:text-white mt-2">
              About Me
            </h2>
          </div>
          <p className="text-xs font-mono text-gray-400 dark:text-gray-500 uppercase">
            // Building intelligent software
          </p>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Summary and Core Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg md:text-xl font-display font-semibold text-gray-800 dark:text-gray-100 leading-relaxed">
                I am a proactive software engineer based in Kerala, India, focusing on constructing efficient 
                backends, responsive interfaces, and predictive machine learning models.
              </h3>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-6 leading-relaxed">
                With a rigorous background in Computer Science and Data Science, I bridge the gap between 
                empirical data exploration and high-end software development. My workflow revolves around the 
                principles of creating reproducible, maintainable code architectures that elevate user experience 
                while empowering automated decision pipelines.
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
                I strongly believe in the value of open communication, continuous learning, and serving 
                communities by providing technologies that work seamlessly and securely.
              </p>
            </motion.div>

            {/* Motto / Philosophy banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[20px] bg-gray-50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div>
                <span className="text-[10px] font-mono uppercase text-gray-400 tracking-wider">
                  Motto & Value System
                </span>
                <p className="text-xl font-display font-bold text-gray-800 dark:text-white mt-1">
                  Build. Grow. Serve.
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-sm">
                  Write resilient code. Advance knowledge endlessly. Deploy apps that support humanity.
                </p>
              </div>
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <User className="w-5 h-5" />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Highlights, Education Focus, Quick Info */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="p-5 rounded-[20px] bg-white dark:bg-gray-800/20 border border-gray-200/50 dark:border-gray-800/40 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 group-hover:scale-110 transition-transform">
                    {h.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 uppercase font-mono">
                      {h.title}
                    </p>
                    <p className="text-xs font-semibold text-gray-800 dark:text-white mt-0.5">
                      {h.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Academic Statement Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-[20px] bg-white dark:bg-gray-800/20 border border-gray-200/50 dark:border-gray-800/40 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100/20 dark:bg-blue-500/5 rounded-bl-[100px] pointer-events-none transition-transform group-hover:scale-110" />
              
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-500" />
                <span className="text-xs font-mono uppercase font-bold tracking-wider text-gray-400 dark:text-gray-500">
                  Academic Focus
                </span>
              </div>

              <h4 className="text-sm font-display font-bold text-gray-900 dark:text-white">
                B.Tech Computer Science (Data Science)
              </h4>

              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                Consistently maintaining a strong academic footing with an intense focus on modern 
                Software Engineering patterns, Artificial Intelligence architectures, Machine Learning modeling, 
                and full-stack software development.
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400">Current CGPA: 8.6 / 10.0</span>
                <span className="text-[10px] text-blue-600 dark:text-blue-400 font-bold flex items-center gap-0.5">
                  View Detail <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
