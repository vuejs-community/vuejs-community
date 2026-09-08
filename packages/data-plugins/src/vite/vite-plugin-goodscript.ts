import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-goodscript',
  description: 'Vite plugin for GoodScript - compile -gs.ts files on-the-fly with full HMR support',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'fcapolini/goodscript',
    npm: 'vite-plugin-goodscript',
  },
  links: {
    github: 'https://github.com/fcapolini/goodscript',
    npm: 'https://www.npmjs.com/package/vite-plugin-goodscript',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 5,
    },
  },
})
