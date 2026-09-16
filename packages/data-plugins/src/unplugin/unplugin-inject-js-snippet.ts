import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-inject-js-snippet',
  description: 'Support for injecting js snippet into html and js files.',
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
    github: 'Levix/unplugin-inject-js-snippet',
    npm: 'unplugin-inject-js-snippet',
  },
  links: {
    github: 'https://github.com/Levix/unplugin-inject-js-snippet',
    npm: 'https://www.npmjs.com/package/unplugin-inject-js-snippet',
    website: 'https://github.com/Levix/unplugin-inject-js-snippet#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 21,
      weekly: 1,
    },
  },
})
