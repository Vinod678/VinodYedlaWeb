'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { HiSun, HiMoon } from 'react-icons/hi'
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'
import { FiDownload } from 'react-icons/fi'
import { personalInfo } from '@/lib/data'

const LINKS = [
  { label: 'About',      id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects',   id: 'projects' },
  { label: 'Skills',     id: 'skills' },
  { label: 'Contact',    id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [open, setOpen]           = useState(false)
  const [active, setActive]       = useState('')
  const { theme, setTheme }       = useTheme()
  const [mounted, setMounted]     = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const found = LINKS.find(({ id }) => {
        const el = document.getElementById(id)
        if (!el) return false
        const r = el.getBoundingClientRect()
        return r.top <= 120 && r.bottom >= 120
      })
      setActive(found?.id ?? '')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goto = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg/90 backdrop-blur-md border-b border-line'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-base font-bold text-white tracking-tight hover:text-indigo-400 transition-colors"
          >
            vinod<span className="text-indigo-400">.</span>
          </button>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-6">
            {LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => goto(id)}
                className={`text-sm transition-colors ${
                  active === id
                    ? 'text-indigo-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <HiSun className="w-4 h-4" /> : <HiMoon className="w-4 h-4" />}
              </button>
            )}

            <a
              href={personalInfo.resumeUrl}
              download
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 transition-all"
            >
              <FiDownload className="w-3.5 h-3.5" />
              Resume
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            >
              {open ? <RiCloseLine className="w-5 h-5" /> : <RiMenuLine className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-bg/95 backdrop-blur-xl" onClick={() => setOpen(false)} />
            <motion.nav
              className="absolute right-0 top-0 h-full w-64 bg-surface border-l border-line p-6 pt-20 flex flex-col gap-1"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            >
              {LINKS.map(({ label, id }, i) => (
                <motion.button
                  key={id}
                  onClick={() => goto(id)}
                  className="text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg text-sm transition-all"
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {label}
                </motion.button>
              ))}
              <motion.a
                href={personalInfo.resumeUrl}
                download
                className="mt-4 flex items-center gap-2 px-4 py-2.5 text-indigo-400 border border-indigo-500/40 rounded-lg text-sm"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.28 }}
              >
                <FiDownload className="w-4 h-4" /> Download Resume
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
