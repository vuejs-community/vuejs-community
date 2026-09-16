import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-external',
  description: 'Excludes specified module dependencies from runtime code and built bundles.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vite-plugin-external',
  ],
  source: {
    github: 'fengxinming/vite-plugins',
    npm: 'vite-plugin-external',
  },
  links: {
    github: 'https://github.com/fengxinming/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-external',
    website: 'https://fengxinming.github.io/vite-plugins/plugins/vite-plugin-external/quick-start',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 52307,
      weekly: 8824,
    },
  },
})
