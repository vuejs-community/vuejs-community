import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-miniprogram-ci',
  description: 'A miniprogram CI plugin for Vite to execute commands after build',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'miniprogram-ci',
    'vite-miniprogram-ci',
    'vite',
    'vite-plugin',
    'ci',
    'build',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Yuan993-Creator/vite-miniprogram-ci',
    npm: 'https://www.npmjs.com/package/vite-miniprogram-ci',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 6,
    },
  },
})
