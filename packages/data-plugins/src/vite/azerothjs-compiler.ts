import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@azerothjs/compiler',
  description: 'AzerothJS compiler - .azeroth single-file-component compiler (markup to h() calls) and Vite plugin',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'azerothjs',
    'compiler',
    'vite-plugin',
    'single-file-components',
    'reactive',
    'dom',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/AzerothJS/AzerothJS',
    npm: 'https://www.npmjs.com/package/@azerothjs/compiler',
  },
  stats: {
    downloads: {
      monthly: 1132,
      weekly: 126,
    },
  },
})
