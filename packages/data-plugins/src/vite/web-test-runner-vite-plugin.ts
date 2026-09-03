import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'web-test-runner-vite-plugin',
  description: 'An @web/test-runner plugin to test Vite-powered projects.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'plugin',
    'vite',
    'vite-plugin',
    'web-test-runner',
    '@web',
    '@web/test-runner',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/pndewit/web-test-runner-vite-plugin',
    npm: 'https://www.npmjs.com/package/web-test-runner-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 26,
      weekly: 7,
    },
  },
})
