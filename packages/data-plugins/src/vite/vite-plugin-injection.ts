import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-injection',
  description: 'A vite plugin for injection the build time to the index html.',
  icon: 'logos:vite-icon',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'injection',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'jiatln/vite-plugin-injection',
    npm: 'vite-plugin-injection',
  },
  links: {
    github: 'https://github.com/jiatln/vite-plugin-injection',
    npm: 'https://www.npmjs.com/package/vite-plugin-injection',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 5,
    },
  },
})
