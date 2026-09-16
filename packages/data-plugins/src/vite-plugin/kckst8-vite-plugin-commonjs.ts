import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@kckst8/vite-plugin-commonjs',
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
    github: 'kckst8/vite-plugins',
    npm: '@kckst8/vite-plugin-commonjs',
  },
  links: {
    github: 'https://github.com/kckst8/vite-plugins',
    npm: 'https://www.npmjs.com/package/@kckst8/vite-plugin-commonjs',
    website: 'https://github.com/kckst8/vite-plugins/tree/main/packages/vite-plugin-commonjs',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
