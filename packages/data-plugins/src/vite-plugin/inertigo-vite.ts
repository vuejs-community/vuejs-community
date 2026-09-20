import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'inertigo-vite',
  description: 'Vite plugin for Inertigo - The Inertia.js adapter for Go',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'inertia',
    'inertigo',
    'go',
    'ssr',
    'server-side-rendering',
  ],
  links: {
    github: 'https://github.com/joetifa2003/inertigo',
    npm: 'https://www.npmjs.com/package/inertigo-vite',
    website: 'https://github.com/joetifa2003/inertigo#readme',
  },
  source: {
    github: 'joetifa2003/inertigo',
    npm: 'inertigo-vite',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
