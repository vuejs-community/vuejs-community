import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sfce',
  description: 'Single-file custom elements with vite',
  icon: 'logos:vite-icon',
  version: '0.2.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'custom-elements',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'sotnikovse/vitempl',
    npm: 'vite-plugin-sfce',
  },
  links: {
    github: 'https://github.com/sotnikovse/vitempl',
    npm: 'https://www.npmjs.com/package/vite-plugin-sfce',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 5,
    },
  },
})
