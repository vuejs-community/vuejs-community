import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-config',
  description: 'Register global imports on demand for Vite and Webpack',
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
    github: 'https://github.com/kirklin/unplugin-config',
    npm: 'https://www.npmjs.com/package/unplugin-config',
    website: 'https://github.com/kirklin/unplugin-config#readme',
  },
  source: {
    github: 'kirklin/unplugin-config',
    npm: 'unplugin-config',
  },
  stats: {
    stars: 29,
    downloads: {
      monthly: 3278,
      weekly: 484,
    },
  },
})
