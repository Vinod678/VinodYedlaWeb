'use client'

import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiMapPin } from 'react-icons/fi'
import { personalInfo } from '@/lib/data'

const NAV_LINKS = [
  { label: 'About',      id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects',   id: 'projects' },
  { label: 'Skills',     id: 'skills' },
  { label: 'Education',  id: 'education' },
  { label: 'Contact',    id: 'contact' },
]

const SOCIALS = [
  { icon: FiGithub,   href: personalInfo.github,                label: 'GitHub',   handle: '/Vinod678' },
  { icon: FiLinkedin, href: personalInfo.linkedin,               label: 'LinkedIn', handle: '/vinod-yedla' },
  { icon: FiMail,     href: `mailto:${personalInfo.email}`,      label: 'Email',    handle: personalInfo.email },
]

export default function Footer() {
  const goto    = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  const toTop   = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-line" style={{ background: 'rgb(var(--color-bg))' }}>

      {/* Gradient accent line at very top */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      {/* Main content */}
      <div className="container-xl py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">

          {/* ── Col 1: Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              onClick={toTop}
              className="font-mono text-lg font-bold tracking-tight hover:text-indigo-400 transition-colors mb-3 block"
              style={{ color: 'rgb(var(--text-primary))' }}
            >
              vinod<span className="text-indigo-400">.</span>
            </button>
            <p className="text-sm leading-relaxed max-w-xs mb-5" style={{ color: 'rgb(var(--text-secondary))' }}>
              Senior Software Engineer specializing in Java, Spring Boot, and cloud-native backend systems.
            </p>
            <span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border border-line"
              style={{ color: 'rgb(var(--text-muted))' }}>
              <FiMapPin className="w-3 h-3 text-indigo-400" />
              Hyderabad, India
            </span>
          </div>

          {/* ── Col 2: Navigation ── */}
          <div>
            <p className="text-[10px] font-mono font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: 'rgb(var(--text-muted))' }}>
              Navigate
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {NAV_LINKS.map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => goto(id)}
                    className="text-sm hover:text-indigo-400 transition-colors text-left"
                    style={{ color: 'rgb(var(--text-secondary))' }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Connect ── */}
          <div>
            <p className="text-[10px] font-mono font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: 'rgb(var(--text-muted))' }}>
              Connect
            </p>
            <ul className="space-y-3">
              {SOCIALS.map(({ icon: Icon, href, label, handle }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 group"
                  >
                    <span className="w-7 h-7 rounded-md border border-line flex items-center justify-center
                                     text-indigo-400 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10
                                     transition-all shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                    <span>
                      <span className="text-xs font-medium block" style={{ color: 'rgb(var(--text-primary))' }}>
                        {label}
                      </span>
                      <span className="text-[10px] font-mono truncate max-w-[140px] block" style={{ color: 'rgb(var(--text-muted))' }}>
                        {handle}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-line">
        <div className="container-xl py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs order-2 sm:order-1" style={{ color: 'rgb(var(--text-muted))' }}>
            © {new Date().getFullYear()} Vinod Yedla. All rights reserved.
          </p>

          <div className="flex items-center gap-4 order-1 sm:order-2">
            {/* <span className="text-xs" style={{ color: 'rgb(var(--text-muted))' }}>
              Built with{' '}
              <span className="text-indigo-400 font-medium">Next.js</span>
              {' '}·{' '}
              <span className="text-indigo-400 font-medium">Tailwind CSS</span>
            </span> */}
            <button
              onClick={toTop}
              aria-label="Back to top"
              className="w-8 h-8 rounded-lg border border-line flex items-center justify-center
                         hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-400
                         transition-all hover:-translate-y-0.5"
              style={{ color: 'rgb(var(--text-muted))' }}
            >
              <FiArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
