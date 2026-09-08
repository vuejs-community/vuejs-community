import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-auto-vconsole',
  description: 'Use vconsole as needed in Vite and Webpack',
  icon: 'icon:dark-unplugin',
  version: '0.0.5',
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
    github: 'cnjm/unplugin-auto-vconsole',
    npm: 'unplugin-auto-vconsole',
  },
  links: {
    github: 'https://github.com/cnjm/unplugin-auto-vconsole',
    npm: 'https://www.npmjs.com/package/unplugin-auto-vconsole',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 2,
    },
  },
})
