import { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { scene6Content } from '../../../data/scene6'
import './Scene6Finale.css'

interface Scene6FinaleProps {
  onBack: () => void
  onReplayJourney: () => void
}

const easeCinematic = [0.22, 1, 0.36, 1] as const

type FlowerSpot = {
  id: number
  left: number
  bottom: number
  scale: number
  variant: 0 | 1 | 2
  rotate: number
}

/** Deterministic layout so up to 100 flowers feel planted, not stacked. */
function spotForIndex(index: number): Omit<FlowerSpot, 'id'> {
  const col = index % 10
  const row = Math.floor(index / 10) % 10
  const jitterX = ((index * 37) % 7) - 3
  const jitterY = ((index * 53) % 5) - 2
  const left = Math.min(92, Math.max(6, 8 + col * 9 + jitterX))
  const bottom = Math.min(40, Math.max(6, 6 + row * 3.4 + jitterY * 0.55))
  const scale = 0.55 + ((index * 17) % 30) / 100
  const variant = (index % 3) as 0 | 1 | 2
  const rotate = ((index * 13) % 21) - 10
  return { left, bottom, scale, variant, rotate }
}

function FlowerSvg({ variant }: { variant: 0 | 1 | 2 }) {
  const petals =
    variant === 0
      ? '#c48bb8'
      : variant === 1
        ? '#a76b9e'
        : '#d4a0c4'
  const center = variant === 2 ? '#c9a46c' : '#e8c878'

  return (
    <svg viewBox="0 0 64 84" aria-hidden="true">
      <path
        d="M31 40 C31 58 33 74 33 82 C30 74 28 58 28 40 Z"
        fill="#6b8f5e"
      />
      <ellipse cx="24" cy="58" rx="7" ry="3.5" fill="#7fa06e" transform="rotate(-35 24 58)" />
      <ellipse cx="40" cy="62" rx="7" ry="3.5" fill="#7fa06e" transform="rotate(32 40 62)" />
      <g transform="translate(32 30)">
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <ellipse
            key={deg}
            cx="0"
            cy="-12"
            rx="7.5"
            ry="11"
            fill={petals}
            transform={`rotate(${deg})`}
            opacity="0.95"
          />
        ))}
        <circle cx="0" cy="0" r="6.5" fill={center} />
      </g>
    </svg>
  )
}

function VoicePlayer({ reduceMotion }: { reduceMotion: boolean | null }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [ready, setReady] = useState(Boolean(scene6Content.voiceSrc))
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onTime = () => {
      if (!audio.duration || Number.isNaN(audio.duration)) return
      setProgress(audio.currentTime / audio.duration)
    }
    const onEnded = () => {
      setPlaying(false)
      setProgress(1)
    }
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    const onCanPlay = () => {
      setReady(true)
      setFailed(false)
    }
    const onError = () => {
      setFailed(true)
      setReady(false)
      setPlaying(false)
    }

    audio.addEventListener('timeupdate', onTime)
    audio.addEventListener('ended', onEnded)
    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('canplay', onCanPlay)
    audio.addEventListener('error', onError)

    return () => {
      audio.removeEventListener('timeupdate', onTime)
      audio.removeEventListener('ended', onEnded)
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.removeEventListener('canplay', onCanPlay)
      audio.removeEventListener('error', onError)
    }
  }, [])

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio || failed) return
    if (audio.paused) {
      try {
        await audio.play()
      } catch {
        setFailed(true)
      }
    } else {
      audio.pause()
    }
  }

  const replay = async () => {
    const audio = audioRef.current
    if (!audio || failed) return
    audio.currentTime = 0
    setProgress(0)
    try {
      await audio.play()
    } catch {
      setFailed(true)
    }
  }

  return (
    <div className="scene6__voice">
      <p className="scene6__voice-label">{scene6Content.voiceSectionLabel}</p>

      {scene6Content.voiceSrc ? (
        <audio ref={audioRef} src={scene6Content.voiceSrc} preload="metadata" />
      ) : null}

      {failed || !scene6Content.voiceSrc ? (
        <p className="scene6__voice-missing">{scene6Content.voiceMissingLabel}</p>
      ) : (
        <>
          <div
            className="scene6__progress"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress * 100)}
            aria-label="تقدم الرسالة الصوتية"
          >
            <motion.div
              className="scene6__progress-bar"
              style={{ transform: `scaleX(${progress})` }}
              transition={reduceMotion ? { duration: 0 } : undefined}
            />
          </div>

          <div className="scene6__voice-controls">
            <motion.button
              type="button"
              className="scene6__voice-btn scene6__voice-btn--primary"
              onClick={togglePlay}
              disabled={!ready && !failed}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              aria-pressed={playing}
            >
              {playing ? scene6Content.pauseLabel : scene6Content.playLabel}
            </motion.button>
            <motion.button
              type="button"
              className="scene6__voice-btn"
              onClick={replay}
              disabled={!ready && !failed}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            >
              {scene6Content.replayVoiceLabel}
            </motion.button>
          </div>
        </>
      )}
    </div>
  )
}

