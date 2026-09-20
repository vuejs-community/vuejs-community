import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-compress-dist',
  description: 'A Vite plugin to compress the dist folder after build',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'zip',
    'dist',
    'compress',
    'archive',
  ],
  links: {
    github: 'https://github.com/lvzhenbo/vite-plugin-compress-dist',
    npm: 'https://www.npmjs.com/package/vite-plugin-compress-dist',
    website: 'https://github.com/lvzhenbo/vite-plugin-compress-dist#readme',
  },
  source: {
    github: 'lvzhenbo/vite-plugin-compress-dist',
    npm: 'vite-plugin-compress-dist',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 2,
    },
  },
})
