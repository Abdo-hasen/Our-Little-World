import { motion, useReducedMotion } from 'framer-motion'

interface WordRevealProps {
  text: string
  className?: string
  /** Base delay before the first word (seconds). */
  delay?: number
  /** Stagger between words (seconds). */
  stagger?: number
  /** Instantly show full text (tap-to-skip / reduced motion). */
  skip?: boolean
}

/** Word-by-word fade-in for Arabic copy (space-separated). */
export function WordReveal({
  text,
  className,
  delay = 0,
  stagger = 0.045,
  skip = false,
}: WordRevealProps) {
  const reduceMotion = useReducedMotion()
  const words = text.trim().split(/\s+/).filter(Boolean)

  if (reduceMotion || skip) {
    return <p className={className}>{text}</p>
  }

  return (
    <p className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${index}-${word}`}
          className="scene1__word"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            delay: delay + index * stagger,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
          {index < words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </p>
  )
}
