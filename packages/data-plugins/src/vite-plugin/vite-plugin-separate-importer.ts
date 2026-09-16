import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-separate-importer',
  description: 'Transform bulk imports from a single source module into individual file imports from the source module.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite-plugin-separate-importer',
  ],
  source: {
    github: 'fengxinming/vite-plugins',
    npm: 'vite-plugin-separate-importer',
  },
  links: {
    github: 'https://github.com/fengxinming/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-separate-importer',
    website: 'https://fengxinming.github.io/vite-plugins/plugins/vite-plugin-separate-importer/quick-start',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 389,
      weekly: 22,
    },
  },
})
