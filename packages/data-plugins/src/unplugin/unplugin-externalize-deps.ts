import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-externalize-deps',
  description: 'externalize dependencies from production build',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'rollup',
    'vite',
    'external',
  ],
  source: {
    github: 'tjx666/unplugin-externalize-deps',
    npm: 'unplugin-externalize-deps',
  },
  links: {
    github: 'https://github.com/tjx666/unplugin-externalize-deps',
    npm: 'https://www.npmjs.com/package/unplugin-externalize-deps',
    website: 'https://github.com/tjx666/unplugin-externalize-deps#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 21,
      weekly: 2,
    },
  },
})
