'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Command } from 'cmdk'
import {
  FiUser, FiCode, FiFolder, FiMail, FiGithub, FiLinkedin,
  FiFileText, FiMapPin, FiPhone, FiExternalLink, FiTerminal,
  FiCpu, FiCloud, FiServer, FiCheckCircle, FiArrowRight,
} from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi'
import { personalInfo, projects } from '@/lib/data'

// ─── Types ────────────────────────────────────────────────────────────────────
interface Cmd {
  id: string
  label: string
  description?: string
  icon: React.ReactNode
  keywords?: string
  action: () => void
}

interface CmdGroup {
  heading: string
  items: Cmd[]
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
const scroll = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

const copyText = (text: string, setCopied: (v: string) => void, key: string) => {
  navigator.clipboard.writeText(text).then(() => {
    setCopied(key)
    setTimeout(() => setCopied(''), 1800)
  })
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function CommandPalette() {
  const [open,   setOpen]   = useState(false)
  const [query,  setQuery]  = useState('')
  const [copied, setCopied] = useState('')
  const [easter, setEaster] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const close = useCallback(() => {
    setOpen(false)
    setQuery('')
    setEaster(false)
  }, [])

  // Global keyboard shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(prev => !prev)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  // Custom event trigger
  useEffect(() => {
    const handler = () => { setOpen(true); setQuery(''); setEaster(false) }
    window.addEventListener('open-palette', handler)
    return () => window.removeEventListener('open-palette', handler)
  }, [])

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Easter egg detection
  useEffect(() => {
    if (query.trim().toLowerCase() === 'sudo hire-vinod') {
      setEaster(true)
    } else {
      setEaster(false)
    }
  }, [query])

  const copy = (text: string, key: string) => copyText(text, setCopied, key)

  // ─── Command definitions ──────────────────────────────────────────────────
  const groups: CmdGroup[] = [
    {
      heading: 'Navigation',
      items: [
        { id: 'nav-about',      label: 'Go to About',      icon: <FiUser />,     keywords: 'about who',        action: () => { close(); setTimeout(() => scroll('about'), 120) } },
        { id: 'nav-experience', label: 'Go to Experience', icon: <FiServer />,   keywords: 'experience work',  action: () => { close(); setTimeout(() => scroll('experience'), 120) } },
        { id: 'nav-projects',   label: 'Go to Projects',   icon: <FiFolder />,   keywords: 'projects portfolio', action: () => { close(); setTimeout(() => scroll('projects'), 120) } },
        { id: 'nav-skills',     label: 'Go to Skills',     icon: <FiCpu />,      keywords: 'skills tech stack', action: () => { close(); setTimeout(() => scroll('skills'), 120) } },
        { id: 'nav-education',  label: 'Go to Education',  icon: <FiCode />,     keywords: 'education degree',  action: () => { close(); setTimeout(() => scroll('education'), 120) } },
        { id: 'nav-contact',    label: 'Go to Contact',    icon: <FiMail />,     keywords: 'contact reach',     action: () => { close(); setTimeout(() => scroll('contact'), 120) } },
      ],
    },
    {
      heading: 'Profile',
      items: [
        { id: 'profile-role',         label: 'Current Role',       description: 'Java Developer at ADP',               icon: <FiServer />,   keywords: 'role job title adp',      action: () => copy('Java Developer at ADP', 'profile-role') },
        { id: 'profile-location',     label: 'Location',           description: personalInfo.location,                  icon: <FiMapPin />,   keywords: 'location city hyderabad',  action: () => copy(personalInfo.location, 'profile-location') },
        { id: 'profile-availability', label: 'Availability',       description: 'Open to opportunities',                icon: <HiOutlineSparkles />, keywords: 'available hire open', action: () => copy('Available for opportunities', 'profile-availability') },
        { id: 'profile-exp',          label: 'Years of Experience', description: '4+ years',                            icon: <FiUser />,     keywords: 'experience years senior', action: () => copy('4+ years of experience', 'profile-exp') },
      ],
    },
    {
      heading: 'Actions',
      items: [
        { id: 'action-resume',   label: 'View Resume',    description: 'Open PDF viewer',                    icon: <FiFileText />,  keywords: 'resume cv pdf download',        action: () => { close(); setTimeout(() => window.dispatchEvent(new CustomEvent('open-resume')), 150) } },
        { id: 'action-email',    label: 'Copy Email',     description: personalInfo.email,                   icon: <FiMail />,      keywords: 'email mail contact copy',       action: () => copy(personalInfo.email, 'action-email') },
        { id: 'action-github',   label: 'Open GitHub',    description: 'github.com/Vinod678',                icon: <FiGithub />,    keywords: 'github code source',            action: () => { close(); window.open(personalInfo.github, '_blank') } },
        { id: 'action-linkedin', label: 'Open LinkedIn',  description: 'linkedin.com/in/vinod-yedla',        icon: <FiLinkedin />,  keywords: 'linkedin connect network',      action: () => { close(); window.open(personalInfo.linkedin, '_blank') } },
        { id: 'action-phone',    label: 'Copy Phone',     description: personalInfo.phone,                   icon: <FiPhone />,     keywords: 'phone number call',             action: () => copy(personalInfo.phone, 'action-phone') },
      ],
    },
    {
      heading: 'Projects',
      items: projects.map(p => ({
        id:          `proj-${p.id}`,
        label:       p.title,
        description: p.category,
        icon:        <span className="text-base">{p.icon}</span>,
        keywords:    `${p.title} ${p.category} ${p.tech.join(' ')}`.toLowerCase(),
        action:      () => { close(); setTimeout(() => scroll('projects'), 120) },
      })),
    },
    {
      heading: 'Engineering',
      items: [
        { id: 'eng-stack',  label: 'Tech Stack',     description: 'Java, Spring Boot, Microservices, AWS',  icon: <FiCpu />,    keywords: 'java spring boot tech',       action: () => copy('Java, Spring Boot, Microservices, Docker, Kubernetes, AWS', 'eng-stack') },
        { id: 'eng-cloud',  label: 'Cloud & DevOps', description: 'Docker · Kubernetes · AWS · Jenkins',    icon: <FiCloud />,  keywords: 'cloud devops docker kubernetes', action: () => copy('Docker, Kubernetes, AWS, Jenkins, CI/CD', 'eng-cloud') },
        { id: 'eng-back',   label: 'Backend Focus',  description: 'REST APIs · Spring Boot · Microservices', icon: <FiServer />, keywords: 'backend rest api microservice', action: () => copy('REST APIs, Spring Boot, Microservices, Java 8+', 'eng-back') },
        { id: 'eng-source', label: 'Source Code',    description: 'View all repositories on GitHub',        icon: <FiGithub />, keywords: 'github repos code source',     action: () => { close(); window.open(personalInfo.github, '_blank') } },
      ],
    },
  ]

  const hasQuery = query.trim().length > 0
  const SUGGESTED = ['Go to Projects', 'View Resume', 'Open GitHub', 'Copy Email', 'Go to Contact']

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={close}
          />

          {/* Panel */}
          <div className="fixed inset-0 z-[201] flex items-start justify-center pt-[14vh] px-4 pointer-events-none">
            <motion.div
              className="w-full max-w-xl pointer-events-auto"
              initial={{ opacity: 0, scale: 0.96, y: -12 }}
              animate={{ opacity: 1, scale: 1,    y: 0   }}
              exit={{    opacity: 0, scale: 0.97,  y: -8  }}
              transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              {/* Easter egg screen */}
              {easter ? (
                <div
                  className="rounded-2xl overflow-hidden shadow-2xl border"
                  style={{
                    background:  'rgb(var(--color-card))',
                    borderColor: 'rgb(var(--color-line))',
                  }}
                >
                  {/* Input row — keep it visible so user can clear */}
                  <div className="flex items-center gap-3 px-4 py-3.5 border-b" style={{ borderColor: 'rgb(var(--color-line))' }}>
                    <FiTerminal className="w-4 h-4 text-emerald-400 shrink-0" />
                    <input
                      ref={inputRef}
                      value={query}
                      onChange={e => setQuery(e.target.value)}
                      className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-600"
                      style={{ color: 'rgb(var(--text-primary))' }}
                      placeholder="sudo hire-vinod"
                      autoFocus
                    />
                  </div>
                  <div className="p-8 flex flex-col items-center gap-4 text-center">
                    <motion.div
                      className="text-5xl"
                      animate={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      🎉
                    </motion.div>
                    <div>
                      <p className="font-mono text-emerald-400 text-sm font-semibold mb-1">
                        Permission granted.
                      </p>
                      <p className="text-base font-semibold" style={{ color: 'rgb(var(--text-primary))' }}>
                        Great choice. Vinod is available.
                      </p>
                      <p className="text-sm mt-1" style={{ color: 'rgb(var(--text-muted))' }}>
                        4+ years · Java · Spring Boot · Cloud-Native
                      </p>
                    </div>
                    <div className="flex gap-2.5 mt-1">
                      <a
                        href={`mailto:${personalInfo.email}`}
                        onClick={close}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
                      >
                        <FiMail className="w-3.5 h-3.5" /> Reach Out
                      </a>
                      <button
                        onClick={() => { close(); setTimeout(() => window.dispatchEvent(new CustomEvent('open-resume')), 150) }}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border text-xs font-semibold transition-colors"
                        style={{ borderColor: 'rgb(var(--color-line))', color: 'rgb(var(--text-secondary))' }}
                      >
                        <FiFileText className="w-3.5 h-3.5" /> View Resume
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <Command
                  className="rounded-2xl overflow-hidden shadow-2xl border"
                  style={{
                    background:  'rgb(var(--color-card))',
                    borderColor: 'rgb(var(--color-line))',
                  }}
                  loop
                >
                  {/* Input */}
                  <div
                    className="flex items-center gap-3 px-4 py-3.5 border-b"
                    style={{ borderColor: 'rgb(var(--color-line))' }}
                  >
                    <FiTerminal className="w-4 h-4 shrink-0" style={{ color: 'rgb(var(--text-muted))' }} />
                    <Command.Input
                      ref={inputRef}
                      value={query}
                      onValueChange={setQuery}
                      placeholder="Search commands…"
                      className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-500"
                      style={{ color: 'rgb(var(--text-primary))' }}
                      autoFocus
                    />
                    {hasQuery && (
                      <button
                        onClick={() => setQuery('')}
                        className="text-xs px-1.5 py-0.5 rounded border transition-colors"
                        style={{ borderColor: 'rgb(var(--color-line))', color: 'rgb(var(--text-muted))' }}
                      >
                        esc
                      </button>
                    )}
                  </div>

                  {/* Suggested chips — only when query is empty */}
                  {!hasQuery && (
                    <div
                      className="px-4 pt-3 pb-1 flex flex-wrap gap-1.5 border-b"
                      style={{ borderColor: 'rgb(var(--color-line))' }}
                    >
                      <span className="text-[10px] font-mono w-full mb-0.5" style={{ color: 'rgb(var(--text-muted))' }}>
                        SUGGESTED
                      </span>
                      {SUGGESTED.map(label => {
                        const cmd = groups.flatMap(g => g.items).find(c => c.label === label)
                        if (!cmd) return null
                        return (
                          <button
                            key={label}
                            onClick={cmd.action}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs border transition-all hover:-translate-y-px"
                            style={{
                              borderColor: 'rgb(var(--color-line))',
                              color:       'rgb(var(--text-secondary))',
                              background:  'rgb(var(--color-surface))',
                            }}
                          >
                            <span className="w-3 h-3">{cmd.icon}</span>
                            {label}
                          </button>
                        )
                      })}
                    </div>
                  )}

                  {/* Results */}
                  <Command.List
                    className="overflow-y-auto"
                    style={{ maxHeight: '340px' }}
                  >
                    <Command.Empty className="py-10 text-center text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
                      No results for &ldquo;{query}&rdquo;
                    </Command.Empty>

                    {groups.map(group => (
                      <Command.Group
                        key={group.heading}
                        heading={group.heading}
                        className="[&_[cmdk-group-heading]]:px-4 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:uppercase"
                        style={
                          {
                            '--heading-color': 'rgb(var(--text-muted))',
                          } as React.CSSProperties
                        }
                      >
                        {group.items.map(item => (
                          <Command.Item
                            key={item.id}
                            value={`${item.label} ${item.keywords ?? ''}`}
                            onSelect={item.action}
                            className="flex items-center gap-3 px-4 py-2.5 mx-1 rounded-lg cursor-pointer transition-colors outline-none data-[selected=true]:bg-indigo-500/10"
                          >
                            <span
                              className="w-7 h-7 flex items-center justify-center rounded-md border shrink-0 text-sm"
                              style={{
                                borderColor: 'rgb(var(--color-line))',
                                color:       'rgb(var(--text-secondary))',
                                background:  'rgb(var(--color-surface))',
                              }}
                            >
                              {item.icon}
                            </span>
                            <span className="flex-1 min-w-0">
                              <span className="text-sm font-medium block truncate" style={{ color: 'rgb(var(--text-primary))' }}>
                                {item.label}
                              </span>
                              {item.description && (
                                <span className="text-xs truncate block" style={{ color: 'rgb(var(--text-muted))' }}>
                                  {item.description}
                                </span>
                              )}
                            </span>
                            {copied === item.id ? (
                              <span className="text-xs text-emerald-400 flex items-center gap-1 shrink-0">
                                <FiCheckCircle className="w-3 h-3" /> Copied
                              </span>
                            ) : (
                              <FiArrowRight
                                className="w-3.5 h-3.5 opacity-0 group-data-[selected=true]:opacity-100 shrink-0"
                                style={{ color: 'rgb(var(--text-muted))' }}
                              />
                            )}
                          </Command.Item>
                        ))}
                      </Command.Group>
                    ))}
                  </Command.List>

                  {/* Footer */}
                  <div
                    className="flex items-center justify-between px-4 py-2.5 border-t"
                    style={{
                      borderColor: 'rgb(var(--color-line))',
                      background:  'rgb(var(--color-surface))',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {[
                        ['↑↓', 'navigate'],
                        ['↵',  'select'],
                        ['esc', 'close'],
                      ].map(([key, label]) => (
                        <span key={key} className="flex items-center gap-1 text-[10px]" style={{ color: 'rgb(var(--text-muted))' }}>
                          <kbd
                            className="px-1 py-0.5 rounded text-[10px] border font-mono"
                            style={{
                              borderColor: 'rgb(var(--color-line))',
                              background:  'rgb(var(--color-card))',
                              color:       'rgb(var(--text-secondary))',
                            }}
                          >
                            {key}
                          </kbd>
                          {label}
                        </span>
                      ))}
                    </div>
                    <span className="text-[10px] font-mono flex items-center gap-1" style={{ color: 'rgb(var(--text-muted))' }}>
                      <FiTerminal className="w-3 h-3" /> try <code className="text-indigo-400">sudo hire-vinod</code>
                    </span>
                  </div>
                </Command>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
