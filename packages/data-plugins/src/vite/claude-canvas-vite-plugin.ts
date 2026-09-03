import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@claude-canvas/vite-plugin',
  description: 'Vite plugin for visual annotation → Claude code modification → HMR verification',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'claude',
    'annotation',
    'devtools',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/whdudguq/claude-canvas',
    npm: 'https://www.npmjs.com/package/@claude-canvas/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 32,
      weekly: 9,
    },
  },
})
