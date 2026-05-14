'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload } from 'react-icons/fi'
import { personalInfo } from '@/lib/data'

const VP = { once: true, margin: '-60px' } as const

const HIGHLIGHTS = [
  'Java & Spring Boot microservices at enterprise scale',
  'Docker, Kubernetes & AWS cloud deployments',
  'CI/CD pipelines and DevOps best practices',
  'Agile collaboration in cross-functional teams',
]

export default function About() {
  return (
    <section id="about" className="section-pad bg-surface border-t border-line">
      <div className="max-w-6xl mx-auto px-6">

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

        <div className="grid lg:grid-cols-[3fr_2fr] gap-14 items-start">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-slate-300 text-base leading-relaxed mb-5">
              {personalInfo.bio}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Outside of work I enjoy exploring new frameworks, contributing to open-source,
              and working through algorithmic challenges to keep my problem-solving sharp.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors"
              >
                <FiDownload className="w-4 h-4" /> Download Resume
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 text-slate-300 hover:border-indigo-500/50 hover:text-white text-sm font-semibold transition-all"
              >
                Contact Me <FiArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Highlight list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="space-y-3"
          >
            <p className="text-xs font-mono text-slate-500 tracking-widest uppercase mb-5">What I work with</p>
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={h}
                className="flex items-center gap-3 text-sm text-slate-300"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VP}
                transition={{ delay: 0.2 + i * 0.07 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                {h}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
