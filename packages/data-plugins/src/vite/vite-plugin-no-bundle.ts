import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-no-bundle',
  description: 'Use Vite for building without the bundling part.',
  icon: 'logos:vite-icon',
  version: '4.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'unbundle',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'ManBearTM/vite-plugin-no-bundle',
    npm: 'vite-plugin-no-bundle',
  },
  links: {
    github: 'https://github.com/ManBearTM/vite-plugin-no-bundle',
    npm: 'https://www.npmjs.com/package/vite-plugin-no-bundle',
  },
  stats: {
    downloads: {
      monthly: 27160,
      weekly: 6966,
    },
  },
})
