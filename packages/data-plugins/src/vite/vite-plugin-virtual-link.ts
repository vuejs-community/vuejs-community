import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-virtual-link',
  description: 'Vite plugin for developing against local projects on disk — with correct dependency isolation, zero symlinks, and no changes to node_modules.',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'symlink',
    'link',
    'monorepo',
    'local-development',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/EnixCoda/vite-plugin-virtual-link',
    npm: 'https://www.npmjs.com/package/vite-plugin-virtual-link',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 2,
    },
  },
})
