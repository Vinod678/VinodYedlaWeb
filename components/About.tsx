'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiCode, FiServer, FiCloud, FiUsers } from 'react-icons/fi'
import { personalInfo } from '@/lib/data'

const VP = { once: true, margin: '-60px' } as const

const HIGHLIGHTS = [
  { icon: FiServer, text: 'Enterprise Java & Spring Boot microservices at scale' },
  { icon: FiCloud,  text: 'Docker, Kubernetes & AWS cloud-native deployments' },
  { icon: FiCode,   text: 'CI/CD pipelines, monitoring with Dynatrace & NewRelic' },
  { icon: FiUsers,  text: 'Cross-functional Agile teams across banking & telecom domains' },
]

export default function About() {
  return (
    <section id="about" className="section-pad bg-surface border-t border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">01 / About</span>
          <h2 className="section-title">Who I Am</h2>
          <div className="rule" />
        </motion.div>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-14 items-start">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-slate-300 text-base leading-relaxed mb-4">
              {personalInfo.bio}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Beyond backend work, I enjoy exploring system design, improving developer tooling,
              and keeping my problem-solving sharp through algorithmic challenges. I believe the
              best code is the code no one has to maintain — clear, purposeful, and testable.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all hover:-translate-y-px hover:shadow-[0_0_16px_rgba(99,102,241,0.3)]"
              >
                <FiDownload className="w-4 h-4" /> Download Resume
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 text-slate-300 hover:border-indigo-500/50 hover:text-white text-sm font-semibold transition-all hover:-translate-y-px"
              >
                Contact Me <FiArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="space-y-2.5"
          >
            <p className="text-xs font-mono text-slate-500 tracking-widest uppercase mb-5">What I work with</p>
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 p-3.5 rounded-lg border border-line bg-card/50 hover:border-indigo-500/30 hover:bg-card transition-all group"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VP}
                transition={{ delay: 0.22 + i * 0.07 }}
              >
                <div className="w-7 h-7 rounded-md bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/25 transition-colors">
                  <h.icon className="w-3.5 h-3.5 text-indigo-400" />
                </div>
                <span className="text-sm text-slate-300 leading-snug">{h.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
