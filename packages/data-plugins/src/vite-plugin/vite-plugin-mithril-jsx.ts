import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mithril-jsx',
  description: 'Vite plugin that configures JSX for Mithril.js — works with all Vite versions (esbuild ≤ 5, rolldown/OXC 7+).',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'DeJy/vite-plugin-mithril-jsx',
    npm: 'vite-plugin-mithril-jsx',
  },
  links: {
    github: 'https://github.com/DeJy/vite-plugin-mithril-jsx',
    npm: 'https://www.npmjs.com/package/vite-plugin-mithril-jsx',
    website: 'https://github.com/DeJy/vite-plugin-mithril-jsx#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 2,
    },
  },
})
