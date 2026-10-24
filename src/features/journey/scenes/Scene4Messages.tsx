import { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  scene4Content,
  threadsForCategory,
  type Scene4Bubble,
  type Scene4Thread,
} from '../../../data/scene4'
import { MessageIcon } from './MessageIcon'
import './Scene4Messages.css'

interface Scene4MessagesProps {
  onBack: () => void
  onNext?: () => void
}

const easeCinematic = [0.22, 1, 0.36, 1] as const

function TypingDots() {
  return (
    <span className="scene4__typing" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  )
}

function BubbleReplay({
  bubbles,
  reduceMotion,
}: {
  bubbles: Scene4Bubble[]
  reduceMotion: boolean | null
}) {
  const [visibleCount, setVisibleCount] = useState(reduceMotion ? bubbles.length : 0)
  const [showTyping, setShowTyping] = useState(!reduceMotion && bubbles.length > 0)

  useEffect(() => {
    if (reduceMotion) {
      setVisibleCount(bubbles.length)
      setShowTyping(false)
      return
    }

    setVisibleCount(0)
    setShowTyping(bubbles.length > 0)
    let cancelled = false
    let step = 0
    const timeouts: number[] = []

    const run = () => {
      if (cancelled || step >= bubbles.length) {
        setShowTyping(false)
        return
      }
      setShowTyping(true)
      timeouts.push(
        window.setTimeout(() => {
          if (cancelled) return
          setShowTyping(false)
          step += 1
          setVisibleCount(step)
          if (step < bubbles.length) {
            timeouts.push(window.setTimeout(run, 280))
          }
        }, 420),
      )
    }

    timeouts.push(window.setTimeout(run, 180))
    return () => {
      cancelled = true
      timeouts.forEach((id) => window.clearTimeout(id))
    }
  }, [bubbles, reduceMotion])

  return (
    <div className="scene4__replay">
      {bubbles.slice(0, visibleCount).map((bubble, index) => (
        <motion.article
          key={bubble.id}
          className="scene4__bubble"
          initial={reduceMotion ? false : { opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: easeCinematic }}
        >
          <header className="scene4__bubble-meta">
            <span className="scene4__bubble-sender">{scene4Content.senderLabel}</span>
            <span className="scene4__bubble-stamp">{bubble.stamp}</span>
          </header>
          <p className="scene4__bubble-text">{bubble.text}</p>
          {index === 0 ? (
            <span className="scene4__bubble-seal" aria-hidden="true" />
          ) : null}
        </motion.article>
      ))}
      {showTyping ? <TypingDots /> : null}
    </div>
  )
}

function ThreadCard({
  thread,
  index,
  isOpen,
  onToggle,
  reduceMotion,
}: {
  thread: Scene4Thread
  index: number
  isOpen: boolean
  onToggle: () => void
  reduceMotion: boolean | null
}) {
  const panelId = useId()
  const itemRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    if (!isOpen || !itemRef.current) return
    itemRef.current.scrollIntoView({
      block: 'nearest',
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }, [isOpen, reduceMotion])

  return (
    <motion.li
      ref={itemRef}
      className={`scene4__item${isOpen ? ' scene4__item--open' : ''}`}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      animate={reduceMotion ? { opacity: 1 } : undefined}
      transition={{
        delay: reduceMotion ? 0 : Math.min(0.06 + index * 0.05, 0.18),
        duration: 0.5,
        ease: easeCinematic,
      }}
    >
      <motion.button
        type="button"
        className="scene4__teaser"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        whileHover={reduceMotion ? undefined : { y: -2 }}
        whileTap={reduceMotion ? undefined : { scale: 0.985 }}
        transition={{ type: 'spring', stiffness: 420, damping: 28 }}
      >
        <span className="scene4__teaser-edge" aria-hidden="true" />
        <span className="scene4__watermark" aria-hidden="true">
          <MessageIcon id={thread.icon} className="scene4__watermark-icon" size={72} />
        </span>
        <span className="scene4__teaser-top">
          <span className="scene4__date">{thread.dateLabel}</span>
          <span className="scene4__chip-mini" aria-hidden="true">
            <MessageIcon id={thread.icon} size={14} />
          </span>
        </span>
        <span className="scene4__teaser-text">{thread.teaser}</span>
        <span className="scene4__teaser-cta">
          {isOpen ? scene4Content.closeHint : scene4Content.openHint}
        </span>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={panelId}
            className="scene4__panel"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 6 }}
            transition={{ duration: 0.4, ease: easeCinematic }}
          >
            <BubbleReplay bubbles={thread.bubbles} reduceMotion={reduceMotion} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.li>
  )
}

