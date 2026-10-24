import type { ContentStatus } from '../types/content'

export type MilestoneIconId = 'chat' | 'home' | 'ring' | 'rings' | 'crescent'

export type Scene2Milestone = {
  id: string
  icon: MilestoneIconId
  /** Short category chip label (شات / بيت / خطوبة / إن شاء الله). */
  categoryLabel: string
  /** Champagne-gold ceremonial accent (engagement milestones). */
  ceremonial?: boolean
  /** Softer “still ahead” treatment — open marker, dreamier gold. */
  future?: boolean
  dateLabel: string
  title: string
  summary: string
  detail: string
  /** Longer dotted rail gap after this milestone (e.g. multi-year span). */
  gapAfter?: boolean
}

/** Approved Scene 2 timeline copy (owner Q&A). */
export const scene2Content = {
  status: 'approved' as ContentStatus,
  sceneTitle: 'حكايتنا بالترتيب',
  headline: 'بلوكين… وخطوبتين 😂💍',
  subhead: 'وفاضل أوّل وآخر جواز… بعون الله 💍🤲',
  expandLabel: 'اقرأ المزيد',
  collapseLabel: 'اخفي التفاصيل',
  backLabel: 'السابق',
  nextLabel: 'كمّلي الرحلة',
  milestones: [
    {
      id: 'first-chat',
      icon: 'chat',
      categoryLabel: 'شات',
      dateLabel: '2019',
      title: 'أول مرة نتكلم',
      summary: 'اتكلّمنا شات عشان امتحان مادة أطفال 🤓📚',
      detail:
        'سألتك: الطفل بيبدأ يشتم من إمتى؟ من كتر تفاصيل «طفل بيعمل إيه و إمتى»… 😂👶',
    },
    {
      id: 'first-home',
      icon: 'home',
      categoryLabel: 'بيت',
      dateLabel: '5/5/2020',
      title: 'أول مرة بيت',
      summary: 'بسطتيني، ولبّستي جيبة بدل بنطلون 👗❤️',
      detail:
        'ومحدّش سابنا أصلًا في أوضة… فما عرفناش نتكلم براحتنا 😅',
    },
    {
      id: 'first-engagement',
      icon: 'ring',
      categoryLabel: 'خطوبة',
      ceremonial: true,
      dateLabel: '6/6/2020',
      title: 'أول خطوبة',
      summary: 'أيام كورونا… وفي رمضان 🌙❤️',
      detail: 'ولما أكلتك جاتوه بالشوكة بالعرض 🍰😂',
      gapAfter: true,
    },
    {
      id: 'second-engagement',
      icon: 'rings',
      categoryLabel: 'خطوبة',
      ceremonial: true,
      dateLabel: '13/3/2026',
      title: 'تاني خطوبة — رسمي',
      summary: 'تاني مرة في رمضان، والدنيا شتا ❄️🌙',
      detail:
        'ماما والناس متغاظين شوية: مفيش أغاني، وملبّسناش بعض دبل 💍😂',
      gapAfter: true,
    },
    {
      id: 'awaiting-marriage',
      icon: 'crescent',
      categoryLabel: 'إن شاء الله',
      ceremonial: true,
      future: true,
      dateLabel: 'الجاية',
      title: 'بانتظار الزواج',
      summary: 'يامسهّل…فاضل أوّل وآخر جواز 💍🤲',
      detail: 'بعون الله الأسبوع الجاي 🤍',
    },
  ] satisfies Scene2Milestone[],
} as const
