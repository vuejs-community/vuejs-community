import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@azerothjs/compiler',
  description: 'AzerothJS compiler - .azeroth single-file-component compiler (markup to h() calls) and Vite plugin',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'azerothjs',
    'compiler',
    'vite-plugin',
    'single-file-components',
    'reactive',
    'dom',
  ],
  source: {
    github: 'AzerothJS/AzerothJS',
    npm: '@azerothjs/compiler',
  },
  links: {
    github: 'https://github.com/AzerothJS/AzerothJS',
    npm: 'https://www.npmjs.com/package/@azerothjs/compiler',
    website: 'https://github.com/AzerothJS/AzerothJS/tree/main/packages/compiler',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 542,
      weekly: 63,
    },
  },
})
