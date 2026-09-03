import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@v43/plugin-editor',
  description: 'V43 editor plugin for Vite — in-browser editor with tweakpane, system templates, and scene inspector',
  version: '0.1.10',
  category: 'plugin',
  tags: [
    'v43',
    'vite',
    'three',
    'threejs',
    'vite-plugin',
    'editor',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/drawcall-ai/v43',
    npm: 'https://www.npmjs.com/package/@v43/plugin-editor',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
