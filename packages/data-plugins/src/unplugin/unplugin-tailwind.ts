import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-tailwind',
  description: '',
  icon: 'icon:dark-unplugin',
  version: '0.0.1',
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
  source: {
    github: 'sope/sope',
    npm: 'unplugin-tailwind',
  },
  links: {
    github: 'https://github.com/sope/sope',
    npm: 'https://www.npmjs.com/package/unplugin-tailwind',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
