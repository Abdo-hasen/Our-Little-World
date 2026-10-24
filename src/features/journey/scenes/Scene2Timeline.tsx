import { useId, useRef, useState } from 'react'
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { scene2Content, type Scene2Milestone } from '../../../data/scene2'
import { MilestoneIcon } from './MilestoneIcon'
import './Scene2Timeline.css'

interface Scene2TimelineProps {
  onBack: () => void
  onNext?: () => void
}

function MilestoneItem({
  milestone,
  index,
  isOpen,
  onToggle,
  reduceMotion,
}: {
  milestone: Scene2Milestone
  index: number
  isOpen: boolean
  onToggle: () => void
  reduceMotion: boolean | null
}) {
  const itemRef = useRef<HTMLLIElement>(null)
  const inView = useInView(itemRef, {
    amount: 0.4,
    margin: '0px 0px -12% 0px',
  })
  const detailId = `milestone-detail-${milestone.id}`
  const ceremonial = Boolean(milestone.ceremonial)

  const gapClass = milestone.gapAfter ? ' scene2__item--gap' : ''
  const openClass = isOpen ? ' scene2__item--open' : ''
  const activeClass = inView ? ' scene2__item--active' : ''
  const ceremonialClass = ceremonial ? ' scene2__item--ceremonial' : ''

  return (
    <motion.li
      ref={itemRef}
      className={`scene2__item${openClass}${activeClass}${ceremonialClass}${gapClass}`}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25, margin: '0px 0px -8% 0px' }}
      transition={{
        delay: reduceMotion ? 0 : Math.min(index * 0.05, 0.18),
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="scene2__marker" aria-hidden="true">
        <motion.span
          className="scene2__icon-plate"
          animate={
            reduceMotion
              ? undefined
              : inView
                ? {
                    scale: [1, 1.08, 1],
                    boxShadow: [
                      '0 8px 20px rgba(90, 50, 95, 0.12)',
                      ceremonial
                        ? '0 0 0 6px rgba(201, 164, 108, 0.28), 0 10px 24px rgba(201, 164, 108, 0.22)'
                        : '0 0 0 6px rgba(167, 107, 158, 0.22), 0 10px 24px rgba(139, 90, 140, 0.2)',
                      '0 8px 20px rgba(90, 50, 95, 0.12)',
                    ],
                  }
                : { scale: 1 }
          }
          transition={
            inView && !reduceMotion
              ? { duration: 1.4, ease: [0.22, 1, 0.36, 1] }
              : { duration: 0.35 }
          }
        >
          <MilestoneIcon id={milestone.icon} className="scene2__icon" />
        </motion.span>
      </div>

      <motion.article
        className="scene2__card"
        whileTap={reduceMotion ? undefined : { scale: 0.985 }}
        transition={{ type: 'spring', stiffness: 420, damping: 28 }}
      >
        <span className="scene2__watermark" aria-hidden="true">
          <MilestoneIcon
            id={milestone.icon}
            className="scene2__watermark-icon"
            size={108}
          />
        </span>

        <div className="scene2__card-top">
          <span className="scene2__chip">{milestone.categoryLabel}</span>
          <p className="scene2__date">{milestone.dateLabel}</p>
        </div>

        <h2 className="scene2__item-title">{milestone.title}</h2>
        <p className="scene2__summary">{milestone.summary}</p>

        <div
          id={detailId}
          className={`scene2__detail-slot${isOpen ? ' scene2__detail-slot--open' : ''}`}
          hidden={!isOpen}
        >
          <div className="scene2__detail-inner">
            <p className="scene2__detail" aria-hidden={!isOpen}>
              {milestone.detail}
            </p>
          </div>
        </div>

        <button
          type="button"
          className="scene2__expand"
          aria-expanded={isOpen}
          aria-controls={detailId}
          onClick={onToggle}
        >
          <span>
            {isOpen ? scene2Content.collapseLabel : scene2Content.expandLabel}
          </span>
          <motion.span
            className="scene2__expand-arrow"
            aria-hidden="true"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.28, ease: [0.22, 1, 0.36, 1] }
            }
          >
            ⌄
          </motion.span>
        </button>
      </motion.article>
    </motion.li>
  )
}

export function Scene2Timeline({ onBack, onNext }: Scene2TimelineProps) {
  const [openId, setOpenId] = useState<string | null>(null)
  const reduceMotion = useReducedMotion()
  const headingId = useId()
  const railRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ['start 0.75', 'end 0.35'],
  })
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 28,
    restDelta: 0.001,
  })
  const progressScale = useTransform(
    reduceMotion ? scrollYProgress : smoothProgress,
    [0, 1],
    [0, 1],
  )

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <motion.section
      className="scene2"
      aria-labelledby={headingId}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="scene2__wash" aria-hidden="true" />

      <div className="scene2__container">
        <header className="scene2__header">
          <p className="scene2__badge">المشهد الثاني</p>
          <h1 id={headingId} className="scene2__title">
            {scene2Content.sceneTitle}
          </h1>
          <p className="scene2__headline">{scene2Content.headline}</p>
          <p className="scene2__subhead">{scene2Content.subhead}</p>
          <div className="scene2__divider" aria-hidden="true">
            <span className="scene2__divider-line" />
            <span className="scene2__divider-dot" />
            <span className="scene2__divider-line" />
          </div>
        </header>

        <div className="scene2__rail-wrap" ref={railRef}>
          <div className="scene2__rail-track" aria-hidden="true">
            <motion.div
              className="scene2__rail-progress"
              style={{ scaleY: reduceMotion ? 1 : progressScale }}
            />
          </div>

          <ol className="scene2__rail">
            {scene2Content.milestones.map((milestone, index) => (
              <MilestoneItem
                key={milestone.id}
                milestone={milestone}
                index={index}
                isOpen={openId === milestone.id}
                onToggle={() => toggle(milestone.id)}
                reduceMotion={reduceMotion}
              />
            ))}
          </ol>
        </div>

        <nav className="scene2__nav" aria-label="تنقل الرحلة">
          <button type="button" className="scene2__btn scene2__btn--ghost" onClick={onBack}>
            {scene2Content.backLabel}
          </button>
          {onNext ? (
            <button type="button" className="scene2__btn" onClick={onNext}>
              {scene2Content.nextLabel}
            </button>
          ) : null}
        </nav>
      </div>
    </motion.section>
  )
}
