import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@uni-helper/devtools',
  description: '',
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
    github: 'flippedround/uni-devtools',
    npm: '@uni-helper/devtools',
  },
  links: {
    github: 'https://github.com/flippedround/uni-devtools',
    npm: 'https://www.npmjs.com/package/@uni-helper/devtools',
    website: 'https://github.com/flippedround/uni-devtools#readme',
  },
  stats: {
    stars: 18,
    downloads: {
      monthly: 29,
      weekly: 9,
    },
  },
})
