import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-robots-ts',
  description: 'Vite plugin to generate robots.txt. Supports AI blocking and works in dev mode.',
  icon: 'logos:vite-icon',
  version: '2.1.6',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vite robots',
    'robots',
    'robots.txt',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'kyco/vite-plugin-robots-ts',
    npm: 'vite-plugin-robots-ts',
  },
  links: {
    github: 'https://github.com/kyco/vite-plugin-robots-ts',
    npm: 'https://www.npmjs.com/package/vite-plugin-robots-ts',
  },
  stats: {
    downloads: {
      monthly: 123,
      weekly: 34,
    },
  },
})
