import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@inglorious/vite-plugin-vue',
  description: 'A Vite plugin that transforms Vue-like template syntax into lit-html templates.',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'inglorious',
    'vue',
    'lit-html',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/IngloriousCoderz/inglorious-forge',
    npm: 'https://www.npmjs.com/package/@inglorious/vite-plugin-vue',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 5,
    },
  },
})
