import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-typescript-path-mapping',
  description: 'Resolving module path which applies typescript\'s path mapping rule',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'resolve',
    'alias',
    'typescript',
    'path-mapping',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/Mutefish0/rollup-plugin-typescript-path-mapping',
    npm: 'https://www.npmjs.com/package/rollup-plugin-typescript-path-mapping',
  },
  stats: {
    downloads: {
      monthly: 34,
      weekly: 13,
    },
  },
})
