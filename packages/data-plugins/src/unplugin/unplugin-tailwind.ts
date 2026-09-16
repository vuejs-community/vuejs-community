import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-tailwind',
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
    github: 'sope/sope',
    npm: 'unplugin-tailwind',
  },
  links: {
    github: 'https://github.com/sope/sope',
    npm: 'https://www.npmjs.com/package/unplugin-tailwind',
    website: 'https://github.com/sope/sope#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
