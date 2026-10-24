import type { QualityIconId } from '../../../data/scene3'

interface QualityIconProps {
  id: QualityIconId
  className?: string
  size?: number
}

/** Soft stroke icons for Scene 3 watermarks / plates. */
export function QualityIcon({
  id,
  className,
  size = 28,
}: QualityIconProps) {
  const common = {
    className,
    viewBox: '0 0 48 48',
    width: size,
    height: size,
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  }

  switch (id) {
    case 'mind':
      return (
        <svg {...common}>
          <path d="M18 36c0-4 2-6 4-8 3-3 6-5 6-10a8 8 0 1 0-16 0c0 3 1 5 3 7 2 2 3 4 3 7v2" />
          <path d="M18 40h8M20 44h4" />
          <path d="M28 14c2.5 0 5 2 5 5.5 0 2-1 3.5-2.5 4.5" />
        </svg>
      )
    case 'obedience':
      return (
        <svg {...common}>
          <path d="M14 26l7 7 14-16" />
          <circle cx="24" cy="24" r="16" />
        </svg>
      )
    case 'laugh':
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="16" />
          <path d="M16 20h.01M32 20h.01" />
          <path d="M16 28c2.5 4 6 6 8 6s5.5-2 8-6" />
        </svg>
      )
    case 'support':
      return (
        <svg {...common}>
          <path d="M10 30c2-4 5-6 8-6h3l3 8 3-8h3c3 0 6 2 8 6" />
          <path d="M18 22v-4a6 6 0 0 1 12 0v4" />
          <path d="M24 14v4" />
        </svg>
      )
  }
}
