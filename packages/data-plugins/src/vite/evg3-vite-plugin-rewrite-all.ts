import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@evg3/vite-plugin-rewrite-all',
  description: 'Vite plugin that fix dev server not rewriting the path includes a dot (https://github.com/ivesia/vite-plugin-rewrite-all) with merged PR2 ',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Ev3/vite-plugin-rewrite-all',
    npm: 'https://www.npmjs.com/package/@evg3/vite-plugin-rewrite-all',
  },
  stats: {
    downloads: {
      monthly: 47,
      weekly: 15,
    },
  },
})
