import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@forinda/kickjs-vite',
  description: 'Vite plugin for KickJS — dev server integration, HMR, virtual modules, httpServer piping',
  version: '8.0.0',
  category: 'plugin',
  tags: [
    'kickjs',
    'nodejs',
    'typescript',
    'decorator-driven',
    'vite',
    'vite-plugin',
    'hmr',
    'hot-module-replacement',
    'dev-server',
    'ssr',
    'virtual-modules',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/forinda/kick-js',
    npm: 'https://www.npmjs.com/package/@forinda/kickjs-vite',
  },
  stats: {
    downloads: {
      monthly: 398,
      weekly: 75,
    },
  },
})
