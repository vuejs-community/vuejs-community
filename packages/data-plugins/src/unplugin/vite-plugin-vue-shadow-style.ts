import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-shadow-style',
  description: 'Plugin to inject Vue setup SFC style to shadow root',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vue',
    'shadow-dom',
    'style',
    'vite',
    'unplugin',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/kainstar/vite-plugin-vue-shadow-style',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-shadow-style',
  },
  stats: {
    downloads: {
      monthly: 115,
      weekly: 23,
    },
  },
})
