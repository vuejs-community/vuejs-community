import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-indexer',
  description: 'Package to automate indexing before bundling of files in rollup.',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'NDA-Software/rollup-plugin-indexer',
    npm: 'rollup-plugin-indexer',
  },
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
