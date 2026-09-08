import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-iife',
  description: 'Vite plugin for simple IIFE-compiled script imports.',
  icon: 'logos:vite-icon',
  version: '2.1.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'iife',
    'vite',
    'import',
    'npm-package',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'kitschpatrol/vite-plugin-iife',
    npm: 'vite-plugin-iife',
  },
  links: {
    github: 'https://github.com/kitschpatrol/vite-plugin-iife',
    npm: 'https://www.npmjs.com/package/vite-plugin-iife',
  },
  stats: {
    downloads: {
      monthly: 77,
      weekly: 1,
    },
  },
})
