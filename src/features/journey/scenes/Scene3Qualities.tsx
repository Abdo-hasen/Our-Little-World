import { useId, useState, type HTMLAttributes } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { scene3Content, type Scene3Quality } from '../../../data/scene3'
import { QualityIcon } from './QualityIcon'
import './Scene3Qualities.css'

interface Scene3QualitiesProps {
  onBack: () => void
  /** Forward nav — omit until Scene 4 is ready. */
  onNext?: () => void
}

const easeCinematic = [0.22, 1, 0.36, 1] as const

function FlipCard({
  quality,
  index,
  isFlipped,
  onToggle,
  reduceMotion,
}: {
  quality: Scene3Quality
  index: number
  isFlipped: boolean
  onToggle: () => void
  reduceMotion: boolean | null
}) {
  return (
    <motion.li
      className={`scene3__item${isFlipped ? ' scene3__item--expanded' : ''}`}
      initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: reduceMotion ? 0 : Math.min(0.08 + index * 0.06, 0.26),
        duration: 0.5,
        ease: easeCinematic,
      }}
    >
      <motion.button
        type="button"
        className={`scene3__card${isFlipped ? ' scene3__card--flipped' : ''}`}
        aria-pressed={isFlipped}
        onClick={onToggle}
        whileTap={reduceMotion ? undefined : { scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 420, damping: 28 }}
      >
        <span className="scene3__card-edge" aria-hidden="true" />

        {reduceMotion ? (
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isFlipped ? 'back' : 'front'}
              className="scene3__face scene3__face--flat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <CardFace quality={quality} side={isFlipped ? 'back' : 'front'} />
            </motion.span>
          </AnimatePresence>
        ) : (
          <motion.span
            className="scene3__flipper"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.55, ease: easeCinematic }}
          >
            <span
              className="scene3__face scene3__face--front"
              aria-hidden={isFlipped}
              {...(isFlipped ? ({ inert: true } as HTMLAttributes<HTMLSpanElement>) : {})}
            >
              <CardFace quality={quality} side="front" />
            </span>
            <span
              className="scene3__face scene3__face--back"
              aria-hidden={!isFlipped}
              {...(!isFlipped ? ({ inert: true } as HTMLAttributes<HTMLSpanElement>) : {})}
            >
              <CardFace quality={quality} side="back" />
            </span>
          </motion.span>
        )}
      </motion.button>
    </motion.li>
  )
}

function CardFace({
  quality,
  side,
}: {
  quality: Scene3Quality
  side: 'front' | 'back'
}) {
  return (
    <>
      <span className="scene3__watermark" aria-hidden="true">
        <QualityIcon
          id={quality.icon}
          className="scene3__watermark-icon"
          size={96}
        />
      </span>

      <span className="scene3__chip">{quality.categoryLabel}</span>

      {side === 'front' ? (
        <>
          <span className="scene3__icon-plate" aria-hidden="true">
            <QualityIcon id={quality.icon} className="scene3__icon" size={26} />
          </span>
          <span className="scene3__card-title">{quality.title}</span>
          <span className="scene3__hint">{scene3Content.flipHint}</span>
        </>
      ) : (
        <>
          <span className="scene3__card-title scene3__card-title--back">
            {quality.title}
          </span>
          <span className="scene3__detail">{quality.detail}</span>
          <span className="scene3__hint">{scene3Content.flipBackHint}</span>
        </>
      )}
    </>
  )
}

export function Scene3Qualities({ onBack, onNext }: Scene3QualitiesProps) {
  const [flippedId, setFlippedId] = useState<string | null>(null)
  const reduceMotion = useReducedMotion()
  const headingId = useId()

  const toggle = (id: string) => {
    setFlippedId((prev) => (prev === id ? null : id))
  }

  return (
    <motion.section
      className="scene3"
      aria-labelledby={headingId}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? undefined : { opacity: 0, y: -10, filter: 'blur(4px)' }}
      transition={{ duration: 0.55, ease: easeCinematic }}
    >
      <div className="scene3__wash" aria-hidden="true" />

      <div className="scene3__container">
        <header className="scene3__header">
          <motion.p
            className="scene3__badge"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.05, duration: 0.45, ease: easeCinematic }}
          >
            المشهد الثالث
          </motion.p>
          <motion.h1
            id={headingId}
            className="scene3__title"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.1, duration: 0.5, ease: easeCinematic }}
          >
            {scene3Content.sceneTitle}
          </motion.h1>
          <motion.p
            className="scene3__intro"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.16, duration: 0.5, ease: easeCinematic }}
          >
            {scene3Content.intro}
          </motion.p>
          <div className="scene3__divider" aria-hidden="true">
            <span className="scene3__divider-line" />
            <span className="scene3__divider-dot" />
            <span className="scene3__divider-line" />
          </div>
        </header>

        <ul className="scene3__grid">
          {scene3Content.qualities.map((quality, index) => (
            <FlipCard
              key={quality.id}
              quality={quality}
              index={index}
              isFlipped={flippedId === quality.id}
              onToggle={() => toggle(quality.id)}
              reduceMotion={reduceMotion}
            />
          ))}
        </ul>

        <motion.p
          className="scene3__closing"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          animate={reduceMotion ? { opacity: 1 } : undefined}
          transition={{ duration: 0.5, ease: easeCinematic }}
        >
          {scene3Content.closing}
        </motion.p>

        <nav className="scene3__nav" aria-label="تنقل الرحلة">
          <motion.button
            type="button"
            className="scene3__btn scene3__btn--ghost"
            onClick={onBack}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
          >
            {scene3Content.backLabel}
          </motion.button>
          {onNext ? (
            <motion.button
              type="button"
              className="scene3__btn"
              onClick={onNext}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            >
              {scene3Content.nextLabel}
            </motion.button>
          ) : null}
        </nav>
      </div>
    </motion.section>
  )
}
