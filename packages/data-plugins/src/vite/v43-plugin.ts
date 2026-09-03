import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@v43/plugin',
  description: 'V43 combined Vite plugin — includes ws, rpc, cli, editor, three, and drop plugins',
  version: '0.1.10',
  category: 'plugin',
  tags: [
    'v43',
    'vite',
    'three',
    'threejs',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/drawcall-ai/v43',
    npm: 'https://www.npmjs.com/package/@v43/plugin',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
