import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-fluent',
  description: 'Vite plugin for type-safe function code generation for Fluent Translation files',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'fluent',
    'i18n',
  ],
  source: {
    github: 'junlarsen/vite-plugin-fluent',
    npm: 'vite-plugin-fluent',
  },
  links: {
    github: 'https://github.com/junlarsen/vite-plugin-fluent',
    npm: 'https://www.npmjs.com/package/vite-plugin-fluent',
    website: 'https://github.com/junlarsen/vite-plugin-fluent',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 34,
      weekly: 4,
    },
  },
})
