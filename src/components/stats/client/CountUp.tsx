"use client"

import { useEffect, useState } from 'react'
import { animate, useSpring } from 'framer-motion'

interface CountUpProps {
  end: number
  decimals?: number
  duration?: number
  isInView: boolean
}

export function CountUp({ end, decimals = 0, duration = 2, isInView }: CountUpProps) {
  const [value, setValue] = useState(0)
  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
    mass: 1
  })

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, end, {
        duration,
        onUpdate: (latest) => {
          springValue.set(latest)
          setValue(latest)
        },
        ease: [0.34, 1.56, 0.64, 1], // Custom spring-like easing
      })

      return () => controls.stop()
    }
  }, [end, duration, isInView, springValue])

  return value.toFixed(decimals)
}