export function Scene6Finale({ onBack, onReplayJourney }: Scene6FinaleProps) {
  const reduceMotion = useReducedMotion()
  const headingId = useId()
  const voicePanelRef = useRef<HTMLDivElement | null>(null)
  const [flowers, setFlowers] = useState<FlowerSpot[]>([])
  const atCap = flowers.length >= scene6Content.maxFlowers
  const voiceUnlocked = flowers.length >= scene6Content.voiceUnlockAt

  const plant = () => {
    if (atCap) return
    const index = flowers.length
    setFlowers((prev) => [...prev, { id: index + 1, ...spotForIndex(index) }])
  }

  useEffect(() => {
    if (!voiceUnlocked) return
    voicePanelRef.current?.scrollIntoView({
      block: 'center',
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }, [voiceUnlocked, reduceMotion])

  return (
    <motion.section
      className="scene6"
      aria-labelledby={headingId}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
      transition={{ duration: 0.55, ease: easeCinematic }}
    >
      <div className="scene6__wash" aria-hidden="true" />

      <div className="scene6__container">
        <header className="scene6__header">
          <motion.p
            className="scene6__badge"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.05, duration: 0.45, ease: easeCinematic }}
          >
            {scene6Content.sceneBadge}
          </motion.p>
          <motion.h1
            id={headingId}
            className="scene6__title"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.1, duration: 0.5, ease: easeCinematic }}
          >
            {scene6Content.sceneTitle}
          </motion.h1>
          <motion.p
            className="scene6__intro"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.16, duration: 0.5, ease: easeCinematic }}
          >
            {scene6Content.intro}
          </motion.p>
          <div className="scene6__divider" aria-hidden="true">
            <span className="scene6__divider-line" />
            <span className="scene6__divider-dot" />
            <span className="scene6__divider-line" />
          </div>
        </header>

        <motion.div
          className="scene6__garden-card"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduceMotion ? 0 : 0.22, duration: 0.55, ease: easeCinematic }}
        >
          <div className="scene6__garden">
            {!reduceMotion ? <div className="scene6__garden-ambient" aria-hidden="true" /> : null}
            <div className="scene6__soil" aria-hidden="true" />

            <AnimatePresence>
              {flowers.length === 0 ? (
                <motion.p
                  key="empty"
                  className="scene6__garden-empty"
                  initial={reduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {scene6Content.flowerCountLabel(
                    0,
                    scene6Content.voiceUnlockAt,
                    scene6Content.maxFlowers,
                  )}
                </motion.p>
              ) : null}
            </AnimatePresence>

            <ul className="scene6__flowers" aria-hidden="true">
              <AnimatePresence>
                {flowers.map((flower) => (
                  <motion.li
                    key={flower.id}
                    className="scene6__flower"
                    style={{
                      insetInlineStart: `${flower.left}%`,
                      bottom: `${flower.bottom}%`,
                      marginInlineStart: '-1.3rem',
                    }}
                    initial={
                      reduceMotion
                        ? false
                        : { opacity: 0, scaleY: 0.15, scaleX: 0.7, y: 12 }
                    }
                    animate={{
                      opacity: 1,
                      scaleY: flower.scale,
                      scaleX: flower.scale,
                      y: 0,
                      rotate: flower.rotate,
                    }}
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { duration: 0.7, ease: easeCinematic }
                    }
                  >
                    <FlowerSvg variant={flower.variant} />
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </div>

          <p className="scene6__count" aria-live="polite">
            {scene6Content.flowerCountLabel(
              flowers.length,
              scene6Content.voiceUnlockAt,
              scene6Content.maxFlowers,
            )}
          </p>
        </motion.div>

        <motion.div
          className="scene6__plant"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduceMotion ? 0 : 0.28, duration: 0.5, ease: easeCinematic }}
        >
          <motion.button
            type="button"
            className={`scene6__plant-btn${reduceMotion ? '' : ' scene6__plant-btn--shimmer'}`}
            onClick={plant}
            disabled={atCap}
            whileTap={reduceMotion || atCap ? undefined : { scale: 0.97 }}
          >
            {scene6Content.plantButton}
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {voiceUnlocked ? (
            <motion.div
              key="voice-surprise"
              ref={voicePanelRef}
              initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: 8 }}
              transition={{ duration: 0.55, ease: easeCinematic }}
            >
              <VoicePlayer reduceMotion={reduceMotion} />
            </motion.div>
          ) : null}
        </AnimatePresence>

        <nav className="scene6__nav" aria-label="تنقل الرحلة">
          <motion.button
            type="button"
            className="scene6__btn scene6__btn--ghost"
            onClick={onBack}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
          >
            {scene6Content.backLabel}
          </motion.button>
          <motion.button
            type="button"
            className="scene6__btn scene6__btn--replay"
            onClick={onReplayJourney}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
          >
            {scene6Content.replayJourneyLabel}
          </motion.button>
        </nav>
      </div>
    </motion.section>
  )
}
