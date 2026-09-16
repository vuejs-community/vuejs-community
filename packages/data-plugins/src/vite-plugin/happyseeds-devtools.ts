import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@happyseeds/devtools',
  description: 'Preview-environment devtools for Vite apps: a zero-dependency browser runtime that reports errors, routes and element picks over postMessage, plus the Vite plugin and React overlay that make element picking work',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'devtools',
    'inspector',
    'preview',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'happyseeds/happyseeds',
    npm: '@happyseeds/devtools',
  },
  links: {
    github: 'https://github.com/happyseeds/happyseeds',
    npm: 'https://www.npmjs.com/package/@happyseeds/devtools',
    website: 'https://github.com/happyseeds/happyseeds#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 948,
      weekly: 51,
    },
  },
})
