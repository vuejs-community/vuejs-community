import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-simple-tsconfig-alias',
  description: 'A simple Vite plugin to resolve tsconfig paths as aliases.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'tsconfig',
    'alias',
    'path-mapping',
  ],
  links: {
    github: 'https://github.com/so1ve/vite-plugin-simple-tsconfig-alias',
    npm: 'https://www.npmjs.com/package/vite-plugin-simple-tsconfig-alias',
    website: 'https://github.com/so1ve/vite-plugin-simple-tsconfig-alias#readme',
  },
  source: {
    github: 'so1ve/vite-plugin-simple-tsconfig-alias',
    npm: 'vite-plugin-simple-tsconfig-alias',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 194,
      weekly: 38,
    },
  },
})
