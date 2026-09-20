import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-external-globals',
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
  links: {
    github: 'https://github.com/eight04/rollup-plugin-external-globals',
    npm: 'https://www.npmjs.com/package/rollup-plugin-external-globals',
    website: 'https://github.com/eight04/rollup-plugin-external-globals#readme',
  },
  source: {
    github: 'eight04/rollup-plugin-external-globals',
    npm: 'rollup-plugin-external-globals',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 508135,
      weekly: 137058,
    },
  },
})
