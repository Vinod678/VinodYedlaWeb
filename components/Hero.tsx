'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight, FiMapPin } from 'react-icons/fi'
import { personalInfo } from '@/lib/data'

const ROLES = ['Senior Software Engineer', 'Java Developer', 'Backend Architect', 'Cloud-Native Engineer']

function TypedRole() {
  const [idx, setIdx]           = useState(0)
  const [txt, setTxt]           = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word  = ROLES[idx]
    const delay = deleting ? 38 : 80
    const t = setTimeout(() => {
      if (!deleting) {
        if (txt.length < word.length) setTxt(word.slice(0, txt.length + 1))
        else setTimeout(() => setDeleting(true), 2200)
      } else {
        if (txt.length > 0) setTxt(txt.slice(0, -1))
        else { setDeleting(false); setIdx(i => (i + 1) % ROLES.length) }
      }
    }, delay)
    return () => clearTimeout(t)
  }, [txt, deleting, idx])

  return (
    <span className="text-slate-300 text-xl lg:text-2xl font-light tracking-wide">
      {txt}<span className="animate-blink text-indigo-400 font-normal ml-0.5">|</span>
    </span>
  )
}

const ease = [0.21, 0.47, 0.32, 0.98]
const SOCIALS = [
  { icon: FiGithub,   href: personalInfo.github,                  label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.linkedin,                 label: 'LinkedIn' },
  { icon: FiMail,     href: `mailto:${personalInfo.email}`,              label: 'Email' },
]

export default function Hero() {
  const goto = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 bg-bg overflow-hidden">

      {/* Background: dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 75% 55% at 55% 35%, rgba(99,102,241,0.09) 0%, transparent 70%)',
        }}
      />
      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full py-12 sm:py-16">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 xl:gap-20 items-center">

          {/* ── Left: text ── */}
          <div className="max-w-2xl w-full">

            {/* Status badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-7"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-emerald-400 text-xs font-medium">Available for opportunities</span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              className="font-mono text-indigo-400 text-sm tracking-[0.18em] mb-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.06, ease }}
            >
              Hi, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              className="font-black leading-[1.04] tracking-tight text-white mb-4"
              style={{ fontSize: 'clamp(2.2rem, 8vw, 5.5rem)' }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease }}
            >
              Vinod{' '}
              <span className="grad">Yedla</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              className="mb-6 h-9 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <TypedRole />
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-slate-400 text-base leading-relaxed max-w-xl mb-8"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28, ease }}
            >
              Currently building enterprise compliance systems at{' '}
              <span className="text-indigo-300 font-medium">ADP</span>. Previously at{' '}
              <span className="text-indigo-300 font-medium">Infosys</span> delivering
              backend systems for banking and telecom clients. I care deeply about clean
              architecture and software that scales.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3 mb-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.36, ease }}
            >
              <button
                onClick={() => goto('projects')}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:-translate-y-px"
              >
                View Projects <FiArrowRight className="w-4 h-4" />
              </button>
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-slate-700 text-slate-300 hover:border-indigo-500/60 hover:text-white text-sm font-semibold transition-all hover:-translate-y-px"
              >
                <FiDownload className="w-4 h-4" /> Resume
              </a>
            </motion.div>

            {/* Social + location */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.46 }}
            >
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-slate-500 hover:text-indigo-400 transition-colors hover:-translate-y-0.5 inline-block"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
              <span className="w-12 h-px bg-slate-800" />
              <span className="flex items-center gap-1.5 text-slate-600 text-xs font-mono">
                <FiMapPin className="w-3 h-3" /> Hyderabad, India
              </span>
            </motion.div>
          </div>

          {/* ── Right: photo ── */}
          <motion.div
            className="flex justify-center lg:block order-first lg:order-none"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.18, ease }}
          >
            <div className="relative w-44 h-52 sm:w-52 sm:h-60 lg:w-64 lg:h-72 xl:w-72 xl:h-80">
              {/* Glow ring */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-indigo-600/20 to-cyan-500/10 blur-xl" />
              {/* Offset accent frame */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-indigo-500/25" />
              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden w-full h-full border border-indigo-500/20 shadow-2xl">
                <Image
                  src="/assets/images/profile_1.png"
                  alt="Vinod Yedla"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="hidden sm:block absolute -bottom-4 -left-4 sm:-left-6 px-3 py-2 rounded-xl bg-surface border border-line shadow-xl backdrop-blur-sm">
                <p className="text-[10px] text-slate-500 font-mono">Currently at</p>
                <p className="text-white text-xs font-bold">ADP · Java Developer</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 border-t border-line grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.52, ease }}
        >
          {personalInfo.stats.map((s) => (
            <div key={s.label} className="group">
              <p className="text-3xl font-bold mb-1">
                <span className="grad">{s.value}</span>
              </p>
              <p className="text-slate-500 text-xs group-hover:text-slate-400 transition-colors">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
