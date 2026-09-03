import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@relative-ci/rollup-plugin',
  description: 'Rollup/Vite/Rolldown plugin that sends bundle stats and CI build information to RelativeCI',
  version: '5.4.0',
  category: 'plugin',
  tags: [
    'relative-ci',
    'rollup',
    'rollup-plugin',
    'vite',
    'vite-plugin',
    'rolldown',
    'rolldown-plugin',
    'bundle-size',
    'bundle-analyzer',
    'bundle-stats',
    'stats',
    'bundle',
    'size',
    'assets',
    'chunks',
    'modules',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/relative-ci/agent',
    npm: 'https://www.npmjs.com/package/@relative-ci/rollup-plugin',
  },
  stats: {
    downloads: {
      monthly: 362,
      weekly: 237,
    },
  },
})
