import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-lucky',
  description: 'A plugin to make Vite play nice with Lucky Framework',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'crystal',
    'lucky',
    'luckyframework',
    'plugin',
    'vite',
    'vite-plugin',
    'vitejs',
  ],
  source: {
    github: 'wout/vite-plugin-lucky',
    npm: 'vite-plugin-lucky',
  },
  links: {
    github: 'https://github.com/wout/vite-plugin-lucky',
    npm: 'https://www.npmjs.com/package/vite-plugin-lucky',
    website: 'https://github.com/wout/vite-plugin-lucky#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 33,
      weekly: 3,
    },
  },
})
