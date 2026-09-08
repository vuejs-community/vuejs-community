import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-unocss-config',
  description: 'Use uno config in run-time',
  icon: 'icon:dark-unplugin',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'unpreset',
    'unocss',
    'unocss-config',
    'unplugin',
    'vite',
    'nuxt-module',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'unpreset/unplugin-unocss-config',
    npm: 'unplugin-unocss-config',
  },
  links: {
    github: 'https://github.com/unpreset/unplugin-unocss-config',
    npm: 'https://www.npmjs.com/package/unplugin-unocss-config',
  },
  stats: {
    downloads: {
      monthly: 50,
      weekly: 12,
    },
  },
})
