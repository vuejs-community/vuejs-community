import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-pug-static-builder',
  description: 'Vite + Pugを使用した静的サイトビルダー - 複数のPugファイルを静的HTMLとしてビルドするViteプラグイン',
  version: '1.3.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'static',
    'pug',
    'static-site',
    'site-builder',
    'html-generator',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ozekimasaki/vite-pug-static-builder',
    npm: 'https://www.npmjs.com/package/vite-pug-static-builder',
  },
  stats: {
    downloads: {
      monthly: 369,
      weekly: 34,
    },
  },
})
