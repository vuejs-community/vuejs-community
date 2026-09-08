import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-twc',
  description: 'Tailwindcss plugin for vite',
  icon: 'logos:vite-icon',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'tailwindcss',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'gxmari007/vite-plugin-twc',
    npm: 'vite-plugin-twc',
  },
  links: {
    github: 'https://github.com/gxmari007/vite-plugin-twc',
    npm: 'https://www.npmjs.com/package/vite-plugin-twc',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 3,
    },
  },
})
