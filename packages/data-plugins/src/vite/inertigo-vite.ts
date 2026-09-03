import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'inertigo-vite',
  description: 'Vite plugin for Inertigo - The Inertia.js adapter for Go',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'inertia',
    'inertigo',
    'go',
    'ssr',
    'server-side-rendering',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/joetifa2003/inertigo',
    npm: 'https://www.npmjs.com/package/inertigo-vite',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
