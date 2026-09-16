import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-amd',
  description: 'Convert AMD files to ES2016 modules',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'requirejs',
    'amd',
  ],
  source: {
    github: 'piuccio/rollup-plugin-amd',
    npm: 'rollup-plugin-amd',
  },
  links: {
    github: 'https://github.com/piuccio/rollup-plugin-amd',
    npm: 'https://www.npmjs.com/package/rollup-plugin-amd',
    website: 'https://github.com/piuccio/rollup-plugin-amd#readme',
  },
  stats: {
    stars: 23,
    downloads: {
      monthly: 13958,
      weekly: 2812,
    },
  },
})
