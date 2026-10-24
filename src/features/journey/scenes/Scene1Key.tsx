import { useState, useRef, type ChangeEvent, type FormEvent } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { scene1Content, SKIP_DATE_GATE_FOR_TESTING } from '../../../data/scene1'
import { WordReveal } from '../WordReveal'
import { isEngagementDateValid, normalizeDigits } from './scene1Validation'
import './Scene1Key.css'

interface Scene1KeyProps {
  onUnlock: () => void
}

const CONFETTI_COLORS = ['#a76b9e', '#c9a46c', '#8b5a8c', '#e8d5b0', '#ffffff']

const REVEAL_STAGGER = 0.045
const REVEAL_WORD_DURATION = 0.45
const countWords = (t: string) => t.trim().split(/\s+/).filter(Boolean).length
const PARA_1_DELAY = 0.25
const PARA_2_DELAY =
  PARA_1_DELAY + countWords(scene1Content.paragraphs[0]) * REVEAL_STAGGER + 0.2
const REVEAL_END =
  PARA_2_DELAY +
  countWords(scene1Content.paragraphs[1]) * REVEAL_STAGGER +
  REVEAL_WORD_DURATION
const LEAD_IN_DELAY = REVEAL_END + 0.1
const ACTIONS_DELAY = REVEAL_END + 0.35

function fireUnlockBurst() {
  const origin = { x: 0.5, y: 0.55 }
  void confetti({
    particleCount: 70,
    spread: 68,
    startVelocity: 28,
    gravity: 0.85,
    scalar: 0.85,
    origin,
    colors: CONFETTI_COLORS,
  })
  window.setTimeout(() => {
    void confetti({
      particleCount: 40,
      spread: 100,
      startVelocity: 18,
      gravity: 1,
      scalar: 0.7,
      origin: { x: 0.5, y: 0.48 },
      colors: CONFETTI_COLORS,
    })
  }, 180)
}

function FloatingParticles() {
  return (
    <div className="scene1__particles" aria-hidden="true">
      {Array.from({ length: 10 }, (_, i) => (
        <span key={i} className={`scene1__particle scene1__particle--${i + 1}`} />
      ))}
    </div>
  )
}

