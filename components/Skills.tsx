'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { skillCategories } from '@/lib/data'

const VP = { once: true, margin: '-60px' } as const

const LEVEL: Record<string, { dot: string; label: string }> = {
  Expert:       { dot: 'bg-emerald-400', label: 'text-emerald-400' },
  Advanced:     { dot: 'bg-indigo-400',  label: 'text-indigo-400'  },
  Intermediate: { dot: 'bg-cyan-400',    label: 'text-cyan-400'    },
}

export default function Skills() {
  const [tab, setTab] = useState(0)

  return (
    <section id="skills" className="section-pad bg-bg border-t border-line">
      <div className="max-w-6xl mx-auto px-6">

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
          transition={{ delay: 0.12 }}
        >
          {skillCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setTab(i)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                tab === i
                  ? 'bg-indigo-600 text-white'
                  : 'border border-line text-slate-400 hover:border-indigo-500/40 hover:text-white'
              }`}
            >
              {cat.emoji} {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={tab}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.35 }}
        >
          {skillCategories[tab].skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="card p-4 flex flex-col items-center gap-2.5 group"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VP}
              transition={{ delay: i * 0.04 }}
            >
              <div className="w-10 h-10 relative group-hover:scale-110 transition-transform duration-200">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  className="object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
              </div>
              <span className="text-slate-400 text-[11px] text-center font-medium leading-tight group-hover:text-white transition-colors">
                {skill.name}
              </span>
              <span className={`text-[9px] font-semibold flex items-center gap-1 ${LEVEL[skill.level].label}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${LEVEL[skill.level].dot}`} />
                {skill.level}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
