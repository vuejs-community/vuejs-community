import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-clean-css',
  description: 'Optimize CSS for production using clean-css',
  icon: 'logos:vite-icon',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'clean-css',
    'vite',
    'vite-plugin',
    'vue',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'Mini-ghost/vite-plugin-clean-css',
    npm: 'vite-plugin-clean-css',
  },
  links: {
    github: 'https://github.com/Mini-ghost/vite-plugin-clean-css',
    npm: 'https://www.npmjs.com/package/vite-plugin-clean-css',
  },
  stats: {
    downloads: {
      monthly: 624,
      weekly: 83,
    },
  },
})
