import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-strip-exports',
  description: 'Remove unwanted exports from your code.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'strip-exports',
    'iife',
  ],
  links: {
    github: 'https://github.com/xeroxinteractive/rollup-plugin-strip-exports',
    npm: 'https://www.npmjs.com/package/rollup-plugin-strip-exports',
    website: 'https://github.com/xeroxinteractive/rollup-plugin-strip-exports#readme',
  },
  source: {
    github: 'xeroxinteractive/rollup-plugin-strip-exports',
    npm: 'rollup-plugin-strip-exports',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 370,
      weekly: 79,
    },
  },
})
