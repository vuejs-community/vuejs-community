import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@v43/plugin-three',
  description: 'V43 Three.js plugin for Vite — auto-discovers *.system.ts files, generates HTML/entry, handles HMR',
  version: '0.1.10',
  category: 'plugin',
  tags: [
    'v43',
    'vite',
    'three',
    'threejs',
    'vite-plugin',
    'three',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/drawcall-ai/v43',
    npm: 'https://www.npmjs.com/package/@v43/plugin-three',
  },
  stats: {
    downloads: {
      monthly: 22,
      weekly: 2,
    },
  },
})
