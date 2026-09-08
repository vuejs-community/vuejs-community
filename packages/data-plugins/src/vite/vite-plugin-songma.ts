import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-songma',
  description: 'Vite plugin to transpile and bundle SongMa (.smjs / .smts / .smjx / .smtx) files in React, Vue, Svelte and Vanilla projects',
  icon: 'logos:vite-icon',
  version: '0.4.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'songma',
    'vietlang',
    'transpiler',
    'vietnamese',
    'react',
    'jsx',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'LuongHaMinhVy/SongMa',
    npm: 'vite-plugin-songma',
  },
  links: {
    github: 'https://github.com/LuongHaMinhVy/SongMa',
    npm: 'https://www.npmjs.com/package/vite-plugin-songma',
  },
  stats: {
    downloads: {
      monthly: 555,
      weekly: 555,
    },
  },
})
