import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'create-minista',
  description: '簡単なコマンド入力で[minista](https://minista.qranoko.jp/)のプロジェクトを開始できます。',
  version: '4.0.11',
  category: 'plugin',
  tags: [
    'static-site-generator',
    'ssg',
    'react',
    'vite-plugin',
    'minista',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/qrac/minista',
    npm: 'https://www.npmjs.com/package/create-minista',
  },
  stats: {
    downloads: {
      monthly: 581,
      weekly: 346,
    },
  },
})
