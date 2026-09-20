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
  links: {
    github: 'https://github.com/sope/sope',
    npm: 'https://www.npmjs.com/package/unplugin-tailwind',
    website: 'https://github.com/sope/sope#readme',
  },
  source: {
    github: 'sope/sope',
    npm: 'unplugin-tailwind',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
