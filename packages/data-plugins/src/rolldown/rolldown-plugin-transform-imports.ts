import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@rolldown/plugin-transform-imports',
  description: 'Rolldown plugin for transforming import/exports to barrel files',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'imports',
    'modularize',
    'plugin',
    'rolldown',
    'rolldown-plugin',
    'transform-imports',
    'tree-shaking',
  ],
  types: [
    'rolldown-plugin',
  ],
  links: {
    github: 'https://github.com/rolldown/plugins',
    npm: 'https://www.npmjs.com/package/@rolldown/plugin-transform-imports',
  },
  stats: {
    downloads: {
      monthly: 92404,
      weekly: 24472,
    },
  },
})
