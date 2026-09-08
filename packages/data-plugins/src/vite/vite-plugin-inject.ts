import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-inject',
  description: 'Inject files into Vite output',
  icon: 'logos:vite-icon',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'MomsFriendlyDevCo/vite-plugin-inject',
    npm: 'vite-plugin-inject',
  },
  links: {
    github: 'https://github.com/MomsFriendlyDevCo/vite-plugin-inject',
    npm: 'https://www.npmjs.com/package/vite-plugin-inject',
  },
  stats: {
    downloads: {
      monthly: 137,
      weekly: 32,
    },
  },
})
