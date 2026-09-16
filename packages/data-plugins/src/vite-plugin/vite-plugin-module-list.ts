import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-module-list',
  description: 'Vite plugin that writes a module that dynamically imports modules found in a folder.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'module',
    'generator',
    'import',
  ],
  source: {
    github: 'davidbonnet/vite-plugin-module-list',
    npm: 'vite-plugin-module-list',
  },
  links: {
    github: 'https://github.com/davidbonnet/vite-plugin-module-list',
    npm: 'https://www.npmjs.com/package/vite-plugin-module-list',
    website: 'https://github.com/davidbonnet/vite-plugin-module-list#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 443,
      weekly: 48,
    },
  },
})
