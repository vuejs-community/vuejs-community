import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-injection',
  description: 'A vite plugin for injection the build time to the index html.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'injection',
  ],
  links: {
    github: 'https://github.com/jiatln/vite-plugin-injection',
    npm: 'https://www.npmjs.com/package/vite-plugin-injection',
    website: 'https://github.com/jiatln/vite-plugin-injection#readme',
  },
  source: {
    github: 'jiatln/vite-plugin-injection',
    npm: 'vite-plugin-injection',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
