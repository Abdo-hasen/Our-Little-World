import type { ContentStatus } from '../types/content'
import finaleVoiceUrl from '../assets/audio/finale-voice.mp3'

/**
 * Scene 6 — Finale garden + voice.
 * Owner-approved: voice-only close (no written letter), no permanent archive yet.
 * Scene 5 skipped for now — journey jumps messages → finale.
 */
export const scene6Content = {
  status: 'approved' as ContentStatus,
  sceneBadge: 'المشهد الأخير',
  sceneTitle: 'ازرعي 5 وردات واستنّي مفاجأة',
  intro: 'كل وردة خطوة… والحديقة لسه في أولها',
  plantButton: 'ازرعي وردة',
  /** Garden starts empty — first tap grows the first flower. */
  startEmpty: true,
  /** Voice message unlocks after this many flowers. */
  voiceUnlockAt: 5,
  maxFlowers: 100,
  flowerCountLabel: (count: number, unlockAt: number, maxFlowers: number) => {
    if (count === 0) return 'لسه مفيش ورد… ازرعي أول واحدة'
    if (count >= maxFlowers) return 'الحديقة اتملت 🤍'
    if (count < unlockAt) return `${count} من ${unlockAt}… استنّي المفاجأة`
    return `زرعتِ ${count} وردة 🤍`
  },
  voiceSectionLabel: 'رسالة صوتية',
  playLabel: 'تشغيل',
  pauseLabel: 'إيقاف مؤقت',
  replayVoiceLabel: 'إعادة من الأول',
  voiceMissingLabel: 'الرسالة الصوتية لسه مش جاهزة',
  replayJourneyLabel: 'أعيدي رحلة عالمنا الصغير',
  backLabel: 'السابق',
  /** Bundled owner recording — visitor-started only. */
  voiceSrc: finaleVoiceUrl as string,
} as const
