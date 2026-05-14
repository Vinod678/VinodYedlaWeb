'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  const dotX = useSpring(x, { damping: 30, stiffness: 800 })
  const dotY = useSpring(y, { damping: 30, stiffness: 800 })

  const ringX = useSpring(x, { damping: 40, stiffness: 200 })
  const ringY = useSpring(y, { damping: 40, stiffness: 200 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-indigo-400 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ x: dotX, y: dotY }}
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-indigo-400/50 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{ x: ringX, y: ringY }}
      />
    </>
  )
}
