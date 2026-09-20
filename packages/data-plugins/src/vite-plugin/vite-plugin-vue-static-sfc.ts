import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-static-sfc',
  description: 'Serve ".vue" files as static assets',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vue',
    'sfc',
    'static',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/arikw/vite-plugin-vue-static-sfc',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-static-sfc',
    website: 'https://github.com/arikw/vite-plugin-vue-static-sfc#readme',
  },
  source: {
    github: 'arikw/vite-plugin-vue-static-sfc',
    npm: 'vite-plugin-vue-static-sfc',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
