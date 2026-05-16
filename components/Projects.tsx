'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiArrowUpRight, FiChevronDown } from 'react-icons/fi'
import { projects, personalInfo } from '@/lib/data'

const VP = { once: true, margin: '-60px' } as const
const GRID_LIMIT = 3

const ALL_CATS = [
  'All',
  ...Array.from(new Set(projects.map(p => p.category))),
]

function GradientHeader({
  gradient, icon, category, large = false,
}: {
  gradient: string; icon: string; category: string; large?: boolean
}) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${
        large ? 'h-52 lg:h-full lg:min-h-[260px]' : 'h-40'
      }`}
    >
      <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-white/5 blur-2xl" />
      <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-white/5 blur-2xl" />
      <div
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`select-none opacity-[0.18] ${
            large ? 'text-7xl lg:text-8xl' : 'text-6xl'
          }`}
        >
          {icon}
        </span>
      </div>
      <span className="absolute top-4 left-4 px-2.5 py-1 text-[10px] font-mono font-semibold rounded-md bg-bg/70 text-slate-300 backdrop-blur-sm border border-white/10 tracking-wide uppercase">
        {category}
      </span>
    </div>
  )
}

function ProjectCard({
  p, index, isReveal = false,
}: {
  p: (typeof projects)[0]; index: number; isReveal?: boolean
}) {
  return (
    <motion.div
      className="card overflow-hidden flex flex-col group"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{
        duration: 0.38,
        delay: isReveal ? index * 0.1 : index * 0.07,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{ y: -4, transition: { duration: 0.18 } }}
    >
      <GradientHeader gradient={p.gradient} icon={p.icon} category={p.category} />

      <div className="p-5 flex flex-col flex-1">

        {/* Title row */}
        <div className="flex items-start justify-between gap-2 mb-2.5">
          <h3 className="text-white text-sm font-semibold leading-snug group-hover:text-indigo-300 transition-colors flex-1">
            {p.title}
          </h3>
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 w-7 h-7 rounded-md border border-line text-slate-500 hover:border-indigo-500/50 hover:text-indigo-400 flex items-center justify-center transition-all"
            aria-label={`${p.title} on GitHub`}
          >
            <FiArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Description */}
        <p className="text-slate-500 text-xs leading-relaxed mb-3 flex-1">{p.description}</p>

        {/* Highlight pill */}
        <div className="p-3 rounded-lg bg-bg/60 border border-line mb-4">
          <p className="text-slate-400 text-[11px] leading-relaxed flex items-start gap-2">
            <span className="mt-[3px] w-1 h-1 rounded-full bg-indigo-400 shrink-0" />
            {p.highlights[0]}
          </p>
        </div>

        {/* Footer: tech tags + link actions */}
        <div className="flex items-center justify-between gap-2 mt-auto">
          <div className="flex flex-wrap gap-1">
            {p.tech.slice(0, 3).map(t => (
              <span
                key={t}
                className="px-2 py-0.5 text-[10px] font-mono rounded bg-muted/60 text-slate-400 border border-line"
              >
                {t}
              </span>
            ))}
            {p.tech.length > 3 && (
              <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-muted/60 text-slate-500 border border-line">
                +{p.tech.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500 hover:text-indigo-400 transition-colors"
            >
              <FiGithub className="w-3 h-3" /> Code
            </a>
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500 hover:text-cyan-400 transition-colors"
              >
                <FiExternalLink className="w-3 h-3" /> Live
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [filter, setFilter]   = useState('All')
  const [showMore, setShowMore] = useState(false)

  const featured   = projects.find(p => p.featured)!
  const isFiltered = filter !== 'All'

  const gridProjects = isFiltered
    ? projects.filter(p => p.category === filter)
    : projects.filter(p => !p.featured)

  const visibleGrid = gridProjects.slice(0, GRID_LIMIT)
  const hiddenGrid  = gridProjects.slice(GRID_LIMIT)
  const hasMore     = hiddenGrid.length > 0

  return (
    <section id="projects" className="section-pad bg-surface border-t border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">03 / Projects</span>
          <h2 className="section-title">Things I&apos;ve Built</h2>
          <div className="rule" />
          <p className="text-slate-500 text-sm max-w-lg mb-8">
            Personal and academic projects spanning enterprise automation, machine learning, computer vision, and full-stack development.
          </p>
        </motion.div>

        {/* ── Category filters ── */}
        <motion.div
          className="flex flex-wrap gap-2 mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ delay: 0.1 }}
        >
          {ALL_CATS.map(cat => (
            <button
              key={cat}
              onClick={() => { setFilter(cat); setShowMore(false) }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-indigo-600 text-white shadow-[0_0_12px_rgba(99,102,241,0.28)]'
                  : 'border border-line text-slate-400 hover:border-indigo-500/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* ── Featured project — collapses smoothly when a filter is active ── */}
        <motion.div
          initial={false}
          animate={{
            height: isFiltered ? 0 : 'auto',
            opacity: isFiltered ? 0 : 1,
            marginBottom: isFiltered ? 0 : 32,
          }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          style={{ overflow: 'hidden' }}
        >
          <div className="card overflow-hidden grid lg:grid-cols-[5fr_6fr] group">
            <GradientHeader
              gradient={featured.gradient}
              icon={featured.icon}
              category={featured.category}
              large
            />
            <div className="p-5 sm:p-8 flex flex-col justify-center">
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-semibold tracking-wide">
                  ★ Featured Project
                </span>
              </div>
              <h3 className="text-white text-xl font-bold mb-3 group-hover:text-indigo-200 transition-colors">
                {featured.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                {featured.longDescription}
              </p>
              <ul className="space-y-2 mb-5">
                {featured.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-slate-300 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {featured.tech.map(t => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all hover:shadow-[0_0_16px_rgba(99,102,241,0.35)] hover:-translate-y-px"
                >
                  <FiGithub className="w-3.5 h-3.5" /> View on GitHub
                </a>
                {featured.live && (
                  <a
                    href={featured.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-line hover:border-indigo-500/50 text-slate-300 hover:text-white text-xs font-semibold transition-all"
                  >
                    <FiExternalLink className="w-3.5 h-3.5" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Primary grid (first GRID_LIMIT projects) ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            {visibleGrid.map((p, i) => (
              <ProjectCard key={p.id} p={p} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Revealed extra projects ── */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
            >
              {hiddenGrid.map((p, i) => (
                <ProjectCard key={p.id} p={p} index={i} isReveal />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── View More / Show Less ── */}
        {hasMore && (
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VP}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={() => setShowMore(prev => !prev)}
              className="group relative inline-flex items-center gap-2.5 px-7 py-3 rounded-xl border border-line text-slate-400 hover:border-indigo-500/40 hover:text-indigo-400 text-sm font-medium transition-all duration-300 hover:-translate-y-px overflow-hidden"
            >
              <span className="absolute inset-0 rounded-xl bg-indigo-500/0 group-hover:bg-indigo-500/5 transition-colors duration-300" />
              <span className="relative flex items-center gap-2">
                {showMore ? (
                  <>
                    Show Less
                    <FiChevronDown className="w-4 h-4 rotate-180 transition-transform duration-300" />
                  </>
                ) : (
                  <>
                    View {hiddenGrid.length} More Project{hiddenGrid.length !== 1 ? 's' : ''}
                    <FiChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
                  </>
                )}
              </span>
            </button>
          </motion.div>
        )}

        {/* ── GitHub CTA ── */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VP}
          transition={{ delay: 0.3 }}
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-line text-slate-400 hover:border-indigo-500/50 hover:text-indigo-300 text-sm transition-all hover:-translate-y-px group"
          >
            <FiGithub className="w-4 h-4" />
            See more on GitHub
            <FiArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
