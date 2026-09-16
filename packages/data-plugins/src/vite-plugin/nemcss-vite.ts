import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nemcss/vite',
  description: 'Plugin to support nemcss',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  source: {
    github: 'liv7c/nemcss',
    npm: '@nemcss/vite',
  },
  links: {
    github: 'https://github.com/liv7c/nemcss',
    npm: 'https://www.npmjs.com/package/@nemcss/vite',
    website: 'https://github.com/liv7c/nemcss#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 381,
      weekly: 160,
    },
  },
})
