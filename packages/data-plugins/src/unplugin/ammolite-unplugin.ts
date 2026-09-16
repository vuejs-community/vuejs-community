import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ammolite/unplugin',
  description: 'A unified plugin for Ammolite',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'ammolite',
    'css',
    'css-in-js',
    'unplugin',
    'plugin',
    'ts',
    'typescript',
    'js',
    'javascript',
  ],
  source: {
    github: 'gemvale/ammolite',
    npm: '@ammolite/unplugin',
  },
  links: {
    github: 'https://github.com/gemvale/ammolite',
    npm: 'https://www.npmjs.com/package/@ammolite/unplugin',
    website: 'https://gemvale.github.io',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 313,
      weekly: 7,
    },
  },
})
