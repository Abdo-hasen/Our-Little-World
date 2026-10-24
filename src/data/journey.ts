import type { ContentStatus, JourneySceneId } from '../types/content'

export type JourneySceneMeta = {
  id: JourneySceneId
  /** Arabic scene title from the project spec */
  title: string
  contentStatus: ContentStatus
}

/**
 * Scene order from PROJECT_SPEC.md.
 * Scenes 1–3 content are approved; Scene 4 is draft (owner review).
 */
export const journeyScenes: JourneySceneMeta[] = [
  {
    id: 'key',
    title: 'مفتاح عالمكم',
    contentStatus: 'approved',
  },
  {
    id: 'timeline',
    title: 'حكايتنا بالترتيب',
    contentStatus: 'approved',
  },
  {
    id: 'qualities',
    title: 'حاجات بحبها فيكي',
    contentStatus: 'approved',
  },
  {
    id: 'messages',
    title: 'رسائل غيرت يومي',
    contentStatus: 'draft',
  },
  {
    id: 'secret',
    title: 'الذكرى السرية',
    contentStatus: 'needs-owner-input',
  },
  {
    id: 'finale',
    title: 'مشهد أخير: حاجة لسه هتكبر',
    contentStatus: 'needs-owner-input',
  },
]
