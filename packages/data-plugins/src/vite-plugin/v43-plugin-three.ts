import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@v43/plugin-three',
  description: 'V43 Three.js plugin for Vite — auto-discovers *.system.ts files, generates HTML/entry, handles HMR',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'v43',
    'vite',
    'three',
    'threejs',
    'vite-plugin',
    'three',
  ],
  links: {
    github: 'https://github.com/drawcall-ai/v43',
    npm: 'https://www.npmjs.com/package/@v43/plugin-three',
    website: 'https://github.com/drawcall-ai/v43#readme',
  },
  source: {
    github: 'drawcall-ai/v43',
    npm: '@v43/plugin-three',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
