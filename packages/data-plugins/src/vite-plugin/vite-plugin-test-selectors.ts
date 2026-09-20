import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-test-selectors',
  description: 'Vite plugin for stripping test selectors in production builds',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'test selectors',
  ],
  links: {
    github: 'https://github.com/kiosion/vite-plugin-test-selectors',
    npm: 'https://www.npmjs.com/package/vite-plugin-test-selectors',
  },
  source: {
    github: 'kiosion/vite-plugin-test-selectors',
    npm: 'vite-plugin-test-selectors',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 22,
      weekly: 4,
    },
  },
})
