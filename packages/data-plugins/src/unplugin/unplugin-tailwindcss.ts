import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-tailwindcss',
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
    npm: 'unplugin-tailwindcss',
  },
  links: {
    github: 'https://github.com/sope/sope',
    npm: 'https://www.npmjs.com/package/unplugin-tailwindcss',
    website: 'https://github.com/sope/sope#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 30,
      weekly: 7,
    },
  },
})
