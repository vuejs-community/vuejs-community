import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-pug-static-builder',
  description: 'Vite + Pugを使用した静的サイトビルダー - 複数のPugファイルを静的HTMLとしてビルドするViteプラグイン',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'static',
    'pug',
    'static-site',
    'site-builder',
    'html-generator',
  ],
  source: {
    github: 'ozekimasaki/vite-pug-static-builder',
    npm: 'vite-pug-static-builder',
  },
  links: {
    github: 'https://github.com/ozekimasaki/vite-pug-static-builder',
    npm: 'https://www.npmjs.com/package/vite-pug-static-builder',
    website: 'https://github.com/ozekimasaki/vite-pug-static-builder#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 316,
      weekly: 17,
    },
  },
})
