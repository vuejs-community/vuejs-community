import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-module-list',
  description: 'Vite plugin that writes a module that dynamically imports modules found in a folder.',
  icon: 'logos:vite-icon',
  version: '2.6.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'module',
    'generator',
    'import',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'davidbonnet/vite-plugin-module-list',
    npm: 'vite-plugin-module-list',
  },
  links: {
    github: 'https://github.com/davidbonnet/vite-plugin-module-list',
    npm: 'https://www.npmjs.com/package/vite-plugin-module-list',
  },
  stats: {
    downloads: {
      monthly: 447,
      weekly: 162,
    },
  },
})
