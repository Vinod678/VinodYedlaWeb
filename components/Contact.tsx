'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiMail, FiMapPin, FiGithub, FiLinkedin,
  FiSend, FiCheck, FiAlertCircle, FiClock,
} from 'react-icons/fi'
import { personalInfo, emailjsConfig } from '@/lib/data'

type Status = 'idle' | 'sending' | 'sent' | 'error' | 'unconfigured'
const VP = { once: true, margin: '-60px' } as const

const INFO_ITEMS = [
  {
    icon: FiMail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    copyable: true,
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Hyderabad, India',
    href: '#',
    copyable: false,
  },
  {
    icon: FiClock,
    label: 'Availability',
    value: 'Open to opportunities',
    href: '#',
    copyable: false,
  },
]

const SOCIALS = [
  { icon: FiGithub,   href: personalInfo.github,   label: 'GitHub',   sub: 'Vinod678' },
  { icon: FiLinkedin, href: personalInfo.linkedin,  label: 'LinkedIn', sub: 'vinod-yedla' },
]

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [copied, setCopied] = useState(false)

  const isConfigured =
    !!emailjsConfig.publicKey &&
    emailjsConfig.publicKey !== 'YOUR_PUBLIC_KEY_HERE' &&
    !!emailjsConfig.serviceId &&
    emailjsConfig.serviceId !== 'YOUR_SERVICE_ID_HERE' &&
    !!emailjsConfig.templateId &&
    emailjsConfig.templateId !== 'YOUR_TEMPLATE_ID_HERE'

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isConfigured) {
      setStatus('unconfigured')
      setTimeout(() => setStatus('idle'), 5000)
      return
    }

    setStatus('sending')
    try {
      const emailjs = (await import('@emailjs/browser')).default
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message:    form.message,
          to_name:    'Vinod',
          reply_to:   form.email,
        },
        { publicKey: emailjsConfig.publicKey }
      )
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 6000)
    } catch (err) {
      console.error('EmailJS send error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="section-pad bg-surface border-t border-line">
      <div className="container-xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">06 / Contact</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="rule" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-start">

          {/* ── Left: info panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="flex flex-col gap-6"
          >
            {/* Hero card */}
            <div className="relative overflow-hidden rounded-2xl p-7 border border-indigo-500/20"
              style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(6,182,212,0.06) 100%)' }}
            >
              {/* Decorative orb */}
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none" />

              <h3 className="text-xl sm:text-2xl font-bold mb-3"
                style={{ color: 'rgb(var(--text-primary))' }}>
                Let&apos;s Build Something<br />
                <span className="grad">Great Together</span>
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgb(var(--text-secondary))' }}>
                I&apos;m open to full-time roles, consulting engagements, and interesting
                engineering problems. If something sounds like a fit — let&apos;s talk.
              </p>
            </div>

            {/* Contact info rows */}
            <div className="card p-5 space-y-1">
              {INFO_ITEMS.map(({ icon: Icon, label, value, href, copyable }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-indigo-500/5 transition-colors group"
                >
                  <span className="w-9 h-9 shrink-0 rounded-lg bg-indigo-500/10 border border-indigo-500/20
                                   flex items-center justify-center text-indigo-400">
                    <Icon className="w-4 h-4" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-mono tracking-widest uppercase mb-0.5"
                      style={{ color: 'rgb(var(--text-muted))' }}>
                      {label}
                    </p>
                    <a
                      href={href}
                      className="text-sm font-medium truncate block hover:text-indigo-400 transition-colors"
                      style={{ color: 'rgb(var(--text-primary))' }}
                    >
                      {value}
                    </a>
                  </div>
                  {copyable && (
                    <button
                      onClick={copyEmail}
                      className="shrink-0 text-[10px] font-mono px-2 py-1 rounded border border-line
                                 opacity-0 group-hover:opacity-100 transition-opacity hover:border-indigo-500/40
                                 hover:text-indigo-400"
                      style={{ color: 'rgb(var(--text-muted))' }}
                    >
                      {copied ? '✓ Copied' : 'Copy'}
                    </button>
                  )}
                  {label === 'Availability' && (
                    <span className="shrink-0 flex items-center gap-1.5 text-[10px] font-semibold
                                     text-emerald-400 bg-emerald-500/10 border border-emerald-500/25
                                     px-2 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Active
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-[10px] font-mono tracking-widest uppercase mb-3"
                style={{ color: 'rgb(var(--text-muted))' }}>
                Find me on
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                {SOCIALS.map(({ icon: Icon, href, label, sub }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center gap-3 p-3.5 rounded-xl card hover:-translate-y-0.5"
                  >
                    <span className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20
                                     flex items-center justify-center text-indigo-400 shrink-0">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span>
                      <p className="text-sm font-semibold" style={{ color: 'rgb(var(--text-primary))' }}>
                        {label}
                      </p>
                      <p className="text-[11px] font-mono" style={{ color: 'rgb(var(--text-muted))' }}>
                        /{sub}
                      </p>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ duration: 0.5, delay: 0.14 }}
          >
            <div className="card p-6 sm:p-8">
              <h3 className="font-bold text-base mb-1" style={{ color: 'rgb(var(--text-primary))' }}>
                Send a Message
              </h3>
              <p className="text-sm mb-6" style={{ color: 'rgb(var(--text-muted))' }}>
                I typically reply within 24 hours.
              </p>

              <form ref={formRef} onSubmit={submit} className="space-y-4">

                {/* Name & Email side by side on sm+ */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {(['name', 'email'] as const).map((field) => (
                    <div key={field}>
                      <label
                        className="block text-[11px] font-semibold tracking-wide uppercase mb-1.5"
                        style={{ color: 'rgb(var(--text-muted))' }}
                      >
                        {field === 'name' ? 'Your Name' : 'Email Address'}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        required
                        placeholder={field === 'name' ? 'Your Name' : 'yourname@example.com'}
                        value={form[field]}
                        onChange={e => setForm({ ...form, [field]: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border text-sm
                                   placeholder:opacity-40 transition-all
                                   focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/60"
                        style={{
                          background: 'rgb(var(--color-bg))',
                          borderColor: 'rgb(var(--color-line))',
                          color: 'rgb(var(--text-primary))',
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block text-[11px] font-semibold tracking-wide uppercase mb-1.5"
                    style={{ color: 'rgb(var(--text-muted))' }}
                  >
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Hi Vinod, I'd love to chat about..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border text-sm resize-none
                               placeholder:opacity-40 transition-all
                               focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/60"
                    style={{
                      background: 'rgb(var(--color-bg))',
                      borderColor: 'rgb(var(--color-line))',
                      color: 'rgb(var(--text-primary))',
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  className={`w-full py-3 rounded-lg text-sm font-semibold flex items-center
                              justify-center gap-2 transition-all duration-200
                              disabled:opacity-60 disabled:cursor-not-allowed
                              ${status === 'sent'
                                ? 'bg-emerald-600 text-white'
                                : status === 'error' || status === 'unconfigured'
                                  ? 'bg-red-600 text-white'
                                  : 'bg-indigo-600 hover:bg-indigo-500 text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:-translate-y-px'
                              }`}
                >
                  {status === 'sending' && (
                    <motion.span
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
                    />
                  )}
                  {status === 'sent'         && <FiCheck className="w-4 h-4" />}
                  {status === 'error'        && <FiAlertCircle className="w-4 h-4" />}
                  {status === 'unconfigured' && <FiAlertCircle className="w-4 h-4" />}
                  {status === 'idle'         && <FiSend className="w-4 h-4" />}
                  {{
                    idle:          'Send Message',
                    sending:       'Sending…',
                    sent:          'Message Sent!',
                    error:         'Failed — try again',
                    unconfigured:  'Email service not configured',
                  }[status]}
                </button>

                {/* Success note */}
                {status === 'sent' && (
                  <motion.p
                    className="text-center text-xs text-emerald-500"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Thanks! I&apos;ll get back to you soon.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
