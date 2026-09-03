import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-glob-opts',
  description: 'Helps maintaining many Rollup build targets by using file glob patterns.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'expand',
    'files',
    'glob',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/prantlf/rollup-glob-opts',
    npm: 'https://www.npmjs.com/package/rollup-glob-opts',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 3,
    },
  },
})
