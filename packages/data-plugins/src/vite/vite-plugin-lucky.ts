import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-lucky',
  description: 'A plugin to make Vite play nice with Lucky Framework',
  icon: 'logos:vite-icon',
  version: '0.6.0',
  category: 'plugin',
  tags: [
    'crystal',
    'lucky',
    'luckyframework',
    'plugin',
    'vite',
    'vite-plugin',
    'vitejs',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'wout/vite-plugin-lucky',
    npm: 'vite-plugin-lucky',
  },
  links: {
    github: 'https://github.com/wout/vite-plugin-lucky',
    npm: 'https://www.npmjs.com/package/vite-plugin-lucky',
  },
  stats: {
    downloads: {
      monthly: 42,
      weekly: 2,
    },
  },
})
