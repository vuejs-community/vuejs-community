import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-fps-meter',
  description: 'vite-plugin-fps-meter is a tiny Vite plugin that overlays a live FPS / ms badge (with p95/p99 and Long Task %) on your app. It can auto-inject in dev or build, toggles via URL/localStorage, adapts to Vite\'s error overlay, and exposes a simple runtime API.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'fps',
    'performance',
    'fps-meter',
    'frame-time',
    'longtask',
    'devtools',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ux-ui-pro/vite-plugin-fps-meter',
    npm: 'https://www.npmjs.com/package/vite-plugin-fps-meter',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 6,
    },
  },
})
