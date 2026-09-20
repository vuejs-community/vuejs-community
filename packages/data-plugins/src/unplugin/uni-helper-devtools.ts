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
  links: {
    github: 'https://github.com/flippedround/uni-devtools',
    npm: 'https://www.npmjs.com/package/@uni-helper/devtools',
    website: 'https://github.com/flippedround/uni-devtools#readme',
  },
  source: {
    github: 'flippedround/uni-devtools',
    npm: '@uni-helper/devtools',
  },
  stats: {
    stars: 18,
    downloads: {
      monthly: 29,
      weekly: 9,
    },
  },
})
