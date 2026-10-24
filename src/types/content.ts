/** Content approval status — never mark invented content as approved. */
export type ContentStatus =
  | 'placeholder'
  | 'needs-owner-input'
  | 'draft'
  | 'approved'

export type JourneySceneId =
  | 'key'
  | 'timeline'
  | 'qualities'
  | 'messages'
  | 'secret'
  | 'finale'
