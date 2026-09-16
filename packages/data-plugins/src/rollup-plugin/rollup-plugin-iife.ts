import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-iife',
  description: 'Convert ES modules into IIFEs.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rollup',
    'iife',
  ],
  source: {
    github: 'eight04/rollup-plugin-iife',
    npm: 'rollup-plugin-iife',
  },
  links: {
    github: 'https://github.com/eight04/rollup-plugin-iife',
    npm: 'https://www.npmjs.com/package/rollup-plugin-iife',
    website: 'https://github.com/eight04/rollup-plugin-iife#readme',
  },
  stats: {
    stars: 43,
    downloads: {
      monthly: 14754,
      weekly: 3066,
    },
  },
})
