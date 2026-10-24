import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Scene1Key } from './features/journey/scenes/Scene1Key'
import { Scene2Timeline } from './features/journey/scenes/Scene2Timeline'
import { Scene3Qualities } from './features/journey/scenes/Scene3Qualities'
import { Scene4Messages } from './features/journey/scenes/Scene4Messages'
import { Scene6Finale } from './features/journey/scenes/Scene6Finale'
import type { JourneySceneId } from './types/content'

function App() {
  const [activeScene, setActiveScene] = useState<JourneySceneId>('key')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activeScene])

  return (
    <main>
      <AnimatePresence mode="wait">
        {activeScene === 'key' && (
          <Scene1Key key="key" onUnlock={() => setActiveScene('timeline')} />
        )}
        {activeScene === 'timeline' && (
          <Scene2Timeline
            key="timeline"
            onBack={() => setActiveScene('key')}
            onNext={() => setActiveScene('qualities')}
          />
        )}
        {activeScene === 'qualities' && (
          <Scene3Qualities
            key="qualities"
            onBack={() => setActiveScene('timeline')}
            onNext={() => setActiveScene('messages')}
          />
        )}
        {activeScene === 'messages' && (
          <Scene4Messages
            key="messages"
            onBack={() => setActiveScene('qualities')}
            /* Scene 5 skipped for now — jump to finale. */
            onNext={() => setActiveScene('finale')}
          />
        )}
        {activeScene === 'finale' && (
          <Scene6Finale
            key="finale"
            onBack={() => setActiveScene('messages')}
            onReplayJourney={() => setActiveScene('key')}
          />
        )}
      </AnimatePresence>
    </main>
  )
}

export default App
