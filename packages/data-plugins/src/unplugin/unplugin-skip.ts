import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-skip',
  description: 'Skip all content that has been compiled once',
  icon: 'icon:dark-unplugin',
  version: '0.0.11',
  category: 'plugin',
  tags: [
    'node',
    'vite',
    'rollup',
    'webpack',
    'unplugin',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'markthree/unplugin-skip',
    npm: 'unplugin-skip',
  },
  links: {
    github: 'https://github.com/markthree/unplugin-skip',
    npm: 'https://www.npmjs.com/package/unplugin-skip',
  },
  stats: {
    downloads: {
      monthly: 35,
      weekly: 1,
    },
  },
})
