import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-visualizer',
  description: 'a bundle visulizer for vite/webpack/rollup',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  source: {
    github: 'brandonxiang/unplugin-visualizer',
    npm: 'unplugin-visualizer',
  },
  links: {
    github: 'https://github.com/brandonxiang/unplugin-visualizer',
    npm: 'https://www.npmjs.com/package/unplugin-visualizer',
    website: 'https://github.com/brandonxiang/unplugin-visualizer#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 0,
    },
  },
})
