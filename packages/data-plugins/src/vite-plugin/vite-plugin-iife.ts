import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-iife',
  description: 'Vite plugin for simple IIFE-compiled script imports.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'iife',
    'vite',
    'import',
    'npm-package',
  ],
  source: {
    github: 'kitschpatrol/vite-plugin-iife',
    npm: 'vite-plugin-iife',
  },
  links: {
    github: 'https://github.com/kitschpatrol/vite-plugin-iife',
    npm: 'https://www.npmjs.com/package/vite-plugin-iife',
    website: 'https://github.com/kitschpatrol/vite-plugin-iife',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 24,
      weekly: 5,
    },
  },
})
