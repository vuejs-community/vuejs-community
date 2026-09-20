import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-goodscript',
  description: 'Vite plugin for GoodScript - compile -gs.ts files on-the-fly with full HMR support',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/fcapolini/goodscript',
    npm: 'https://www.npmjs.com/package/vite-plugin-goodscript',
    website: 'https://github.com/fcapolini/goodscript/tree/main/vite-plugin#readme',
  },
  source: {
    github: 'fcapolini/goodscript',
    npm: 'vite-plugin-goodscript',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 0,
    },
  },
})
