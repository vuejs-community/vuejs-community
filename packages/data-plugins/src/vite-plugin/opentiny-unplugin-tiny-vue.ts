import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@opentiny/unplugin-tiny-vue',
  description: 'A vite auto import plugin for TinyVue',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'TinyVue',
    'vite',
    'auto-import',
  ],
  source: {
    github: 'opentiny/unplugin-tiny-vue',
    npm: '@opentiny/unplugin-tiny-vue',
  },
  links: {
    github: 'https://github.com/opentiny/unplugin-tiny-vue',
    npm: 'https://www.npmjs.com/package/@opentiny/unplugin-tiny-vue',
    website: 'https://github.com/opentiny/unplugin-tiny-vue#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 272,
      weekly: 118,
    },
  },
})
