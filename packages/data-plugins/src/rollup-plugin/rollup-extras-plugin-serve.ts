import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup-extras/plugin-serve',
  description: 'Rollup plugin for dev server based on Hono.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'server',
    'serve',
  ],
  source: {
    github: 'kshutkin/rollup-extras',
    npm: '@rollup-extras/plugin-serve',
  },
  links: {
    github: 'https://github.com/kshutkin/rollup-extras',
    npm: 'https://www.npmjs.com/package/@rollup-extras/plugin-serve',
    website: 'https://github.com/kshutkin/rollup-extras/blob/main/plugin-serve/README.md',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 1,
    },
  },
})
