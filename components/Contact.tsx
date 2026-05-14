'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'
import { personalInfo, emailjsConfig } from '@/lib/data'

type Status = 'idle' | 'sending' | 'sent' | 'error'
const VP = { once: true, margin: '-60px' } as const

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm]   = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const ejs = (await import('@emailjs/browser')).default
      ejs.init(emailjsConfig.publicKey)
      await ejs.send(emailjsConfig.serviceId, emailjsConfig.templateId, {
        from_name: form.name, from_email: form.email,
        message: form.message, to_name: 'Vinod',
      })
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="section-pad bg-bg border-t border-line">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">06 / Contact</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="rule" />
          <p className="text-slate-400 text-sm max-w-md mb-12">
            Open to full-time opportunities, interesting projects, and collaborations.
            If something sounds like a good fit — let&apos;s talk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl">

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Contact rows */}
            <div className="space-y-4">
              {[
                { icon: FiMail,    label: 'Email',    val: personalInfo.email,    href: `mailto:${personalInfo.email}` },
                { icon: FiMapPin,  label: 'Location', val: personalInfo.location, href: '#' },
              ].map(({ icon: Icon, label, val, href }) => (
                <a key={label} href={href} className="flex items-center gap-4 group">
                  <span className="w-9 h-9 rounded-lg bg-surface border border-line flex items-center justify-center text-slate-400 group-hover:border-indigo-500/50 group-hover:text-indigo-400 transition-all">
                    <Icon className="w-4 h-4" />
                  </span>
                  <span>
                    <span className="block text-[11px] text-slate-500">{label}</span>
                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{val}</span>
                  </span>
                </a>
              ))}
            </div>

            {/* Social */}
            <div>
              <p className="text-xs font-mono text-slate-500 tracking-widest uppercase mb-4">Find me on</p>
              <div className="flex gap-3">
                {[
                  { icon: FiGithub,   href: personalInfo.github,   label: 'GitHub'   },
                  { icon: FiLinkedin, href: personalInfo.linkedin,  label: 'LinkedIn' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-lg border border-line text-slate-400 hover:border-indigo-500/50 hover:text-indigo-400 flex items-center justify-center transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            ref={formRef}
            onSubmit={submit}
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {['name', 'email'].map((field) => (
              <div key={field}>
                <label className="block text-slate-500 text-xs mb-1.5 capitalize">{field}</label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  required
                  placeholder={field === 'name' ? 'John Doe' : 'john@example.com'}
                  value={form[field as 'name' | 'email']}
                  onChange={e => setForm({ ...form, [field]: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-surface border border-line text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/60 transition-colors"
                />
              </div>
            ))}

            <div>
              <label className="block text-slate-500 text-xs mb-1.5">Message</label>
              <textarea
                required rows={5}
                placeholder="Hi Vinod, I'd love to chat about..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-surface border border-line text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/60 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className={`w-full py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-60 ${
                status === 'sent'  ? 'bg-emerald-600 text-white' :
                status === 'error' ? 'bg-red-600 text-white' :
                'bg-indigo-600 hover:bg-indigo-500 text-white'
              }`}
            >
              {status === 'sending' && (
                <motion.span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                  animate={{ rotate: 360 }} transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }} />
              )}
              {status === 'sent'    && <FiCheck className="w-4 h-4" />}
              {status === 'error'   && <FiAlertCircle className="w-4 h-4" />}
              {status === 'idle'    && <FiSend className="w-4 h-4" />}
              {{ idle: 'Send Message', sending: 'Sending…', sent: 'Sent!', error: 'Failed — try again' }[status]}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
