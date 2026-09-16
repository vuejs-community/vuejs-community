import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@stagas/vite-plugin-commonjs-fork',
  description: 'A vite plugin that support commonjs to esm in vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'commonjs',
  ],
  source: {
    github: 'originjs/vite-plugins',
    npm: '@stagas/vite-plugin-commonjs-fork',
  },
  links: {
    github: 'https://github.com/originjs/vite-plugins',
    npm: 'https://www.npmjs.com/package/@stagas/vite-plugin-commonjs-fork',
    website: 'https://github.com/originjs/vite-plugins/tree/main/packages/vite-plugin-commonjs',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
