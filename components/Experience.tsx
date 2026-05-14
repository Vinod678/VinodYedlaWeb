'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/lib/data'

const VP = { once: true, margin: '-60px' } as const

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-bg border-t border-line">
      <div className="max-w-6xl mx-auto px-6">

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

        <div className="space-y-5 max-w-3xl">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="card p-7"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              {/* Header row */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2.5 mb-1">
                    <h3 className="text-white font-semibold text-base">{exp.role}</h3>
                    {exp.current && (
                      <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-indigo-400 text-sm font-medium">{exp.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-400 text-xs">{exp.duration}</p>
                  <p className="text-slate-600 text-xs mt-0.5">{exp.location} · {exp.type}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{exp.description}</p>

              {/* Achievements */}
              <ul className="space-y-1.5 mb-5">
                {exp.achievements.map((a, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-slate-300 text-sm">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-500 shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>

              {/* Tech */}
              <div className="flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
