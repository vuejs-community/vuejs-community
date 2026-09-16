import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-eslint-panda',
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
    npm: 'vite-plugin-eslint-panda',
  },
  links: {
    github: 'https://github.com/gxmari007/vite-plugin-eslint',
    npm: 'https://www.npmjs.com/package/vite-plugin-eslint-panda',
    website: 'https://github.com/gxmari007/vite-plugin-eslint',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 7,
      weekly: 2,
    },
  },
})
