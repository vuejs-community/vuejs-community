import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-data-uri',
  description: 'A universal bundler plugin which imports modules from Data URIs.',
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
    github: 'https://github.com/wzc520pyfm/unplugin-data-uri',
    npm: 'https://www.npmjs.com/package/unplugin-data-uri',
    website: 'https://github.com/wzc520pyfm/unplugin-data-uri#readme',
  },
  source: {
    github: 'wzc520pyfm/unplugin-data-uri',
    npm: 'unplugin-data-uri',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
