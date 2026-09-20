import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@frameui/fui-plugin-unplugin',
  description: 'Vite plugin for unplugin integration with auto-import and vue-components',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'vite',
    'plugin',
    'unplugin',
    'auto-import',
    'vue-components',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@frameui/fui-plugin-unplugin',
  },
  source: {
    npm: '@frameui/fui-plugin-unplugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 1,
    },
  },
})
