import type { MilestoneIconId } from '../../../data/scene2'

interface MilestoneIconProps {
  id: MilestoneIconId
  className?: string
  size?: number
}

/** Expressive SVG shapes — placeholders until owner photos exist. */
export function MilestoneIcon({
  id,
  className,
  size = 28,
}: MilestoneIconProps) {
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
    case 'chat':
      return (
        <svg {...common}>
          <path d="M12 14h24a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H22l-8 6v-6h-2a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4z" />
          <path d="M18 22h12M18 28h8" />
        </svg>
      )
    case 'home':
      return (
        <svg {...common}>
          <path d="M8 22 L24 10 L40 22" />
          <path d="M14 21v15h20V21" />
          <path d="M21 36V26h6v10" />
        </svg>
      )
    case 'ring':
      return (
        <svg {...common}>
          <circle cx="24" cy="28" r="10" />
          <path d="M24 10l2.5 5.5H33l-4.5 3.5 1.8 5.5L24 21.5 18.7 24.5l1.8-5.5L16 15.5h6.5L24 10z" />
        </svg>
      )
    case 'rings':
      return (
        <svg {...common}>
          <circle cx="18" cy="28" r="9" />
          <circle cx="30" cy="28" r="9" />
          <path d="M24 12l1.8 3.8H30l-3.4 2.6 1.3 4L24 20.2l-3.9 2.2 1.3-4L18 15.8h4.2L24 12z" />
        </svg>
      )
    case 'crescent':
      return (
        <svg {...common}>
          <path d="M28 10a14 14 0 1 0 0 28 11 11 0 0 1 0-28z" />
          <path d="M34 14l1.2 2.4 2.6.4-1.9 1.8.5 2.6L34 20l-2.4 1.2.5-2.6-1.9-1.8 2.6-.4z" />
        </svg>
      )
  }
}
