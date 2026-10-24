import type { ContentStatus, JourneySceneId } from '../types/content'

export type JourneySceneMeta = {
  id: JourneySceneId
  /** Arabic scene title from the project spec */
  title: string
  contentStatus: ContentStatus
}

/**
 * Scene order from PROJECT_SPEC.md.
 * Only Scene 1 opening copy is approved; UI implementation waits for owner go-ahead.
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
    contentStatus: 'needs-owner-input',
  },
  {
    id: 'qualities',
    title: 'حاجات بحبها فيكي',
    contentStatus: 'needs-owner-input',
  },
  {
    id: 'messages',
    title: 'رسائل غيرت يومي',
    contentStatus: 'needs-owner-input',
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
