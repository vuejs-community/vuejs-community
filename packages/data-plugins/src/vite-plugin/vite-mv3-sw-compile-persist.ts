import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-mv3-sw-compile-persist',
  description: 'Vite Chrome MV3 background service worker state (variables & timers) across restarts — automatically, persist state across SW restarts via chrome.storage.session and chrome.alarms',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'rollup',
    'chrome-extension',
    'browser-extension',
    'web-extension',
    'mv3',
    'manifest-v3',
    'service-worker',
    'service-worker-lifecycle',
    'background-script',
    'persistent-state',
    'state-persistence',
    'persist',
    'keep-alive',
    'chrome-alarms',
    'chrome-storage',
  ],
  links: {
    github: 'https://github.com/GameGC/vite-mv3-sw-compile-persist',
    npm: 'https://www.npmjs.com/package/vite-mv3-sw-compile-persist',
    website: 'https://github.com/GameGC/vite-mv3-sw-compile-persist#readme',
  },
  source: {
    github: 'GameGC/vite-mv3-sw-compile-persist',
    npm: 'vite-mv3-sw-compile-persist',
  },
})
