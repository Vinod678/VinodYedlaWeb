'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi'
import { personalInfo } from '@/lib/data'

const ROLES = ['Software Engineer', 'Backend Developer', 'Java Specialist', 'Cloud Enthusiast']

function TypedRole() {
  const [idx, setIdx]         = useState(0)
  const [txt, setTxt]         = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word  = ROLES[idx]
    const delay = deleting ? 40 : 85
    const t = setTimeout(() => {
      if (!deleting) {
        if (txt.length < word.length) setTxt(word.slice(0, txt.length + 1))
        else setTimeout(() => setDeleting(true), 2000)
      } else {
        if (txt.length > 0) setTxt(txt.slice(0, -1))
        else { setDeleting(false); setIdx(i => (i + 1) % ROLES.length) }
      }
    }, delay)
    return () => clearTimeout(t)
  }, [txt, deleting, idx])

  return (
    <span className="text-slate-300 text-xl font-light">
      {txt}<span className="animate-blink text-indigo-400 font-normal">|</span>
    </span>
  )
}

const ease = [0.21, 0.47, 0.32, 0.98]

export default function Hero() {
  const goto = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-bg relative overflow-hidden">
      {/* Subtle radial glow — low opacity, not distracting */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 60% 40%, rgba(99,102,241,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">

          {/* ── Left: text ── */}
          <div>
            <motion.p
              className="font-mono text-indigo-400 text-sm tracking-widest mb-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              className="font-black leading-[1.05] tracking-tight text-white mb-4"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease }}
            >
              Vinod{' '}
              <span className="grad">Yedla</span>
            </motion.h1>

            <motion.div
              className="mb-6 h-8 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.18 }}
            >
              <TypedRole />
            </motion.div>

            <motion.p
              className="text-slate-400 text-base leading-relaxed max-w-lg mb-8"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26, ease }}
            >
              Backend engineer at{' '}
              <span className="text-indigo-400 font-medium">Infosys</span>, building scalable
              microservices and cloud-native systems with Java &amp; Spring Boot. I care deeply
              about clean architecture and code that lasts.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3 mb-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34, ease }}
            >
              <button
                onClick={() => goto('projects')}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors"
              >
                View Projects <FiArrowRight className="w-4 h-4" />
              </button>
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-slate-700 text-slate-300 hover:border-indigo-500/60 hover:text-white text-sm font-semibold transition-all"
              >
                <FiDownload className="w-4 h-4" /> Resume
              </a>
            </motion.div>

            {/* Social */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.44 }}
            >
              {[
                { icon: FiGithub,   href: personalInfo.github,   label: 'GitHub' },
                { icon: FiLinkedin, href: personalInfo.linkedin,  label: 'LinkedIn' },
                { icon: FiMail,     href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-slate-500 hover:text-indigo-400 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
              <span className="w-16 h-px bg-slate-800" />
              <span className="text-slate-600 text-xs font-mono">Hyderabad, India</span>
            </motion.div>
          </div>

          {/* ── Right: photo ── */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
          >
            <div className="relative w-64 h-72 xl:w-72 xl:h-80">
              {/* Offset frame */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-indigo-500/30" />
              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden w-full h-full border border-line">
                <Image
                  src="/assets/images/profile.png"
                  alt="Vinod Yedla"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Subtle color overlay for cohesion */}
                <div className="absolute inset-0 bg-indigo-900/10" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          className="mt-20 pt-10 border-t border-line grid grid-cols-2 sm:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease }}
        >
          {personalInfo.stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-white grad" style={{ WebkitTextFillColor: undefined }}>
                <span className="grad">{s.value}</span>
              </p>
              <p className="text-slate-500 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
