import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@forinda/kickjs-vite',
  description: 'Vite plugin for KickJS — dev server integration, HMR, virtual modules, httpServer piping',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/forinda/kick-js',
    npm: 'https://www.npmjs.com/package/@forinda/kickjs-vite',
    website: 'https://kickjs.app/',
  },
  source: {
    github: 'forinda/kick-js',
    npm: '@forinda/kickjs-vite',
  },
  stats: {
    stars: 15,
    downloads: {
      monthly: 252,
      weekly: 41,
    },
  },
})
