import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@fps-games/vite-plugins',
  description: 'Vite plugin collection for playable ad / HTML5 game builds — asset versioning, GLB compression, PNG optimization, locale fallback, dependency allowlist, Babylon.js tree-shaking & inspector.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'playable-ad',
    'babylonjs',
    'glb',
    'compression',
    'tree-shaking',
    'html5-game',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@fps-games/vite-plugins',
  },
  source: {
    npm: '@fps-games/vite-plugins',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 31,
      weekly: 3,
    },
  },
})
