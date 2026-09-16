import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-fps-meter',
  description: 'vite-plugin-fps-meter is a tiny Vite plugin that overlays a live FPS / ms badge (with p95/p99 and Long Task %) on your app. It can auto-inject in dev or build, toggles via URL/localStorage, adapts to Vite\'s error overlay, and exposes a simple runtime API.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'ux-ui-pro/vite-plugin-fps-meter',
    npm: 'vite-plugin-fps-meter',
  },
  links: {
    github: 'https://github.com/ux-ui-pro/vite-plugin-fps-meter',
    npm: 'https://www.npmjs.com/package/vite-plugin-fps-meter',
    website: 'https://github.com/ux-ui-pro/vite-plugin-fps-meter',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 28,
      weekly: 4,
    },
  },
})
