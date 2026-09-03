import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-fluent',
  description: 'Vite plugin for type-safe function code generation for Fluent Translation files',
  version: '0.4.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'fluent',
    'i18n',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/junlarsen/vite-plugin-fluent',
    npm: 'https://www.npmjs.com/package/vite-plugin-fluent',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 4,
    },
  },
})