export function Scene4Messages({ onBack, onNext }: Scene4MessagesProps) {
  const [openId, setOpenId] = useState<string | null>(null)
  const [announce, setAnnounce] = useState('')
  const reduceMotion = useReducedMotion()
  const headingId = useId()

  const toggle = (id: string) => {
    setOpenId((prev) => {
      const next = prev === id ? null : id
      setAnnounce(
        next === null ? scene4Content.closedAnnounce : scene4Content.openedAnnounce,
      )
      return next
    })
  }

  return (
    <motion.section
      className="scene4"
      aria-labelledby={headingId}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? undefined : { opacity: 0, y: -10, filter: 'blur(4px)' }}
      transition={{ duration: 0.55, ease: easeCinematic }}
    >
      <div className="scene4__wash" aria-hidden="true" />
      <p className="scene4__sr-announce" aria-live="polite">
        {announce}
      </p>

      <div className="scene4__container">
        <header className="scene4__header">
          <motion.p
            className="scene4__badge"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.05, duration: 0.45, ease: easeCinematic }}
          >
            {scene4Content.sceneBadge}
          </motion.p>
          <motion.h1
            id={headingId}
            className="scene4__title"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.1, duration: 0.5, ease: easeCinematic }}
          >
            {scene4Content.sceneTitle}
          </motion.h1>
          <motion.p
            className="scene4__intro"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.16, duration: 0.5, ease: easeCinematic }}
          >
            {scene4Content.intro}
          </motion.p>
          <div className="scene4__divider" aria-hidden="true">
            <span className="scene4__divider-line" />
            <span className="scene4__divider-dot" />
            <span className="scene4__divider-line" />
          </div>
        </header>

        <div className="scene4__sections">
          {scene4Content.categories.map((category, catIndex) => {
            const threads = threadsForCategory(category.id)
            if (threads.length === 0) return null

            return (
              <section
                key={category.id}
                className="scene4__section"
                aria-labelledby={`scene4-cat-${category.id}`}
              >
                <motion.div
                  className="scene4__section-head"
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  animate={reduceMotion ? { opacity: 1 } : undefined}
                  transition={{
                    delay: reduceMotion ? 0 : Math.min(0.04 + catIndex * 0.03, 0.12),
                    duration: 0.45,
                    ease: easeCinematic,
                  }}
                >
                  <span className="scene4__category-chip" id={`scene4-cat-${category.id}`}>
                    <MessageIcon
                      id={category.icon}
                      size={15}
                      className="scene4__category-icon"
                    />
                    {category.label}
                  </span>
                </motion.div>

                <ul className="scene4__list">
                  {threads.map((thread, index) => (
                    <ThreadCard
                      key={thread.id}
                      thread={thread}
                      index={index}
                      isOpen={openId === thread.id}
                      onToggle={() => toggle(thread.id)}
                      reduceMotion={reduceMotion}
                    />
                  ))}
                </ul>
              </section>
            )
          })}
        </div>

        <nav className="scene4__nav" aria-label="تنقل الرحلة">
          <motion.button
            type="button"
            className="scene4__btn scene4__btn--ghost"
            onClick={onBack}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
          >
            {scene4Content.backLabel}
          </motion.button>
          {onNext ? (
            <motion.button
              type="button"
              className="scene4__btn"
              onClick={onNext}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            >
              {scene4Content.nextLabel}
            </motion.button>
          ) : null}
        </nav>
      </div>
    </motion.section>
  )
}
