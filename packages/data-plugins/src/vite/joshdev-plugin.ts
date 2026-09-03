import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'joshdev-plugin',
  description: 'Vite plugin for PHP MVC frameworks with hot reload and asset management created by JoshDev.',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'php',
    'mvc',
    'hot-reload',
    'hmr',
    'asset-management',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/joshdevkit/vite-plugin-joshdevfr',
    npm: 'https://www.npmjs.com/package/joshdev-plugin',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 5,
    },
  },
})
