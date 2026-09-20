import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-skip',
  description: 'Skip all content that has been compiled once',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'node',
    'vite',
    'rollup',
    'webpack',
    'unplugin',
  ],
  links: {
    github: 'https://github.com/markthree/unplugin-skip',
    npm: 'https://www.npmjs.com/package/unplugin-skip',
    website: 'https://github.com/markthree/unplugin-skip#readme',
  },
  source: {
    github: 'markthree/unplugin-skip',
    npm: 'unplugin-skip',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 1,
    },
  },
})
