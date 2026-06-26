/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { GitPullRequest, Star, Calendar, Flame, Github, Code } from 'lucide-react';
import { githubStatsData } from '../data';

export default function GitHubStats() {
  const [hoveredCell, setHoveredCell] = useState<{ count: number; date: string } | null>(null);

  // Generate mock weeks of contribution data (53 weeks * 7 days)
  const generateContributionWeeks = () => {
    const weeks = [];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    // Create realistic representation of developer activity
    for (let w = 0; w < 53; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        // Higher probability of commits on weekdays, random clusters of high activity
        const isWeekend = d === 0 || d === 6;
        const randomFactor = Math.random();
        let count = 0;
        
        if (randomFactor > 0.45) {
          count = Math.floor(Math.random() * 5);
          if (isWeekend) count = Math.max(0, count - 2);
          // Highlight occasional high-productive days (8-10 commits)
          if (Math.random() > 0.96) count = Math.floor(Math.random() * 5) + 6;
        }

        // Generate a date string
        const dateObj = new Date();
        dateObj.setDate(dateObj.getDate() - (53 - w) * 7 + d);
        const dateString = dateObj.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        });

        days.push({ count, date: dateString });
      }
      weeks.push(days);
    }
    return weeks;
  };

  const contributionWeeks = generateContributionWeeks();

  // Map commit count to green color steps
  const getCellColorClass = (count: number) => {
    if (count === 0) return 'bg-gray-100 dark:bg-gray-800/50';
    if (count <= 2) return 'bg-[#9be9a8] dark:bg-[#0e4429]';
    if (count <= 4) return 'bg-[#40c463] dark:bg-[#006d32]';
    if (count <= 6) return 'bg-[#30a14e] dark:bg-[#26a641]';
    return 'bg-[#216e39] dark:bg-[#39d353]';
  };

  return (
    <section
      id="github-stats"
      className="py-24 bg-white dark:bg-[#0B0F19] border-t border-gray-100/40 dark:border-gray-900/40 relative overflow-hidden"
    >
      {/* Decorative vector overlays */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-blue-100/10 dark:bg-blue-950/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
              07 / TELEMETRY
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-gray-900 dark:text-white mt-2">
              GitHub Insights
            </h2>
          </div>
          <p className="text-xs font-mono text-gray-400 dark:text-gray-500 uppercase">
            // Real-time developer output
          </p>
        </div>

        {/* Inner Panel layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Metrics summary: Total Contributions, Longest Streak, Pull Requests, Stars */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            
            {/* Metric Card 1 */}
            <div className="p-5 rounded-[20px] bg-gray-50 dark:bg-gray-800/20 border border-gray-100 dark:border-gray-800/40 flex flex-col justify-between h-36">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-gray-400">Contributions</span>
                <Github className="w-4 h-4 text-gray-400" />
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white block">
                  {githubStatsData.totalContributions}
                </span>
                <span className="text-[10px] text-gray-400">In the last 12 months</span>
              </div>
            </div>

            {/* Metric Card 2 */}
            <div className="p-5 rounded-[20px] bg-gray-50 dark:bg-gray-800/20 border border-gray-100 dark:border-gray-800/40 flex flex-col justify-between h-36">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-gray-400">Current Streak</span>
                <Flame className="w-4 h-4 text-orange-500" />
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white block">
                  {githubStatsData.streakDays} Days
                </span>
                <span className="text-[10px] text-gray-400">Longest: {githubStatsData.longestStreak} days</span>
              </div>
            </div>

            {/* Metric Card 3 */}
            <div className="p-5 rounded-[20px] bg-gray-50 dark:bg-gray-800/20 border border-gray-100 dark:border-gray-800/40 flex flex-col justify-between h-36">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-gray-400">PRs Merged</span>
                <GitPullRequest className="w-4 h-4 text-purple-500" />
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white block">
                  {githubStatsData.prsMerged}
                </span>
                <span className="text-[10px] text-gray-400">Refactoring branches</span>
              </div>
            </div>

            {/* Metric Card 4 */}
            <div className="p-5 rounded-[20px] bg-gray-50 dark:bg-gray-800/20 border border-gray-100 dark:border-gray-800/40 flex flex-col justify-between h-36">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-gray-400">Stars Earned</span>
                <Star className="w-4 h-4 text-yellow-500" />
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white block">
                  {githubStatsData.totalStars}
                </span>
                <span className="text-[10px] text-gray-400">Global community stars</span>
              </div>
            </div>

          </div>

          {/* GitHub Graph and Top Languages Block */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Heatmap Graph Container */}
            <div className="p-6 rounded-[24px] bg-white dark:bg-gray-800/20 border border-gray-200/50 dark:border-gray-800/40 shadow-sm overflow-x-auto relative">
              <div className="flex items-center justify-between mb-4 shrink-0">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-xs font-mono font-bold text-gray-600 dark:text-gray-300">
                    GitHub Contribution Activity
                  </span>
                </div>
                {/* Visual tooltip pop */}
                {hoveredCell ? (
                  <span className="text-[10px] font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/10">
                    {hoveredCell.count === 0 ? 'No' : hoveredCell.count} contributions on {hoveredCell.date}
                  </span>
                ) : (
                  <span className="text-[10px] font-mono text-gray-400">Hover squares for history</span>
                )}
              </div>

              {/* Grid drawing */}
              <div className="flex gap-[3px] overflow-visible pb-2 select-none min-w-[580px]">
                {/* Weekday labels */}
                <div className="flex flex-col justify-between text-[9px] font-mono text-gray-300 pr-2 h-[82px] pt-1">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>

                {/* Grid weeks list */}
                {contributionWeeks.map((week, wIndex) => (
                  <div key={wIndex} className="flex flex-col gap-[3px]">
                    {week.map((day, dIndex) => (
                      <div
                        key={dIndex}
                        onMouseEnter={() => setHoveredCell({ count: day.count, date: day.date })}
                        onMouseLeave={() => setHoveredCell(null)}
                        className={`w-[9px] h-[9px] rounded-[1.5px] cursor-pointer transition-all duration-150 hover:scale-125 hover:ring-1 hover:ring-blue-500 ${getCellColorClass(
                          day.count
                        )}`}
                      />
                    ))}
                  </div>
                ))}
              </div>

              {/* Graph Legend */}
              <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 mt-4 shrink-0 border-t border-gray-100 dark:border-gray-800 pt-3">
                <span>Learn more at github.com/avikammanoj</span>
                <div className="flex items-center gap-1.5">
                  <span>Less</span>
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-gray-100 dark:bg-gray-800" />
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-[#9be9a8] dark:bg-[#0e4429]" />
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-[#40c463] dark:bg-[#006d32]" />
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-[#30a14e] dark:bg-[#26a641]" />
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-[#216e39] dark:bg-[#39d353]" />
                  <span>More</span>
                </div>
              </div>
            </div>

            {/* Language Share Breakdown */}
            <div className="p-6 rounded-[24px] bg-white dark:bg-gray-800/20 border border-gray-200/50 dark:border-gray-800/40 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <Code className="w-4 h-4 text-gray-400" />
                <span className="text-xs font-mono font-bold text-gray-600 dark:text-gray-300">
                  Most Used Languages Breakdown
                </span>
              </div>

              {/* Progress Line */}
              <div className="h-4 w-full rounded-full overflow-hidden flex mb-6 border border-gray-100 dark:border-gray-800">
                {githubStatsData.topLanguages.map((lang) => (
                  <div
                    key={lang.name}
                    style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                    className="h-full first:rounded-l-full last:rounded-r-full group relative transition-all hover:opacity-90"
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>

              {/* Labels Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {githubStatsData.topLanguages.map((lang) => (
                  <div key={lang.name} className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                      <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                        {lang.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-400 pl-4 mt-0.5">
                      {lang.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