export function Scene1Key({ onUnlock }: Scene1KeyProps) {
  const [step, setStep] = useState<'welcome' | 'gate'>('welcome')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle')
  const [isShaking, setIsShaking] = useState(false)
  const [exiting, setExiting] = useState(false)
  const [revealSkipped, setRevealSkipped] = useState(false)
  const reduceMotion = useReducedMotion()

  const dayRef = useRef<HTMLInputElement>(null)
  const monthRef = useRef<HTMLInputElement>(null)
  const yearRef = useRef<HTMLInputElement>(null)

  const handleDayChange = (e: ChangeEvent<HTMLInputElement>) => {
    const raw = normalizeDigits(e.target.value).replace(/\D/g, '').slice(0, 2)
    setDay(raw)
    if (status !== 'idle') setStatus('idle')
    if (raw.length === 2) {
      monthRef.current?.focus()
    }
  }

  const handleMonthChange = (e: ChangeEvent<HTMLInputElement>) => {
    const raw = normalizeDigits(e.target.value).replace(/\D/g, '').slice(0, 2)
    setMonth(raw)
    if (status !== 'idle') setStatus('idle')
    // Advance on "3" (not only "03"): digits 2–9 complete a month in one keystroke;
    // 0/1 wait for a second digit (01–09, 10–12).
    const monthNum = Number.parseInt(raw, 10)
    const monthComplete =
      raw.length === 2 || (raw.length === 1 && monthNum >= 2 && monthNum <= 9)
    if (monthComplete) {
      yearRef.current?.focus()
    }
  }

  const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    const raw = normalizeDigits(e.target.value).replace(/\D/g, '').slice(0, 4)
    setYear(raw)
    if (status !== 'idle') setStatus('idle')
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (isEngagementDateValid(day, month, year)) {
      setStatus('success')

      if (!reduceMotion) {
        fireUnlockBurst()
      }

      setExiting(true)
      window.setTimeout(
        () => {
          onUnlock()
        },
        reduceMotion ? 200 : 900,
      )
    } else {
      setStatus('error')
      setIsShaking(true)
      window.setTimeout(() => {
        setIsShaking(false)
      }, 500)
    }
  }

  const handleOpenGate = () => {
    // Date gate UI kept below — flip SKIP_DATE_GATE_FOR_TESTING to false to restore.
    if (SKIP_DATE_GATE_FOR_TESTING) {
      onUnlock()
      return
    }

    setStep('gate')
    window.setTimeout(() => {
      dayRef.current?.focus()
    }, 280)
  }

  const handleBackToWelcome = () => {
    setStep('welcome')
    setStatus('idle')
  }

  return (
    <motion.section
      className={`scene1${exiting ? ' scene1--exit' : ''}`}
      aria-label="مفتاح عالمكم"
      initial={false}
      animate={
        exiting && !reduceMotion
          ? { scale: 1.08, opacity: 0, filter: 'blur(8px)' }
          : { scale: 1, opacity: 1, filter: 'blur(0px)' }
      }
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="scene1__atmosphere" aria-hidden="true">
        <img
          src={`${import.meta.env.BASE_URL}scene1-atmosphere.jpg`}
          alt=""
          className="scene1__atmosphere-img"
        />
        <div className="scene1__aurora" />
      </div>

      <FloatingParticles />

      <div className="scene1__container">
        <motion.header
          className="scene1__header"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="scene1__logo-wrapper">
            <img
              src={`${import.meta.env.BASE_URL}our-world-monogram.png`}
              alt="Our World"
              className="scene1__logo"
              width={128}
              height={128}
            />
          </div>
          <h1 className="scene1__title">{scene1Content.recipientNameAr}</h1>
          <div className="scene1__divider" aria-hidden="true">
            <span className="scene1__divider-line" />
            <svg
              className="scene1__divider-seal"
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="currentColor"
            >
              <path d="M12 2.5l2.2 4.6 5.1.7-3.7 3.6.9 5.1L12 14.8 7.5 16.5l.9-5.1-3.7-3.6 5.1-.7L12 2.5z" />
            </svg>
            <span className="scene1__divider-line" />
          </div>
        </motion.header>

        <AnimatePresence mode="wait">
          {step === 'welcome' && (
            <motion.div
              key="welcome"
              className="scene1__card"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -12, scale: 0.98 }
              }
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setRevealSkipped(true)}
            >
              <WordReveal
                text={scene1Content.paragraphs[0]}
                className="scene1__body"
                delay={PARA_1_DELAY}
                skip={revealSkipped}
              />
              <WordReveal
                text={scene1Content.paragraphs[1]}
                className="scene1__body"
                delay={PARA_2_DELAY}
                skip={revealSkipped}
              />

              <motion.p
                key={revealSkipped ? 'lead-skip' : 'lead'}
                className="scene1__lead-in"
                initial={reduceMotion || revealSkipped ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: LEAD_IN_DELAY, duration: 0.5 }}
              >
                {scene1Content.ctaLeadIn}
              </motion.p>

              <motion.div
                key={revealSkipped ? 'act-skip' : 'act'}
                className="scene1__actions"
                initial={
                  reduceMotion || revealSkipped ? false : { opacity: 0, y: 10 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: ACTIONS_DELAY, duration: 0.45 }}
              >
                <div className="scene1__seal" aria-hidden="true">
                  <span className="scene1__seal-dot" />
                </div>
                <button
                  type="button"
                  className="scene1__btn scene1__btn--shimmer"
                  onClick={handleOpenGate}
                >
                  {scene1Content.openGiftButton}
                </button>
              </motion.div>
            </motion.div>
          )}

          {step === 'gate' && (
            <motion.div
              key="gate"
              className="scene1__card"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 12, scale: 0.98 }
              }
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <form
                className={`scene1__gate ${isShaking ? 'scene1__shake' : ''}${
                  status === 'error' ? ' scene1__gate--error' : ''
                }${status === 'success' ? ' scene1__gate--success' : ''}`}
                onSubmit={handleSubmit}
              >
                <h2 className="scene1__gate-prompt">
                  {scene1Content.gate.prompt}
                </h2>
                <p className="scene1__gate-subtext">
                  {scene1Content.gate.subtext}
                </p>

                <div className="scene1__date-inputs">
                  <div className="scene1__date-field">
                    <label htmlFor="gate-day" className="scene1__date-label">
                      {scene1Content.gate.dayLabel}
                    </label>
                    <input
                      id="gate-day"
                      ref={dayRef}
                      type="text"
                      inputMode="numeric"
                      autoComplete="off"
                      maxLength={2}
                      value={day}
                      onChange={handleDayChange}
                      className="scene1__input"
                      aria-invalid={status === 'error'}
                      aria-describedby={
                        status === 'error' ? 'gate-feedback' : undefined
                      }
                      disabled={status === 'success'}
                    />
                  </div>

                  <span className="scene1__separator" aria-hidden="true">
                    /
                  </span>

                  <div className="scene1__date-field">
                    <label htmlFor="gate-month" className="scene1__date-label">
                      {scene1Content.gate.monthLabel}
                    </label>
                    <input
                      id="gate-month"
                      ref={monthRef}
                      type="text"
                      inputMode="numeric"
                      autoComplete="off"
                      maxLength={2}
                      value={month}
                      onChange={handleMonthChange}
                      className="scene1__input"
                      aria-invalid={status === 'error'}
                      aria-describedby={
                        status === 'error' ? 'gate-feedback' : undefined
                      }
                      disabled={status === 'success'}
                    />
                  </div>

                  <span className="scene1__separator" aria-hidden="true">
                    /
                  </span>

                  <div className="scene1__date-field">
                    <label htmlFor="gate-year" className="scene1__date-label">
                      {scene1Content.gate.yearLabel}
                    </label>
                    <input
                      id="gate-year"
                      ref={yearRef}
                      type="text"
                      inputMode="numeric"
                      autoComplete="off"
                      maxLength={4}
                      value={year}
                      onChange={handleYearChange}
                      className="scene1__input scene1__input--year"
                      aria-invalid={status === 'error'}
                      aria-describedby={
                        status === 'error' ? 'gate-feedback' : undefined
                      }
                      disabled={status === 'success'}
                    />
                  </div>
                </div>

                <div
                  id="gate-feedback"
                  className="scene1__feedback"
                  role="status"
                  aria-live="polite"
                >
                  {status === 'error' && (
                    <span className="scene1__feedback--error">
                      {scene1Content.gate.errorMessage}
                    </span>
                  )}
                  {status === 'success' && (
                    <span className="scene1__feedback--success">
                      {scene1Content.gate.successMessage}
                    </span>
                  )}
                </div>

                <div className="scene1__actions">
                  <button
                    type="submit"
                    className="scene1__btn scene1__btn--shimmer"
                    disabled={status === 'success'}
                  >
                    {scene1Content.gate.confirmButton}
                  </button>
                  <button
                    type="button"
                    className="scene1__btn scene1__btn--secondary"
                    onClick={handleBackToWelcome}
                    disabled={status === 'success'}
                  >
                    {scene1Content.gate.backButton}
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}
