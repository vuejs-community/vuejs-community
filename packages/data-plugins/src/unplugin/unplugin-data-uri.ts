import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-data-uri',
  description: 'A universal bundler plugin which imports modules from Data URIs.',
  version: '0.2.1',
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
  links: {
    github: 'https://github.com/wzc520pyfm/unplugin-data-uri',
    npm: 'https://www.npmjs.com/package/unplugin-data-uri',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
