import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@thunderclap-engine/host-pwa',
  description: 'ThunderClap\'s installable web shell: a Vite plugin that emits a game\'s web manifest and service worker at build time, and createPwaHost(), the web Host plus install, update, offline and cache state. It knows nothing about any game and has no runtime depen',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'thunderclap',
    'pwa',
    'service-worker',
    'vite-plugin',
    'webgpu',
    'game-engine',
  ],
  links: {
    github: 'https://github.com/Mandalorian007/thunderclap-engine',
    npm: 'https://www.npmjs.com/package/@thunderclap-engine/host-pwa',
    website: 'https://github.com/Mandalorian007/thunderclap-engine/tree/main/packages/host-pwa#readme',
  },
  source: {
    github: 'Mandalorian007/thunderclap-engine',
    npm: '@thunderclap-engine/host-pwa',
  },
})
