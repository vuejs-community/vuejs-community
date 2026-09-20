import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@claude-canvas/vite-plugin',
  description: 'Vite plugin for visual annotation → Claude code modification → HMR verification',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'claude',
    'annotation',
    'devtools',
  ],
  links: {
    github: 'https://github.com/whdudguq/claude-canvas',
    npm: 'https://www.npmjs.com/package/@claude-canvas/vite-plugin',
    website: 'https://github.com/whdudguq/claude-canvas#readme',
  },
  source: {
    github: 'whdudguq/claude-canvas',
    npm: '@claude-canvas/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 28,
      weekly: 3,
    },
  },
})
