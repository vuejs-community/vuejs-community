import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-virtual-link',
  description: 'Vite plugin for developing against local projects on disk — with correct dependency isolation, zero symlinks, and no changes to node_modules.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'symlink',
    'link',
    'monorepo',
    'local-development',
  ],
  source: {
    github: 'EnixCoda/vite-plugin-virtual-link',
    npm: 'vite-plugin-virtual-link',
  },
  links: {
    github: 'https://github.com/EnixCoda/vite-plugin-virtual-link',
    npm: 'https://www.npmjs.com/package/vite-plugin-virtual-link',
    website: 'https://github.com/EnixCoda/vite-plugin-virtual-link',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 15,
      weekly: 1,
    },
  },
})
