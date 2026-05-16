'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiDownload, FiExternalLink, FiFileText } from 'react-icons/fi'
import { personalInfo } from '@/lib/data'

const ease = [0.21, 0.47, 0.32, 0.98] as const

export function openResumeModal() {
  window.dispatchEvent(new CustomEvent('open-resume'))
}

export default function ResumeModal() {
  const [open,   setOpen]   = useState(false)
  const [loaded, setLoaded] = useState(false)

  const close = useCallback(() => setOpen(false), [])

  /* Listen for trigger from any component */
  useEffect(() => {
    const handler = () => { setOpen(true); setLoaded(false) }
    window.addEventListener('open-resume', handler)
    return () => window.removeEventListener('open-resume', handler)
  }, [])

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  /* Escape key */
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, close])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            className="fixed inset-0 z-[100] bg-black/72 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={close}
          />

          {/* ── Modal ── */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-3 sm:p-6 pointer-events-none">
            <motion.div
              className="relative w-full max-w-5xl flex flex-col rounded-2xl overflow-hidden shadow-2xl pointer-events-auto"
              style={{
                height: 'min(90vh, 880px)',
                background: 'rgb(var(--color-card))',
                border: '1px solid rgb(var(--color-line))',
              }}
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1,    y: 0  }}
              exit={{    opacity: 0, scale: 0.96,  y: 12 }}
              transition={{ duration: 0.28, ease }}
            >

              {/* ── Top bar ── */}
              <div
                className="flex items-center justify-between px-4 sm:px-5 py-3.5 shrink-0 border-b"
                style={{
                  background:   'rgb(var(--color-surface))',
                  borderColor:  'rgb(var(--color-line))',
                }}
              >
                {/* Identity */}
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center shrink-0">
                    <FiFileText className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold truncate" style={{ color: 'rgb(var(--text-primary))' }}>
                      Vinod Yedla — Resume
                    </p>
                    <p className="text-[10px] font-mono mt-0.5 hidden sm:block" style={{ color: 'rgb(var(--text-muted))' }}>
                      Java Developer · 4+ Years Experience
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0 ml-3">
                  <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-line text-slate-400 hover:border-indigo-500/40 hover:text-white transition-all"
                    title="Open PDF in new browser tab"
                  >
                    <FiExternalLink className="w-3.5 h-3.5" />
                    Open in Tab
                  </a>
                  <a
                    href={personalInfo.resumeUrl}
                    download
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all hover:shadow-[0_0_14px_rgba(99,102,241,0.4)]"
                  >
                    <FiDownload className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                  <button
                    onClick={close}
                    aria-label="Close resume viewer"
                    className="w-8 h-8 rounded-lg border border-line flex items-center justify-center text-slate-500 hover:text-white hover:border-indigo-500/40 transition-all"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* ── PDF viewer ── */}
              <div
                className="flex-1 relative overflow-hidden"
                style={{ background: 'rgb(var(--color-bg))' }}
              >
                {/* Spinner while PDF loads */}
                <AnimatePresence>
                  {!loaded && (
                    <motion.div
                      className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="w-7 h-7 rounded-full border-2 border-indigo-500/25 border-t-indigo-400"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
                      />
                      <p className="text-xs font-mono" style={{ color: 'rgb(var(--text-muted))' }}>
                        Loading resume…
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <iframe
                  src={`${personalInfo.resumeUrl}#toolbar=0&navpanes=0`}
                  className="w-full h-full border-0"
                  title="Vinod Yedla Resume"
                  onLoad={() => setLoaded(true)}
                />
              </div>

              {/* ── Mobile bottom bar ── */}
              <div
                className="sm:hidden flex items-center justify-between px-4 py-3 border-t shrink-0"
                style={{
                  background:  'rgb(var(--color-surface))',
                  borderColor: 'rgb(var(--color-line))',
                }}
              >
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  <FiExternalLink className="w-4 h-4" /> Open in Tab
                </a>
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold"
                >
                  <FiDownload className="w-4 h-4" /> Download
                </a>
              </div>

            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
