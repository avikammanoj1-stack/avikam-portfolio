/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, ExternalLink, Calendar, ShieldCheck, CheckCircle2, Cpu, Code2 } from 'lucide-react';
import { certificationsData } from '../data';

// Helper to render high-fidelity premium visual image cards for certificates
const renderCertImage = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('ieee') || t.includes('iot')) {
    return (
      <div className="relative w-full h-36 bg-gradient-to-tr from-blue-700 via-indigo-800 to-indigo-950 flex items-center justify-center overflow-hidden rounded-t-[20px]">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-blue-500/10 border border-blue-500/10" />
        {/* Abstract circuits design */}
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="z-10 flex flex-col items-center justify-center text-center p-4">
          <Cpu className="w-10 h-10 text-blue-200 mb-2" />
          <span className="text-[9px] font-mono tracking-widest text-blue-300 font-extrabold uppercase">IEEE ADVANCED LEVEL</span>
          <span className="text-xs font-display font-bold text-white mt-1.5 px-4">Edge IoT & Smart Automation</span>
        </div>
      </div>
    );
  }
  if (t.includes('python') || t.includes('internship')) {
    return (
      <div className="relative w-full h-36 bg-gradient-to-tr from-gray-800 via-slate-900 to-gray-950 flex items-center justify-center overflow-hidden rounded-t-[20px]">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute -left-4 -top-4 w-20 h-20 rounded-full bg-yellow-500/5" />
        {/* Python colors look */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="z-10 flex flex-col items-center justify-center text-center p-4">
          <Code2 className="w-10 h-10 text-yellow-400 mb-2" />
          <span className="text-[9px] font-mono tracking-widest text-sky-400 font-extrabold uppercase">NEOVENT INNOVATIONS</span>
          <span className="text-xs font-display font-bold text-white mt-1.5 px-4">Python for Data Science</span>
        </div>
      </div>
    );
  }
  if (t.includes('dekathon') || t.includes('hackathon')) {
    return (
      <div className="relative w-full h-36 bg-gradient-to-tr from-emerald-600 via-teal-800 to-emerald-950 flex items-center justify-center overflow-hidden rounded-t-[20px]">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.15),transparent)] pointer-events-none" />
        <div className="z-10 flex flex-col items-center justify-center text-center p-4">
          <Award className="w-10 h-10 text-emerald-200 mb-2 animate-bounce" style={{ animationDuration: '3s' }} />
          <span className="text-[9px] font-mono tracking-widest text-emerald-300 font-extrabold uppercase">DEKATHON 4.0</span>
          <span className="text-xs font-display font-bold text-white mt-1.5 px-4">National Hackathon Elite</span>
        </div>
      </div>
    );
  }
  return (
    <div className="relative w-full h-36 bg-gradient-to-tr from-gray-700 to-gray-900 flex items-center justify-center overflow-hidden rounded-t-[20px]">
      <div className="z-10 flex flex-col items-center justify-center text-center p-4">
        <Award className="w-10 h-10 text-gray-300 mb-2" />
        <span className="text-xs font-display font-bold text-white">Professional Certificate</span>
      </div>
    </div>
  );
};

export default function Certifications() {
  return (
    <section
      id="certificates"
      className="py-24 bg-[#F8F9FB] dark:bg-[#080B11] border-t border-gray-100/40 dark:border-gray-900/40 relative overflow-hidden"
    >
      {/* Decorative vectors */}
      <div className="absolute top-1/2 left-10 w-[250px] h-[250px] rounded-full bg-blue-100/10 dark:bg-blue-900/5 blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
              06 / CREDENTIALS
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-gray-900 dark:text-white mt-2">
              Certifications
            </h2>
          </div>
          <p className="text-xs font-mono text-gray-400 dark:text-gray-500 uppercase">
            // Verified Achievements
          </p>
        </div>

        {/* Beautiful Timeline flow */}
        <div className="relative border-l border-gray-200/50 dark:border-gray-800/50 pl-8 md:pl-12 ml-4 space-y-16">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[45px] md:-left-[61px] top-4 w-8 h-8 rounded-full border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 flex items-center justify-center shadow-sm z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-500" />
              </div>

              {/* Certificate Image Card Container */}
              <div className="max-w-2xl rounded-[20px] bg-white dark:bg-gray-800/20 border border-gray-200/50 dark:border-gray-800/40 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
                
                {/* Premium Image Header */}
                {renderCertImage(cert.title)}

                {/* Certificate Content */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-base md:text-lg font-display font-extrabold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mt-1">
                        {cert.issuer}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-100/30 dark:border-blue-500/10 text-[9px] font-mono font-bold tracking-wider shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>VERIFIED</span>
                    </div>
                  </div>

                  {/* Extra Metadata details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-gray-100/60 dark:border-gray-800/60 text-xs font-mono text-gray-400 dark:text-gray-500">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      Issued {cert.date}
                    </span>
                    
                    {cert.credentialId && (
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        ID: {cert.credentialId}
                      </span>
                    )}
                  </div>

                  {/* Verification action link */}
                  {cert.url && (
                    <div className="mt-6 pt-4 border-t border-gray-100/30 dark:border-gray-800/20 flex justify-end">
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 font-bold hover:underline transition-all"
                      >
                        <span>Verify Credential Link</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
