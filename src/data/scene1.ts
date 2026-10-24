import type { ContentStatus } from '../types/content'

/** Approved Scene 1 opening copy and date gate from PROJECT_SPEC.md. */
export const scene1Content = {
  status: 'approved' as ContentStatus,
  recipientNameAr: 'آية علي',
  recipientNameEn: 'Aya Ali',
  paragraphs: [
    'ورا كل صورة حكاية، وورا كل ذكرى إحساس، وفي تفاصيل صغيرة يمكن متعرفيش إنها فضلت في بالي لحد دلوقتي.',
    'النهارده حبيت أرجع أعيش معاكي شوية من التفاصيل دي، وأحكيلك عن حاجات يمكن ملحقتش أقولها وقتها، وأمنيات بدعي ربنا إنها تجمعنا على خير.',
  ],
  ctaLeadIn: 'يلا نبدأ الرحلة؟',
  openGiftButton: 'افتحي هديتك',
  gate: {
    prompt: 'فاكرة التاريخ ده؟',
    subtext: 'دخّلي تاريخ خطوبتنا عشان نبدأ حكايتنا',
    dayLabel: 'يوم',
    monthLabel: 'شهر',
    yearLabel: 'سنة',
    confirmButton: 'تأكيد',
    backButton: 'الرجوع للرسالة',
    errorMessage: 'تاريخ مميز وميتنسيش... فكري تاني براحة 🤍',
    successMessage: 'صح... 13 مارس 2026 🤍',
    targetDate: {
      day: 13,
      month: 3,
      year: 2026,
    },
  },
} as const
