import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-separate-importer',
  description: 'Transform bulk imports from a single source module into individual file imports from the source module.',
  icon: 'logos:vite-icon',
  version: '8.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite-plugin-separate-importer',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'fengxinming/vite-plugins',
    npm: 'vite-plugin-separate-importer',
  },
  links: {
    github: 'https://github.com/fengxinming/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-separate-importer',
  },
  stats: {
    downloads: {
      monthly: 355,
      weekly: 60,
    },
  },
})
