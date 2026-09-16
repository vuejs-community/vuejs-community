import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-inline-template',
  description: 'Vite plugin to expand Vue SFC fragment templates marked with inline:* into the main <template>, with optional payload binding.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'vue3',
    'sfc',
    'inline-template',
    'template',
  ],
  source: {
    npm: 'vite-plugin-vue-inline-template',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-inline-template',
    website: 'https://gitee.com/gonlyk/vite-plugin-vue-inline-template',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 5,
    },
  },
})
