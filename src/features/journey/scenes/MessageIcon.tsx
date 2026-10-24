import type { MessageIconId } from '../../../data/scene4'

type MessageIconProps = {
  id: MessageIconId
  className?: string
  size?: number
}

/** Soft line icons for Scene 4 category / card watermarks (not emoji). */
export function MessageIcon({ id, className, size = 24 }: MessageIconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
    'aria-hidden': true as const,
  }

  switch (id) {
    case 'reunion':
      return (
        <svg {...common}>
          <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
        </svg>
      )
    case 'clarity':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3.2" />
          <path d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z" />
        </svg>
      )
    case 'days':
      return (
        <svg {...common}>
          <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
          <path d="M8 3.5v3M16 3.5v3M3.5 10h17" />
        </svg>
      )
    case 'gratitude':
      return (
        <svg {...common}>
          <path d="M12 20v-7" />
          <path d="M8.5 9.5c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5c0 2.2-2.2 3.4-3.5 4.8-1.3-1.4-3.5-2.6-3.5-4.8Z" />
          <path d="M7 20h10" />
        </svg>
      )
    case 'playful':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M8.5 14.2c1.2 1.3 2.6 1.9 3.5 1.9s2.3-.6 3.5-1.9" />
          <path d="M9 10h.01M15 10h.01" />
        </svg>
      )
    case 'occasion':
      return (
        <svg {...common}>
          <path d="M12 3.5 13.8 9H20l-5 3.6 1.8 5.4L12 14.8 7.2 18l1.8-5.4L4 9h6.2L12 3.5Z" />
        </svg>
      )
    default:
      return null
  }
}
