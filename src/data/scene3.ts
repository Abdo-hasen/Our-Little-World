import type { ContentStatus } from '../types/content'

export type QualityIconId = 'mind' | 'obedience' | 'laugh' | 'support'

export type Scene3Quality = {
  id: string
  icon: QualityIconId
  /** Short category chip label. */
  categoryLabel: string
  /** Front face title (may include WhatsApp-style emoji). */
  title: string
  /** Back face explanation. */
  detail: string
}

/** Approved Scene 3 flip-card copy (owner Q&A). */
export const scene3Content = {
  status: 'approved' as ContentStatus,
  sceneTitle: 'حاجات بحبها فيكي 💜',
  intro: 'مش قائمة عامة… دي تفاصيل صغيرة بتفكّرني بيكي كل شوية ✨',
  flipHint: 'اقلبي الكارت',
  flipBackHint: 'ارجعي للوش',
  closing: 'وغيرها كتير… بس الموقع هينهار لو كتبت كل الصفات 😂💻💥',
  backLabel: 'السابق',
  nextLabel: 'كمّلي الرحلة',
  qualities: [
    {
      id: 'mind',
      icon: 'mind',
      categoryLabel: 'تفكير',
      title: 'عقلية متكلفة 🧠✨',
      detail:
        'بحب أسمع رأيك دايمًا 👂 في قرارات، في مواقف قدامي، وحتى في التريندات 📱 بنقعد نـ brainstorm مع بعض ونحلل ❤️ مشكلتك بس إنك بتنحازي للستات ❤️😂😂',
    },
    {
      id: 'obedience',
      icon: 'obedience',
      categoryLabel: 'مواقف',
      title: 'مطيعة 😇',
      detail:
        'وإنتي عارفة كده… بس بتنكري 😂 زي موقف الإكسسوارات لما اكتشفنا إنها مش من حجاب شرعي 😇 فحطّيتيها في بوكس الجواز 😂💍',
    },
    {
      id: 'laugh',
      icon: 'laugh',
      categoryLabel: 'ضحك',
      title: 'دمك خفيف 😄',
      detail:
        'أي حاجة بتقوليها بتضحكني 😂 سواء قاصدة أو لأ 🙈 ودعاء أزلي: يا رب ما أفتحش هستيرية ضحك 😂😂🙏',
    },
    {
      id: 'support',
      icon: 'support',
      categoryLabel: 'دعم',
      title: 'داعمة 💪💜',
      detail:
        'بتدعمني كتيييير في الأزمات 🤍 زي موضوع «اللي بالي بالك» 😂',
    },
  ] satisfies Scene3Quality[],
} as const
