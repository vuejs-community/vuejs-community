import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-unocss-config',
  description: 'Use uno config in run-time',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unpreset',
    'unocss',
    'unocss-config',
    'unplugin',
    'vite',
    'nuxt-module',
  ],
  source: {
    github: 'unpreset/unplugin-unocss-config',
    npm: 'unplugin-unocss-config',
  },
  links: {
    github: 'https://github.com/unpreset/unplugin-unocss-config',
    npm: 'https://www.npmjs.com/package/unplugin-unocss-config',
    website: 'https://github.com/unpreset/unplugin-unocss-config#readme',
  },
  stats: {
    stars: 10,
    downloads: {
      monthly: 45,
      weekly: 4,
    },
  },
})
