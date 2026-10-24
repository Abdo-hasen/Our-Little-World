import { useState } from 'react'
import { Scene1Key } from './features/journey/scenes/Scene1Key'
import { Scene2Placeholder } from './features/journey/scenes/Scene2Placeholder'
import type { JourneySceneId } from './types/content'

function App() {
  const [activeScene, setActiveScene] = useState<JourneySceneId>('key')

  return (
    <main>
      {activeScene === 'key' && (
        <Scene1Key onUnlock={() => setActiveScene('timeline')} />
      )}
      {activeScene === 'timeline' && (
        <Scene2Placeholder onBackToStart={() => setActiveScene('key')} />
      )}
    </main>
  )
}

export default App
