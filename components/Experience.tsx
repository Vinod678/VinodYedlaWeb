'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMapPin, FiCalendar, FiChevronDown } from 'react-icons/fi'
import { experiences } from '@/lib/data'

const VP = { once: true, margin: '-60px' } as const

const ACCENT: Record<string, { border: string; dot: string; badge: string; text: string }> = {
  indigo: {
    border: 'border-indigo-500/60',
    dot:    'bg-indigo-500 shadow-[0_0_0_4px_rgba(99,102,241,0.18)]',
    badge:  'bg-indigo-500/15 text-indigo-300 border-indigo-500/25',
    text:   'text-indigo-400',
  },
  cyan: {
    border: 'border-cyan-500/60',
    dot:    'bg-cyan-500 shadow-[0_0_0_4px_rgba(6,182,212,0.18)]',
    badge:  'bg-cyan-500/15 text-cyan-300 border-cyan-500/25',
    text:   'text-cyan-400',
  },
  violet: {
    border: 'border-violet-500/60',
    dot:    'bg-violet-500 shadow-[0_0_0_4px_rgba(139,92,246,0.18)]',
    badge:  'bg-violet-500/15 text-violet-300 border-violet-500/25',
    text:   'text-violet-400',
  },
}

function ExpCard({ exp, index }: { exp: (typeof experiences)[0]; index: number }) {
  const [open, setOpen] = useState(index === 0)
  const a = ACCENT[exp.accent]

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={VP}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="relative pl-10"
    >
      {/* Timeline dot */}
      <div className={`absolute left-0 top-6 w-3 h-3 rounded-full ${a.dot} translate-x-[-1.5px]`} />

      <div className={`card border-l-2 ${a.border} rounded-l-none overflow-hidden`}>
        {/* Header — always visible */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full p-6 pb-5 text-left flex flex-wrap items-start justify-between gap-4 group"
        >
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
              <h3 className="text-white font-semibold text-base group-hover:text-indigo-200 transition-colors">
                {exp.role}
              </h3>
              {exp.current && (
                <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 animate-pulse">
                  Current
                </span>
              )}
            </div>
            <p className={`font-semibold text-sm ${a.text}`}>{exp.company}</p>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                <FiCalendar className="w-3 h-3" /> {exp.duration}
              </span>
              <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                <FiMapPin className="w-3 h-3" /> {exp.location}
              </span>
              <span className={`px-2 py-0.5 text-[10px] rounded-md border ${a.badge}`}>
                {exp.type}
              </span>
            </div>
          </div>
          <FiChevronDown
            className={`w-4 h-4 text-slate-500 transition-transform duration-300 mt-1 shrink-0 ${open ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Expandable content */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 border-t border-line pt-5">
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{exp.description}</p>

                <ul className="space-y-2.5 mb-6">
                  {exp.achievements.map((achievement, j) => (
                    <motion.li
                      key={j}
                      className="flex items-start gap-3 text-slate-300 text-sm"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.04 }}
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                      {achievement}
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-bg border-t border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">02 / Experience</span>
          <h2 className="section-title">Where I&apos;ve Worked</h2>
          <div className="rule" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-[5.5px] top-6 bottom-6 w-px bg-gradient-to-b from-indigo-500/60 via-line to-transparent" />

          <div className="space-y-5">
            {experiences.map((exp, i) => (
              <ExpCard key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
