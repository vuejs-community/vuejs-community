import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-auto-upload',
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
    github: 'https://github.com/bbcvc/unplugin-auto-upload',
    npm: 'https://www.npmjs.com/package/unplugin-auto-upload',
    website: 'https://github.com/bbcvc/unplugin-auto-upload#readme',
  },
  source: {
    github: 'bbcvc/unplugin-auto-upload',
    npm: 'unplugin-auto-upload',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
