import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@zeroc/slice2js',
  description: 'Slice-to-JavaScript compiler and build plugin for Ice',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'Ice',
    'slice2js',
    'unplugin',
    'compiler',
  ],
  links: {
    github: 'https://github.com/zeroc-ice/ice',
    npm: 'https://www.npmjs.com/package/@zeroc/slice2js',
    website: 'https://zeroc.com',
  },
  source: {
    github: 'zeroc-ice/ice',
    npm: '@zeroc/slice2js',
  },
  stats: {
    stars: 2192,
    downloads: {
      monthly: 172,
      weekly: 44,
    },
  },
})
