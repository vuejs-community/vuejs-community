import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-marked-mpa',
  description: 'A Vite plugin for rendering Markdown files to HTML for Multi-Page Applications',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'marked',
    'markdown',
    'commonmark',
    'gfm',
    'mpa',
    'static-site',
  ],
  links: {
    github: 'https://github.com/bent10/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-marked-mpa',
    website: 'https://github.com/bent10/vite-plugins/tree/main/packages/plugin-marked-mpa',
  },
  source: {
    github: 'bent10/vite-plugins',
    npm: 'vite-plugin-marked-mpa',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 49,
      weekly: 2,
    },
  },
})
