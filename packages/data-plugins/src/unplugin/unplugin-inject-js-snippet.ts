import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-inject-js-snippet',
  description: 'Support for injecting js snippet into html and js files.',
  version: '1.1.0',
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
    github: 'https://github.com/Levix/unplugin-inject-js-snippet',
    npm: 'https://www.npmjs.com/package/unplugin-inject-js-snippet',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 8,
    },
  },
})
