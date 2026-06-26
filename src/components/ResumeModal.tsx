/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { X, Mail, Linkedin, Github, MapPin, Printer, Download, Award, GraduationCap, Briefcase, FileText } from 'lucide-react';
import { ownerDetails, experienceData, educationData, certificationsData, skillsData } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 md:p-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="w-full max-w-4xl bg-white dark:bg-[#0B0F19] border border-gray-200/50 dark:border-gray-800/60 rounded-[24px] shadow-2xl flex flex-col h-[90vh] overflow-hidden relative"
      >
        
        {/* Modal Header Actions Banner (Non-printable) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800 shrink-0 bg-gray-50/50 dark:bg-gray-800/10 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-mono font-bold text-gray-700 dark:text-gray-300">
              Interactive CV Sheet
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Print Control */}
            <button
              id="resume-print"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-300 transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print/Save PDF</span>
            </button>

            {/* Close */}
            <button
              id="resume-close"
              onClick={onClose}
              className="p-1.5 rounded-lg border border-gray-200 hover:bg-red-50 hover:text-red-500 dark:border-gray-700 dark:hover:bg-red-500/10 dark:hover:text-red-400 transition-all cursor-pointer active:scale-95"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div id="resume-printable-content" className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 print:p-0 print:overflow-visible">
          
          {/* Section 1: Top Header Header Block */}
          <div className="border-b border-gray-100 dark:border-gray-800 pb-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl font-display font-black text-gray-900 dark:text-white leading-none">
                {ownerDetails.name}
              </h1>
              <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-2 font-display">
                {ownerDetails.role}
              </h2>
              <p className="text-xs text-gray-400 dark:text-gray-500 font-mono tracking-widest mt-1 uppercase">
                {ownerDetails.tagline}
              </p>
            </div>

            {/* Quick Contact columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-gray-500 dark:text-gray-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                {ownerDetails.email}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                {ownerDetails.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                linkedin.com/in/avikam-manoj-world1822
              </span>
              <span className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                github.com/avikammanoj1-stack
              </span>
            </div>
          </div>

          {/* Section 2: Summary statement */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 border-b border-gray-100 dark:border-gray-800 pb-1.5">
              Professional Summary
            </h3>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Analytical Software Engineer specializing in Data Science and Machine Learning. Adept at building scalable backend services in Python and React dashboards. Proven competency automating cognitive workflows, integrating Gemini/Whisper large-scale AI models, and optimizing relational schemas for high throughput applications. Dedicated to strict architectural principles, clean testing boundaries, and collaborative product lifecycles.
            </p>
          </div>

          {/* Section 3: Professional Experience (Timeline block) */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 border-b border-gray-100 dark:border-gray-800 pb-1.5">
              Work Experience
            </h3>
            {experienceData.map((exp, idx) => (
              <div key={idx} className="space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-gray-900 dark:text-white">
                      {exp.role}
                    </h4>
                    <p className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono text-gray-400 dark:text-gray-500 sm:text-right">
                    {exp.period} | {exp.location}
                  </span>
                </div>
                
                <ul className="list-disc pl-4 space-y-1 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {exp.points.map((p, pIdx) => (
                    <li key={pIdx}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Section 4: Academic History */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 border-b border-gray-100 dark:border-gray-800 pb-1.5">
              Education
            </h3>
            {educationData.map((edu, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="text-[10px] sm:text-xs font-mono text-gray-400 dark:text-gray-500 sm:text-right flex flex-col items-start sm:items-end">
                    <span>{edu.period}</span>
                    {edu.grade && <span className="font-bold text-emerald-600 dark:text-emerald-400">{edu.grade}</span>}
                  </div>
                </div>
                
                <ul className="list-disc pl-4 space-y-1 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {edu.details.map((d, dIdx) => (
                    <li key={dIdx}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Section 5: Technical Competence */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 border-b border-gray-100 dark:border-gray-800 pb-1.5">
              Technical Skillsets
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <h4 className="text-xs font-bold text-gray-800 dark:text-gray-200 mb-1">Programming</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-mono">
                  Python, Java, JavaScript, TypeScript, React, HTML, CSS, Tailwind CSS
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-800 dark:text-gray-200 mb-1">Database</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-mono">
                  SQL, PostgreSQL, Supabase
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-800 dark:text-gray-200 mb-1">AI & Data Science</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-mono">
                  Scikit-learn, Pandas, NumPy, Machine Learning, Git & GitHub
                </p>
              </div>
            </div>
          </div>

          {/* Section 6: Verified Certifications */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 border-b border-gray-100 dark:border-gray-800 pb-1.5">
              Verifications & Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-gray-500 dark:text-gray-400">
              {certificationsData.map((cert, idx) => (
                <div key={idx} className="flex justify-between items-start gap-4 pb-1">
                  <div>
                    <span className="font-bold text-gray-800 dark:text-gray-200 block">{cert.title}</span>
                    <span className="text-gray-400 text-[10px]">{cert.issuer}</span>
                  </div>
                  <span className="text-right font-mono text-[10px] text-gray-400 shrink-0">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
