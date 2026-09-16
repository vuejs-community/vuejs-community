import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@qinxl/vite-plugin-eslint',
  description: 'ESLint plugin for vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'eslint',
    'vite-plugin',
  ],
  source: {
    github: 'gxmari007/vite-plugin-eslint',
    npm: '@qinxl/vite-plugin-eslint',
  },
  links: {
    github: 'https://github.com/gxmari007/vite-plugin-eslint',
    npm: 'https://www.npmjs.com/package/@qinxl/vite-plugin-eslint',
    website: 'https://github.com/gxmari007/vite-plugin-eslint',
  },
  stats: {
    stars: 280,
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
