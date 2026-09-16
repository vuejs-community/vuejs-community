import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@v43/plugin-editor',
  description: 'V43 editor plugin for Vite — in-browser editor with tweakpane, system templates, and scene inspector',
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
    'editor',
  ],
  source: {
    github: 'drawcall-ai/v43',
    npm: '@v43/plugin-editor',
  },
  links: {
    github: 'https://github.com/drawcall-ai/v43',
    npm: 'https://www.npmjs.com/package/@v43/plugin-editor',
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
