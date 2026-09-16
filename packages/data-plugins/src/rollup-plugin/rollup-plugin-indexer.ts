import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-indexer',
  description: 'Package to automate indexing before bundling of files in rollup.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'index',
    'typescript',
    'rollup-plugin',
  ],
  source: {
    github: 'NDA-Software/rollup-plugin-indexer',
    npm: 'rollup-plugin-indexer',
  },
  links: {
    github: 'https://github.com/NDA-Software/rollup-plugin-indexer',
    npm: 'https://www.npmjs.com/package/rollup-plugin-indexer',
    website: 'https://github.com/NDA-Software/rollup-plugin-indexer#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 35,
      weekly: 5,
    },
  },
})
