import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@inglorious/vite-plugin-vue',
  description: 'A Vite plugin that transforms Vue-like template syntax into lit-html templates.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'inglorious',
    'vue',
    'lit-html',
  ],
  source: {
    github: 'IngloriousCoderz/inglorious-forge',
    npm: '@inglorious/vite-plugin-vue',
  },
  links: {
    github: 'https://github.com/IngloriousCoderz/inglorious-forge',
    npm: 'https://www.npmjs.com/package/@inglorious/vite-plugin-vue',
    website: 'https://github.com/IngloriousCoderz/inglorious-forge/tree/main/packages/vite-plugin-vue#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 9,
    },
  },
})
