import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-indexer',
  description: 'Package to automate indexing before bundling of files in rollup.',
  version: '3.1.2',
  category: 'plugin',
  tags: [
    'index',
    'typescript',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/NDA-Software/rollup-plugin-indexer',
    npm: 'https://www.npmjs.com/package/rollup-plugin-indexer',
  },
  stats: {
    downloads: {
      monthly: 54,
      weekly: 7,
    },
  },
})
