import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@evg3/vite-plugin-rewrite-all',
  description: 'Vite plugin that fix dev server not rewriting the path includes a dot (https://github.com/ivesia/vite-plugin-rewrite-all) with merged PR2 ',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'Ev3/vite-plugin-rewrite-all',
    npm: '@evg3/vite-plugin-rewrite-all',
  },
  links: {
    github: 'https://github.com/Ev3/vite-plugin-rewrite-all',
    npm: 'https://www.npmjs.com/package/@evg3/vite-plugin-rewrite-all',
    website: 'https://github.com/Ev3/vite-plugin-rewrite-all',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 42,
      weekly: 7,
    },
  },
})
