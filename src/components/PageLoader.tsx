/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PageLoaderProps {
  onComplete: () => void;
}

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 600); // Allow fade out animation to finish
          }, 400);
          return 100;
        }
        // Smooth progression with random small increments
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="page-loader-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F8F9FB] text-[#111827] dark:bg-[#0B0F19] dark:text-[#F9FAFB]"
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] dark:opacity-20" />

          <div className="relative flex flex-col items-center z-10 max-w-xs text-center">
            {/* Visual Logo Ring */}
            <motion.div
              id="loader-logo-container"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-24 h-24 mb-8 flex items-center justify-center rounded-full border border-gray-200/50 dark:border-gray-800/50 backdrop-blur-md bg-white/20 dark:bg-black/10 shadow-lg"
            >
              <span className="text-3xl font-display font-bold tracking-widest text-[#111827] dark:text-white">
                AM
              </span>
              
              {/* Spinning progress stroke */}
              <svg className="absolute inset-0 w-full h-full rotate-[-90deg]">
                <circle
                  cx="48"
                  cy="48"
                  r="45"
                  className="stroke-gray-100 dark:stroke-gray-800/30"
                  strokeWidth="2"
                  fill="transparent"
                />
                <motion.circle
                  cx="48"
                  cy="48"
                  r="45"
                  className="stroke-blue-600 dark:stroke-blue-500"
                  strokeWidth="2.5"
                  fill="transparent"
                  strokeDasharray="283"
                  strokeDashoffset={283 - (283 * progress) / 100}
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            {/* Name/Role */}
            <motion.h1
              id="loader-name"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-display font-semibold tracking-wider uppercase text-gray-900 dark:text-white mb-2"
            >
              Avikam Manoj
            </motion.h1>

            {/* Tagline */}
            <motion.p
              id="loader-tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.4 }}
              className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6"
            >
              Build. Grow. Serve.
            </motion.p>

            {/* Numeric counter */}
            <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-800 relative overflow-hidden rounded-full">
              <div
                className="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>

            <span className="mt-3 text-sm font-mono text-gray-400 dark:text-gray-500">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
