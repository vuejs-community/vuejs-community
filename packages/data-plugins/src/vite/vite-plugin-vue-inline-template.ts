import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-inline-template',
  description: 'Vite plugin to expand Vue SFC fragment templates marked with inline:* into the main <template>, with optional payload binding.',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'vue3',
    'sfc',
    'inline-template',
    'template',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-inline-template',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 0,
    },
  },
})
