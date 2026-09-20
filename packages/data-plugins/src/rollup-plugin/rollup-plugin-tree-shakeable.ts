import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-tree-shakeable',
  description: 'A Rollup plugin that automatically annotates your module as tree shakeable.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'bundle',
    'pure',
    'rollup',
    'rollup-plugin',
    'tree-shaking',
  ],
  links: {
    github: 'https://github.com/TomerAberbach/rollup-plugin-tree-shakeable',
    npm: 'https://www.npmjs.com/package/rollup-plugin-tree-shakeable',
    website: 'https://github.com/TomerAberbach/rollup-plugin-tree-shakeable',
  },
  source: {
    github: 'TomerAberbach/rollup-plugin-tree-shakeable',
    npm: 'rollup-plugin-tree-shakeable',
  },
  stats: {
    stars: 10,
    downloads: {
      monthly: 31200,
      weekly: 4965,
    },
  },
})
