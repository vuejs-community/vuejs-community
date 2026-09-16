import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-raw',
  description: 'Transform file to a default-export string.',
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
  ],
  source: {
    github: 'unplugin/unplugin-raw',
    npm: 'unplugin-raw',
  },
  links: {
    github: 'https://github.com/unplugin/unplugin-raw',
    npm: 'https://www.npmjs.com/package/unplugin-raw',
    website: 'https://github.com/unplugin/unplugin-raw#readme',
  },
  stats: {
    stars: 36,
    downloads: {
      monthly: 47786,
      weekly: 9897,
    },
  },
})
