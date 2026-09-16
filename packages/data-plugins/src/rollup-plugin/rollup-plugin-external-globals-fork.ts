import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-external-globals-fork',
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
    github: 'eight04/rollup-plugin-external-globals',
    npm: 'rollup-plugin-external-globals-fork',
  },
  links: {
    github: 'https://github.com/eight04/rollup-plugin-external-globals',
    npm: 'https://www.npmjs.com/package/rollup-plugin-external-globals-fork',
    website: 'https://github.com/eight04/rollup-plugin-external-globals#readme',
  },
  stats: {
    stars: 127,
    downloads: {
      monthly: 7,
      weekly: 2,
    },
  },
})
