import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-shadow-style',
  description: 'Plugin to inject Vue setup SFC style to shadow root',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vue',
    'shadow-dom',
    'style',
    'vite',
    'unplugin',
  ],
  links: {
    github: 'https://github.com/kainstar/vite-plugin-vue-shadow-style',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-shadow-style',
    website: 'https://github.com/kainstar/vite-plugin-vue-shadow-style#readme',
  },
  source: {
    github: 'kainstar/vite-plugin-vue-shadow-style',
    npm: 'vite-plugin-vue-shadow-style',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 84,
      weekly: 7,
    },
  },
})
