import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vinxi/rollup-plugin-visualizer',
  description: '[![NPM Version](https://img.shields.io/npm/v/rollup-plugin-visualizer.svg)](https://npmjs.org/package/rollup-plugin-visualizer) [![Node.js CI](https://github.com/btd/rollup-plugin-visualizer/actions/workflows/node.js.yml/badge.svg)](https://github.com/btd',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'visualizer',
    'network',
    'treemap',
    'sunburst',
    'diagram',
  ],
  source: {
    github: 'btd/rollup-plugin-visualizer',
    npm: '@vinxi/rollup-plugin-visualizer',
  },
  links: {
    github: 'https://github.com/btd/rollup-plugin-visualizer',
    npm: 'https://www.npmjs.com/package/@vinxi/rollup-plugin-visualizer',
    website: 'https://github.com/btd/rollup-plugin-visualizer',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 655,
      weekly: 122,
    },
  },
})
