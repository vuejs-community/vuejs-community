import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@happyseeds/devtools',
  description: 'Preview-environment devtools for Vite apps: a zero-dependency browser runtime that reports errors, routes and element picks over postMessage, plus the Vite plugin and React overlay that make element picking work',
  version: '0.1.0-preview.0',
  category: 'plugin',
  tags: [
    'devtools',
    'inspector',
    'preview',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/happyseeds/happyseeds',
    npm: 'https://www.npmjs.com/package/@happyseeds/devtools',
  },
  stats: {
    downloads: {
      monthly: 576,
      weekly: 65,
    },
  },
})
