/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Calendar, MapPin, Briefcase, Sparkles, Database, Code } from 'lucide-react';
import { experienceData } from '../data';

const getExperienceIcon = (point: string) => {
  const p = point.toLowerCase();
  if (p.includes('python')) return <Code className="w-4 h-4 text-blue-500" />;
  if (p.includes('react')) return <Code className="w-4 h-4 text-teal-500" />;
  if (p.includes('database')) return <Database className="w-4 h-4 text-indigo-500" />;
  if (p.includes('ai applications')) return <Sparkles className="w-4 h-4 text-purple-500" />;
  return <Briefcase className="w-4 h-4 text-blue-500" />;
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-[#F8F9FB] dark:bg-[#080B11] border-t border-gray-100/40 dark:border-gray-900/40 relative overflow-hidden"
    >
      {/* Visual abstract blurs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-blue-100/10 dark:bg-blue-900/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
              04 / CHRONOLOGY
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-gray-900 dark:text-white mt-2">
              Work Experience
            </h2>
          </div>
          <p className="text-xs font-mono text-gray-400 dark:text-gray-500 uppercase">
            // Industry contributions
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-gray-200/60 dark:border-gray-800/60 pl-8 ml-4 space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[45px] top-1.5 w-8 h-8 rounded-full border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-all duration-300">
                <Briefcase className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              </div>

              {/* Card Container */}
              <div className="p-6 md:p-8 rounded-[24px] bg-white dark:bg-gray-800/20 border border-gray-200/50 dark:border-gray-800/40 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
                
                {/* Visual Glass Header overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-[128px] pointer-events-none transition-transform group-hover:scale-110" />

                {/* Meta details */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6 border-b border-gray-100/60 dark:border-gray-800/60 pb-4">
                  <div>
                    <span className="text-xs font-mono uppercase text-blue-600 dark:text-blue-400 font-bold tracking-wider">
                      Internship
                    </span>
                    <h3 className="text-lg font-display font-extrabold text-gray-900 dark:text-white mt-1">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1 text-xs text-gray-400 dark:text-gray-500 md:text-right font-mono">
                    <span className="flex items-center md:justify-end gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center md:justify-end gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Point details */}
                <div className="space-y-4 mb-8">
                  {exp.points.map((pt, i) => {
                    // Extract heading (before the colon) if present
                    const parts = pt.split(':');
                    const hasHeading = parts.length > 1;
                    const heading = parts[0];
                    const body = parts.slice(1).join(':');

                    return (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 p-1 rounded-md bg-gray-50 dark:bg-gray-800">
                          {getExperienceIcon(pt)}
                        </div>
                        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                          {hasHeading ? (
                            <>
                              <strong className="text-gray-800 dark:text-white font-semibold">
                                {heading}:
                              </strong>
                              {body}
                            </>
                          ) : (
                            pt
                          )}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Stacks Used */}
                <div>
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                    Tech Stack Utilized
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50/50 border border-blue-100 dark:bg-blue-500/10 dark:border-blue-500/10 px-3 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
