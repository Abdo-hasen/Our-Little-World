import { useState, useRef, type ChangeEvent, type FormEvent } from 'react'
import { scene1Content } from '../../../data/scene1'
import { isEngagementDateValid, normalizeDigits } from './scene1Validation'
import './Scene1Key.css'

interface Scene1KeyProps {
  onUnlock: () => void
}

export function Scene1Key({ onUnlock }: Scene1KeyProps) {
  const [step, setStep] = useState<'welcome' | 'gate'>('welcome')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle')
  const [isShaking, setIsShaking] = useState(false)

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
    if (raw.length === 2) {
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
      // Restrained smooth transition to Scene 2 without sound
      setTimeout(() => {
        onUnlock()
      }, 550)
    } else {
      setStatus('error')
      setIsShaking(true)
      setTimeout(() => {
        setIsShaking(false)
      }, 500)
    }
  }

  const handleOpenGate = () => {
    setStep('gate')
    setTimeout(() => {
      dayRef.current?.focus()
    }, 100)
  }

  const handleBackToWelcome = () => {
    setStep('welcome')
    setStatus('idle')
  }

  return (
    <section className="scene1" aria-label="مفتاح عالمكم">
      <div className="scene1__atmosphere" aria-hidden="true">
        <img
          src="/scene1-atmosphere.jpg"
          alt=""
          className="scene1__atmosphere-img"
        />
      </div>
      <div className="scene1__container">
        {/* Monogram and Recipient Name */}
        <header className="scene1__header">
          <div className="scene1__logo-wrapper">
            <img
              src="/lavender-monogram.png"
              alt="A Little World"
              className="scene1__logo"
              width={128}
              height={128}
            />
          </div>
          <h1 className="scene1__title">{scene1Content.recipientNameAr}</h1>
        </header>

        {/* Step 1: Welcome letter view */}
        {step === 'welcome' && (
          <div className="scene1__card">
            {scene1Content.paragraphs.map((paragraph, index) => (
              <p key={index} className="scene1__body">
                {paragraph}
              </p>
            ))}
            <p className="scene1__lead-in">{scene1Content.ctaLeadIn}</p>

            <div className="scene1__actions">
              <button
                type="button"
                className="scene1__btn"
                onClick={handleOpenGate}
              >
                {scene1Content.openGiftButton}
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Date gate view (within the same scene) */}
        {step === 'gate' && (
          <div className="scene1__card">
            <form
              className={`scene1__gate ${isShaking ? 'scene1__shake' : ''}`}
              onSubmit={handleSubmit}
            >
              <h2 className="scene1__gate-prompt">{scene1Content.gate.prompt}</h2>
              <p className="scene1__gate-subtext">{scene1Content.gate.subtext}</p>

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
                    aria-label="يوم الخطوبة"
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
                    aria-label="شهر الخطوبة"
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
                    aria-label="سنة الخطوبة"
                  />
                </div>
              </div>

              {/* Feedback Alert */}
              <div
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
                  className="scene1__btn"
                  disabled={status === 'success'}
                >
                  {scene1Content.gate.confirmButton}
                </button>
                <button
                  type="button"
                  className="scene1__btn scene1__btn--secondary"
                  onClick={handleBackToWelcome}
                >
                  {scene1Content.gate.backButton}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}
