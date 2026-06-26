/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, BookOpen, Library } from 'lucide-react';
import { educationData } from '../data';

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-white dark:bg-[#0B0F19] border-t border-gray-100/40 dark:border-gray-900/40 relative overflow-hidden"
    >
      {/* Visual glowing layout */}
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] rounded-full bg-blue-100/10 dark:bg-blue-900/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
              05 / EDUCATION
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-gray-900 dark:text-white mt-2">
              Academic Background
            </h2>
          </div>
          <p className="text-xs font-mono text-gray-400 dark:text-gray-500 uppercase">
            // Scholastic details
          </p>
        </div>

        {/* Education Card Grid */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 md:p-8 rounded-[24px] bg-white dark:bg-gray-800/20 border border-gray-200/50 dark:border-gray-800/40 shadow-sm hover:shadow-md transition-all relative overflow-hidden group"
            >
              {/* Abstract decorative graphic */}
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-gray-50 dark:bg-gray-800/20 rounded-full flex items-center justify-center pointer-events-none transition-transform group-hover:scale-110">
                <GraduationCap className="w-16 h-16 text-gray-100 dark:text-gray-800/40" />
              </div>

              {/* Header metadata row */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-gray-100/60 dark:border-gray-800/60 pb-6 mb-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Library className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-display font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-0.5">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 font-display italic">
                      {edu.field}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1 items-start md:items-end shrink-0 font-mono">
                  <span className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  
                  {edu.grade && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 text-xs font-bold font-mono mt-1 border border-emerald-100/50 dark:border-emerald-500/10">
                      <Award className="w-3.5 h-3.5" />
                      {edu.grade}
                    </span>
                  )}
                </div>
              </div>

              {/* Academic Highlights Details */}
              <div className="space-y-3.5 relative z-10">
                <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  Key Scholastic Highlights
                </h4>
                {edu.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <BookOpen className="w-4 h-4 text-blue-500/80 mt-0.5 shrink-0" />
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
