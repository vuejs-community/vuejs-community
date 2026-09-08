import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-devcert',
  description: '',
  icon: 'logos:vite-icon',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'https',
    'devcert',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'xinup/vite-plugin-devcert',
    npm: 'vite-plugin-devcert',
  },
  links: {
    github: 'https://github.com/xinup/vite-plugin-devcert',
    npm: 'https://www.npmjs.com/package/vite-plugin-devcert',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
