import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-externalize-deps',
  description: 'externalize dependencies from production build',
  icon: 'icon:dark-unplugin',
  version: '0.0.10',
  category: 'plugin',
  tags: [
    'unplugin',
    'rollup',
    'vite',
    'external',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'tjx666/unplugin-externalize-deps',
    npm: 'unplugin-externalize-deps',
  },
  links: {
    github: 'https://github.com/tjx666/unplugin-externalize-deps',
    npm: 'https://www.npmjs.com/package/unplugin-externalize-deps',
  },
  stats: {
    downloads: {
      monthly: 64,
      weekly: 9,
    },
  },
})
