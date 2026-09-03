import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-visualizer',
  description: 'a bundle visulizer for vite/webpack/rollup',
  version: '0.0.7',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/brandonxiang/unplugin-visualizer',
    npm: 'https://www.npmjs.com/package/unplugin-visualizer',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 4,
    },
  },
})
