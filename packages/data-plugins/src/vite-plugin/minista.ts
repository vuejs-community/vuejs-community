import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'minista',
  description: '- https://minista.qranoko.jp',
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
    npm: 'minista',
  },
  links: {
    github: 'https://github.com/qrac/minista',
    npm: 'https://www.npmjs.com/package/minista',
    website: 'https://minista.qranoko.jp',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1224,
      weekly: 167,
    },
  },
})
