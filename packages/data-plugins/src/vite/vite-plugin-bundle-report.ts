import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bundle-report',
  description: 'Vite plugin built on rollup-plugin-visualizer that emits a combined bundle and dependency report.',
  icon: 'logos:vite-icon',
  version: '0.2.0',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-bundle-report',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-bundle-report',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
