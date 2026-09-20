import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-miniprogram-ci',
  description: 'A miniprogram CI plugin for Vite to execute commands after build',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'miniprogram-ci',
    'vite-miniprogram-ci',
    'vite',
    'vite-plugin',
    'ci',
    'build',
  ],
  links: {
    github: 'https://github.com/Yuan993-Creator/vite-miniprogram-ci',
    npm: 'https://www.npmjs.com/package/vite-miniprogram-ci',
    website: 'https://github.com/Yuan993-Creator/vite-miniprogram-ci#readme',
  },
  source: {
    github: 'Yuan993-Creator/vite-miniprogram-ci',
    npm: 'vite-miniprogram-ci',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
