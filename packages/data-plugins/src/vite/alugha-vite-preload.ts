import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@alugha/vite-preload',
  description: 'Speed up your Vite application by preloading server rendered lazy modules and stylesheets as early as possible',
  version: '1.0.6',
  category: 'plugin',
  tags: [
    'react',
    'css',
    'ssr',
    'esmodules',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/wille/vite-preload',
    npm: 'https://www.npmjs.com/package/@alugha/vite-preload',
  },
  stats: {
    downloads: {
      monthly: 41,
      weekly: 10,
    },
  },
})
