import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@fps-games/vite-plugins',
  description: 'Vite plugin collection for playable ad / HTML5 game builds — asset versioning, GLB compression, PNG optimization, locale fallback, dependency allowlist, Babylon.js tree-shaking & inspector.',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'playable-ad',
    'babylonjs',
    'glb',
    'compression',
    'tree-shaking',
    'html5-game',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@fps-games/vite-plugins',
  },
  stats: {
    downloads: {
      monthly: 37,
      weekly: 3,
    },
  },
})
