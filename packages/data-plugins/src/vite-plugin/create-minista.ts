import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'create-minista',
  description: '簡単なコマンド入力で[minista](https://minista.qranoko.jp/)のプロジェクトを開始できます。',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'static-site-generator',
    'ssg',
    'react',
    'vite-plugin',
    'minista',
  ],
  source: {
    github: 'qrac/minista',
    npm: 'create-minista',
  },
  links: {
    github: 'https://github.com/qrac/minista',
    npm: 'https://www.npmjs.com/package/create-minista',
    website: 'https://minista.qranoko.jp',
  },
  stats: {
    stars: 209,
    downloads: {
      monthly: 632,
      weekly: 44,
    },
  },
})
