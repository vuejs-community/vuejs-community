import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-auto-vconsole',
  description: 'Use vconsole as needed in Vite and Webpack',
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
    github: 'cnjm/unplugin-auto-vconsole',
    npm: 'unplugin-auto-vconsole',
  },
  links: {
    github: 'https://github.com/cnjm/unplugin-auto-vconsole',
    npm: 'https://www.npmjs.com/package/unplugin-auto-vconsole',
    website: 'https://github.com/cnjm/unplugin-auto-vconsole#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 18,
      weekly: 3,
    },
  },
})
