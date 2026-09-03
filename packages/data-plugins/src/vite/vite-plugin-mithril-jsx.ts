import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mithril-jsx',
  description: 'Vite plugin that configures JSX for Mithril.js — works with all Vite versions (esbuild ≤ 5, rolldown/OXC 7+).',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'mithril',
    'mithriljs',
    'jsx',
    'rolldown',
    'oxc',
    'esbuild',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/DeJy/vite-plugin-mithril-jsx',
    npm: 'https://www.npmjs.com/package/vite-plugin-mithril-jsx',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 2,
    },
  },
})
