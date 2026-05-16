'use client'

import { motion } from 'framer-motion'
import { FiCalendar, FiAward } from 'react-icons/fi'
import { educationData } from '@/lib/data'

const VP = { once: true, margin: '-60px' } as const
const ICON = ['🎓', '📗', '🏫']

export default function Education() {
  return (
    <section id="education" className="section-pad bg-surface border-t border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">05 / Education</span>
          <h2 className="section-title">Academic Background</h2>
          <div className="rule" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-3xl">
          {educationData.map((edu, i) => (
            <motion.div
              key={edu.id}
              className="card p-6 flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ delay: i * 0.1 }}
            >
              <span className="text-2xl">{ICON[i]}</span>

              <div>
                <h3 className="text-white font-semibold text-sm mb-0.5">{edu.degree}</h3>
                {edu.field && <p className="text-indigo-400 text-xs">{edu.field}</p>}
              </div>

              <div className="space-y-1.5">
                <p className="text-slate-400 text-xs">{edu.institution}</p>
                <p className="text-slate-500 text-xs flex items-center gap-1.5">
                  <FiCalendar className="w-3 h-3" /> {edu.duration}
                </p>
                {edu.grade && (
                  <p className="text-emerald-400 text-xs flex items-center gap-1.5">
                    <FiAward className="w-3 h-3" /> {edu.grade}
                  </p>
                )}
              </div>

              {edu.description && (
                <p className="text-slate-500 text-xs leading-relaxed mt-auto">{edu.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
