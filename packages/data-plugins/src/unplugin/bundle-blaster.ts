import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'bundle-blaster',
  description: 'A build plugin to help you bundle icons without huge bundle sizes',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'bundle',
    'blaster',
    'icons',
    'svg',
    'webpack',
    'unplugin',
    'plugin',
    'build',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/bundle-blaster',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 2,
    },
  },
})
