import type { ContentStatus } from '../types/content'

export type MilestoneIconId = 'chat' | 'home' | 'ring' | 'rings'

export type Scene2Milestone = {
  id: string
  icon: MilestoneIconId
  /** Short category chip label (شات / بيت / خطوبة). */
  categoryLabel: string
  /** Champagne-gold ceremonial accent (engagement milestones). */
  ceremonial?: boolean
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
  headline: 'بلوكين… وخطوبتين 😂',
  subhead: 'وفاضل أوّل وآخر جواز… بعون الله ❤️',
  expandLabel: 'اقرأ المزيد',
  collapseLabel: 'اخفي التفاصيل',
  backLabel: 'السابق',
  milestones: [
    {
      id: 'first-chat',
      icon: 'chat',
      categoryLabel: 'شات',
      dateLabel: '٢٠١٩',
      title: 'أول مرة نتكلم',
      summary: 'اتكلّمنا شات عشان امتحان مادة أطفال 🤓',
      detail:
        'سألتك: الطفل بيبدأ يشتم من إمتى؟ ومن كتر تفاصيل «طفل بيعمل إيه إمتى»… 😂',
    },
    {
      id: 'first-home',
      icon: 'home',
      categoryLabel: 'بيت',
      dateLabel: '٥ مايو ٢٠٢٠',
      title: 'أول مرة بيت',
      summary: 'بسطتيني، ولبّستي جيبة بدل بنطلون ❤️',
      detail:
        'ومحدّش سابنا أصلًا في أوضة… فما عرفناش نتكلم براحتنا 😅',
    },
    {
      id: 'first-engagement',
      icon: 'ring',
      categoryLabel: 'خطوبة',
      ceremonial: true,
      dateLabel: '٦ يونيو ٢٠٢٠ · رمضان',
      title: 'أول خطوبة',
      summary: 'أيام كورونا… وفي رمضان ❤️',
      detail: 'ولما أكلتك جاتوه بالشوكة بالعرض 😂',
      gapAfter: true,
    },
    {
      id: 'second-engagement',
      icon: 'rings',
      categoryLabel: 'خطوبة',
      ceremonial: true,
      dateLabel: '١٣ مارس ٢٠٢٦ · رمضان',
      title: 'تاني خطوبة — رسمي',
      summary: 'تاني مرة في رمضان، والدنيا شتا 😂',
      detail:
        'ماما والناس متغاظين شوية: مفيش أغاني، وملبّسناش بعض دبل 😂',
    },
  ] satisfies Scene2Milestone[],
} as const
