import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@plumeria/unplugin',
  description: 'Universal Plumeria plugin for various build tools',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'plumeria',
    'css',
    'unplugin',
    'vite',
    'webpack',
    'rspack',
    'esbuild',
    'farm',
    'rollup',
    'rolldown',
    'bun',
  ],
  source: {
    github: 'zss-in-js/plumeria',
    npm: '@plumeria/unplugin',
  },
  links: {
    github: 'https://github.com/zss-in-js/plumeria',
    npm: 'https://www.npmjs.com/package/@plumeria/unplugin',
    website: 'https://plumeria.dev',
  },
  stats: {
    stars: 23,
    downloads: {
      monthly: 9499,
      weekly: 1483,
    },
  },
})
