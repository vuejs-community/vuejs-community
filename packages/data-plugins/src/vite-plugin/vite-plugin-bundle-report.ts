import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bundle-report',
  description: 'Vite plugin built on rollup-plugin-visualizer that emits a combined bundle and dependency report.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'rollup',
    'rollup-plugin',
    'bundle',
    'report',
    'analyzer',
    'dependencies',
  ],
  source: {
    npm: 'vite-plugin-bundle-report',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-bundle-report',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 4,
    },
  },
})
