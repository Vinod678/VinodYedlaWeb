'use client'

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { personalInfo } from '@/lib/data'

export default function Footer() {
  const goto = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-surface border-t border-line">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-sm font-bold text-white hover:text-indigo-400 transition-colors"
          >
            vinod<span className="text-indigo-400">.</span>
          </button>

          {/* Nav */}
          <div className="flex gap-5">
            {['about', 'experience', 'projects', 'skills', 'contact'].map(id => (
              <button
                key={id}
                onClick={() => goto(id)}
                className="text-slate-500 hover:text-slate-300 text-xs capitalize transition-colors"
              >
                {id}
              </button>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-3">
            {[
              { icon: FiGithub,   href: personalInfo.github,                    label: 'GitHub'   },
              { icon: FiLinkedin, href: personalInfo.linkedin,                   label: 'LinkedIn' },
              { icon: FiMail,     href: `mailto:${personalInfo.email}`,          label: 'Email'    },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-slate-500 hover:text-indigo-400 transition-colors"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-line text-center text-slate-600 text-xs">
          © {new Date().getFullYear()} Vinod Yedla. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
