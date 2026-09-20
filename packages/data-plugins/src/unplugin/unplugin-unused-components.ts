import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-unused-components',
  description: 'Unplugin to detect unused components in your project',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'rollup',
    'vite',
    'esbuild',
    'webpack',
    'webpack4',
  ],
  links: {
    github: 'https://github.com/BoYuanSu/unplugin-unused-components',
    npm: 'https://www.npmjs.com/package/unplugin-unused-components',
    website: 'https://github.com/BoYuanSu/unplugin-unused-components#readme',
  },
  source: {
    github: 'BoYuanSu/unplugin-unused-components',
    npm: 'unplugin-unused-components',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 23,
      weekly: 5,
    },
  },
})
