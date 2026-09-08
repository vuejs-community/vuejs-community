import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-optimize-persist',
  description: 'Persist dynamically analyzed deps optimization',
  icon: 'logos:vite-icon',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'antfu/vite-plugin-optimize-persist',
    npm: 'vite-plugin-optimize-persist',
  },
  links: {
    github: 'https://github.com/antfu/vite-plugin-optimize-persist',
    npm: 'https://www.npmjs.com/package/vite-plugin-optimize-persist',
  },
  stats: {
    downloads: {
      monthly: 14154,
      weekly: 3335,
    },
  },
})
