import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-iife-namespace',
  description: 'export iife library to a global namespace',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'iife',
    'namespace',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-iife-namespace',
  },
  source: {
    npm: 'rollup-plugin-iife-namespace',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 4,
    },
  },
})
