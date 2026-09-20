import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@relative-ci/rollup-plugin',
  description: 'Rollup/Vite/Rolldown plugin that sends bundle stats and CI build information to RelativeCI',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/relative-ci/agent',
    npm: 'https://www.npmjs.com/package/@relative-ci/rollup-plugin',
    website: 'https://relative-ci.com/documentation/setup/agent/rollup-plugin',
  },
  source: {
    github: 'relative-ci/agent',
    npm: '@relative-ci/rollup-plugin',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 334,
      weekly: 14,
    },
  },
})
