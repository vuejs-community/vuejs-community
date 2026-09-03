import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-simple-tsconfig-alias',
  description: 'A simple Vite plugin to resolve tsconfig paths as aliases.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'tsconfig',
    'alias',
    'path-mapping',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/so1ve/vite-plugin-simple-tsconfig-alias',
    npm: 'https://www.npmjs.com/package/vite-plugin-simple-tsconfig-alias',
  },
  stats: {
    downloads: {
      monthly: 221,
      weekly: 68,
    },
  },
})
