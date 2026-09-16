import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@zacharygriffee/rollup-plugin-external-globals',
  description: 'Transform external imports into global variables like output.globals.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'es',
    'transform',
    'external',
    'globals',
  ],
  source: {
    npm: '@zacharygriffee/rollup-plugin-external-globals',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@zacharygriffee/rollup-plugin-external-globals',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 1,
    },
  },
})
