import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rolldown/plugin-transform-imports',
  description: 'Rolldown plugin for transforming import/exports to barrel files',
  icon: 'logos:rolldown-icon',
  category: 'plugin',
  types: [
    'rolldown-plugin',
  ],
  tags: [
    'imports',
    'modularize',
    'plugin',
    'rolldown',
    'rolldown-plugin',
    'transform-imports',
    'tree-shaking',
  ],
  source: {
    github: 'rolldown/plugins',
    npm: '@rolldown/plugin-transform-imports',
  },
  links: {
    github: 'https://github.com/rolldown/plugins',
    npm: 'https://www.npmjs.com/package/@rolldown/plugin-transform-imports',
    website: 'https://github.com/rolldown/plugins/tree/main/packages/transform-imports#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 97225,
      weekly: 21337,
    },
  },
})
