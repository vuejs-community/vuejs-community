import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-test-selectors',
  description: 'Vite plugin for stripping test selectors in production builds',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'test selectors',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/kiosion/vite-plugin-test-selectors',
    npm: 'https://www.npmjs.com/package/vite-plugin-test-selectors',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 2,
    },
  },
})
