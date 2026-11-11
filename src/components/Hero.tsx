import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from './icons'
import './Hero.css'

const EASE = [0.22, 0.68, 0.32, 1] as const

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
})

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  // Reduced motion never plays, so the video must not be left faded out.
  const [ready, setReady] = useState(prefersReducedMotion)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (prefersReducedMotion()) {
      video.pause()
      return
    }

    // Some browsers block autoplay until the element is explicitly nudged.
    const play = video.play()
    if (play?.catch) play.catch(() => {})
  }, [])

  return (
    <section className="hero" id="top">
      <div className="hero__media" aria-hidden="true">
        <video
          ref={videoRef}
          className={`hero__video${ready ? ' is-ready' : ''}`}
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setReady(true)}
        />
        <div className="hero__scrim" />
      </div>

      <div className="hero__frame">
        <div className="hero__copy">
          <motion.h1 className="hero__title" {...rise(0.14)}>
            <span className="hero__line">Bending</span>
            <span className="hero__line">
              to <span className="hero__accent">your brand.</span>
            </span>
          </motion.h1>

          <motion.hr className="hero__rule" {...rise(0.34)} />

          <motion.p className="hero__lede" {...rise(0.44)}>
            Willow is a design system that bends to your brand — tokens, components and motion
            that follow your rules.
          </motion.p>

          <motion.a className="hero__cta" href="#components" {...rise(0.58)}>
            <span className="hero__ring">
              <ArrowRight />
            </span>
            <span className="hero__cta-label">View components</span>
          </motion.a>
        </div>
      </div>

      <motion.div
        className="scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9, ease: EASE }}
      >
        <span className="scroll__label">Scroll</span>
        <span className="scroll__track" aria-hidden="true" />
      </motion.div>
    </section>
  )
}
