import { useId, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { scene2Content } from '../../../data/scene2'
import { MilestoneIcon } from './MilestoneIcon'
import './Scene2Timeline.css'

interface Scene2TimelineProps {
  onBack: () => void
}

export function Scene2Timeline({ onBack }: Scene2TimelineProps) {
  const [openId, setOpenId] = useState<string | null>(null)
  const reduceMotion = useReducedMotion()
  const headingId = useId()

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

        <ol className="scene2__rail">
          {scene2Content.milestones.map((milestone, index) => {
            const isOpen = openId === milestone.id
            const detailId = `milestone-detail-${milestone.id}`
            const gapClass = milestone.gapAfter ? ' scene2__item--gap' : ''

            return (
              <motion.li
                key={milestone.id}
                className={`scene2__item${isOpen ? ' scene2__item--open' : ''}${gapClass}`}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: reduceMotion ? 0 : 0.08 + index * 0.07,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="scene2__marker" aria-hidden="true">
                  <span className="scene2__icon-plate">
                    <MilestoneIcon
                      id={milestone.icon}
                      className="scene2__icon"
                    />
                  </span>
                </div>

                <article className="scene2__card">
                  <p className="scene2__date">{milestone.dateLabel}</p>
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
                    onClick={() => toggle(milestone.id)}
                  >
                    {isOpen
                      ? scene2Content.collapseLabel
                      : scene2Content.expandLabel}
                  </button>
                </article>
              </motion.li>
            )
          })}
        </ol>

        <nav className="scene2__nav" aria-label="تنقل الرحلة">
          <button type="button" className="scene2__btn" onClick={onBack}>
            {scene2Content.backLabel}
          </button>
        </nav>
      </div>
    </motion.section>
  )
}
