import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-tree-shakeable',
  description: 'A Rollup plugin that automatically annotates your module as tree shakeable.',
  icon: 'logos:rollupjs',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'bundle',
    'pure',
    'rollup',
    'rollup-plugin',
    'tree-shaking',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'TomerAberbach/rollup-plugin-tree-shakeable',
    npm: 'rollup-plugin-tree-shakeable',
  },
  links: {
    github: 'https://github.com/TomerAberbach/rollup-plugin-tree-shakeable',
    npm: 'https://www.npmjs.com/package/rollup-plugin-tree-shakeable',
  },
  stats: {
    downloads: {
      monthly: 35305,
      weekly: 8671,
    },
  },
})
