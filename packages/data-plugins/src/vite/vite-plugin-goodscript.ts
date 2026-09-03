import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-goodscript',
  description: 'Vite plugin for GoodScript - compile -gs.ts files on-the-fly with full HMR support',
  version: '0.4.0',
  category: 'plugin',
  tags: [
    'goodscript',
    'vite',
    'vite-plugin',
    'typescript',
    'compiler',
    'ownership',
    'react',
    'vue',
    'hmr',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/fcapolini/goodscript',
    npm: 'https://www.npmjs.com/package/vite-plugin-goodscript',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 7,
    },
  },
})
