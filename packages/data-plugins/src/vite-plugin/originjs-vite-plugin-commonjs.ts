import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@originjs/vite-plugin-commonjs',
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
  links: {
    github: 'https://github.com/originjs/vite-plugins',
    npm: 'https://www.npmjs.com/package/@originjs/vite-plugin-commonjs',
    website: 'https://github.com/originjs/vite-plugins/tree/main/packages/vite-plugin-commonjs',
  },
  source: {
    github: 'originjs/vite-plugins',
    npm: '@originjs/vite-plugin-commonjs',
  },
  stats: {
    stars: 176,
    downloads: {
      monthly: 859916,
      weekly: 166650,
    },
  },
})
