/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { ownerDetails } from '../data';

export default function Footer() {
  const socialLinks = [
    { icon: <Github className="w-4 h-4" />, url: ownerDetails.github, id: 'footer-github' },
    { icon: <Linkedin className="w-4 h-4" />, url: ownerDetails.linkedin, id: 'footer-linkedin' },
    { icon: <Mail className="w-4 h-4" />, url: `mailto:${ownerDetails.email}`, id: 'footer-email' },
  ];

  return (
    <footer className="bg-white dark:bg-[#0B0F19] border-t border-gray-100/40 dark:border-gray-900/40 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center space-y-6">
        
        {/* Visual Brand Logo Monogram */}
        <div className="w-8 h-8 rounded-lg bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-display font-black text-xs tracking-widest flex items-center justify-center shadow-sm select-none">
          AM
        </div>

        {/* Tagline */}
        <p className="text-sm font-mono tracking-[0.4em] uppercase text-gray-800 dark:text-gray-100 font-bold select-none">
          Build. Grow. Serve.
        </p>

        {/* Social Quick Links */}
        <div className="flex items-center gap-3">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              id={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200/50 dark:border-gray-800/40 text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-105 hover:shadow-sm transition-all"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Copyright Stamps */}
        <div className="pt-6 border-t border-gray-100/60 dark:border-gray-800/60 w-full max-w-sm flex flex-col sm:flex-row sm:items-center sm:justify-between text-[10px] font-mono text-gray-400 gap-2 select-none">
          <span>© {new Date().getFullYear()} Avikam Manoj.</span>
          <span className="flex items-center justify-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400 animate-pulse" /> in Kerala, India
          </span>
        </div>

      </div>
    </footer>
  );
}
