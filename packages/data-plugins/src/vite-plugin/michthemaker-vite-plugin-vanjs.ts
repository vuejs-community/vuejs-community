import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@michthemaker/vite-plugin-vanjs',
  description: 'The default Vite plugin for VanJS projects',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'fast refresh',
    'vanjs',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'michthemaker/vanjs',
    npm: '@michthemaker/vite-plugin-vanjs',
  },
  links: {
    github: 'https://github.com/michthemaker/vanjs',
    npm: 'https://www.npmjs.com/package/@michthemaker/vite-plugin-vanjs',
    website: 'https://github.com/michthemaker/vanjs/tree/main/packages/vite-plugin-vanjs',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 17,
      weekly: 3,
    },
  },
})
