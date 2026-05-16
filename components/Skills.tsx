'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { skillCategories } from '@/lib/data'

const VP = { once: true, margin: '-60px' } as const

const LEVEL_STYLE: Record<string, { pill: string; bar: string; width: string }> = {
  Expert:       { pill: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25', bar: 'bg-emerald-400', width: 'w-full' },
  Advanced:     { pill: 'bg-indigo-500/15  text-indigo-400  border-indigo-500/25',  bar: 'bg-indigo-400',  width: 'w-3/4'  },
  Intermediate: { pill: 'bg-cyan-500/15    text-cyan-400    border-cyan-500/25',    bar: 'bg-cyan-400',    width: 'w-1/2'  },
}

const CAT_ACCENT: Record<string, string> = {
  'Programming Languages': 'from-violet-600/20 to-purple-900/5',
  'Backend':               'from-indigo-600/20 to-blue-900/5',
  'Frontend':              'from-amber-600/20  to-orange-900/5',
  'Databases':             'from-emerald-600/20 to-teal-900/5',
  'Cloud & DevOps':        'from-cyan-600/20   to-sky-900/5',
  'Tools':                 'from-rose-600/20   to-pink-900/5',
}

export default function Skills() {
  const [tab, setTab] = useState(0)
  const current = skillCategories[tab]

  return (
    <section id="skills" className="section-pad bg-bg border-t border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">04 / Skills</span>
          <h2 className="section-title">Technologies I Use</h2>
          <div className="rule" />
        </motion.div>

        {/* Tab bar */}
        <motion.div
          className="flex flex-wrap gap-2 mb-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ delay: 0.1 }}
        >
          {skillCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setTab(i)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                tab === i
                  ? 'bg-indigo-600 text-white shadow-[0_0_12px_rgba(99,102,241,0.3)]'
                  : 'border border-line text-slate-400 hover:border-indigo-500/40 hover:text-white'
              }`}
            >
              <span className="text-base">{cat.icon}</span>
              <span className="hidden sm:inline">{cat.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Category header */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
          >
            {/* Category label bar */}
            <div className={`mb-6 p-4 rounded-xl bg-gradient-to-r ${CAT_ACCENT[current.name] ?? 'from-indigo-600/10 to-transparent'} border border-white/5`}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{current.icon}</span>
                <div>
                  <h3 className="text-white font-semibold text-sm">{current.name}</h3>
                  <p className="text-slate-500 text-xs">{current.skills.length} technologies</p>
                </div>
              </div>
            </div>

            {/* Skill cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {current.skills.map((skill, i) => {
                const ls = LEVEL_STYLE[skill.level]
                return (
                  <motion.div
                    key={skill.name}
                    className="card p-4 flex flex-col items-center gap-3 group cursor-default"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                    whileHover={{ y: -3, transition: { duration: 0.18 } }}
                  >
                    {/* Icon */}
                    <div className="w-10 h-10 relative group-hover:scale-110 transition-transform duration-200">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        className="object-contain drop-shadow-sm"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement
                          img.style.display = 'none'
                          const parent = img.parentElement
                          if (parent) {
                            parent.innerHTML = `<span class="text-2xl">${current.icon}</span>`
                          }
                        }}
                      />
                    </div>

                    {/* Name */}
                    <span className="text-slate-400 text-[11px] text-center font-medium leading-tight group-hover:text-white transition-colors">
                      {skill.name}
                    </span>

                    {/* Level pill */}
                    <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full border ${ls.pill}`}>
                      {skill.level}
                    </span>

                    {/* Mini progress bar */}
                    <div className="w-full h-0.5 rounded-full bg-muted">
                      <div className={`h-full rounded-full ${ls.bar} ${ls.width} transition-all duration-500`} />
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Legend */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="text-slate-600 text-xs font-mono">Proficiency:</span>
              {Object.entries(LEVEL_STYLE).map(([level, s]) => (
                <span key={level} className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border ${s.pill}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${s.bar}`} />
                  {level}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
