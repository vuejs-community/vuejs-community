import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@v43/plugin',
  description: 'V43 combined Vite plugin — includes ws, rpc, cli, editor, three, and drop plugins',
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
  ],
  source: {
    github: 'drawcall-ai/v43',
    npm: '@v43/plugin',
  },
  links: {
    github: 'https://github.com/drawcall-ai/v43',
    npm: 'https://www.npmjs.com/package/@v43/plugin',
    website: 'https://github.com/drawcall-ai/v43#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
