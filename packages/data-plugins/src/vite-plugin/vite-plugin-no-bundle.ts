import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-no-bundle',
  description: 'Use Vite for building without the bundling part.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'unbundle',
  ],
  source: {
    github: 'ManBearTM/vite-plugin-no-bundle',
    npm: 'vite-plugin-no-bundle',
  },
  links: {
    github: 'https://github.com/ManBearTM/vite-plugin-no-bundle',
    npm: 'https://www.npmjs.com/package/vite-plugin-no-bundle',
    website: 'https://github.com/ManBearTM/vite-plugin-no-bundle#readme',
  },
  stats: {
    stars: 69,
    downloads: {
      monthly: 24390,
      weekly: 4713,
    },
  },
})
