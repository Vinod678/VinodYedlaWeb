'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi'
import { projects } from '@/lib/data'

const VP = { once: true, margin: '-60px' } as const

export default function Projects() {
  const featured = projects.find(p => p.featured)!
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="section-pad bg-surface border-t border-line">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">03 / Projects</span>
          <h2 className="section-title">Things I&apos;ve Built</h2>
          <div className="rule" />
        </motion.div>

        {/* ── Featured ── */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <div className="card overflow-hidden grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-56 lg:h-auto">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-card/10 lg:to-card" />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-amber-400 font-semibold tracking-wide">★ Featured</span>
                <span className="w-px h-3 bg-slate-700" />
                <span className="text-xs text-slate-500">{featured.category}</span>
              </div>

              <h3 className="text-white text-xl font-bold mb-3">{featured.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{featured.longDescription}</p>

              <ul className="space-y-1.5 mb-6">
                {featured.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-400 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {featured.tech.map(t => <span key={t} className="badge">{t}</span>)}
              </div>

              <div className="flex gap-3">
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
                >
                  <FiGithub className="w-3.5 h-3.5" /> Source Code
                </a>
                {featured.live && (
                  <a
                    href={featured.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-700 hover:border-indigo-500/50 text-slate-300 hover:text-white text-xs font-semibold transition-all"
                  >
                    <FiExternalLink className="w-3.5 h-3.5" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((p, i) => (
            <motion.div
              key={p.id}
              className="card overflow-hidden flex flex-col group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              {/* Thumbnail */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] font-semibold px-2 py-0.5 rounded bg-bg/80 text-slate-300 backdrop-blur-sm border border-line">
                  {p.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-white text-sm font-semibold leading-snug group-hover:text-indigo-300 transition-colors">
                    {p.title}
                  </h3>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-slate-500 hover:text-indigo-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <FiArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1">{p.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 4).map(t => (
                    <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded bg-muted/60 text-slate-400 border border-line">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub link */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VP}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://github.com/Vinod678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-400 transition-colors"
          >
            <FiGithub className="w-4 h-4" />
            See more on GitHub
            <FiArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
