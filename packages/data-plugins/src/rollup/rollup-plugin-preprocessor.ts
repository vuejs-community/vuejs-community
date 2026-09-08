import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-preprocessor',
  description: 'A Rollup plugin that adds a C-like preprocessor to Javascript.',
  icon: 'logos:rollupjs',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'c',
    'preprocessor',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: '',
    npm: 'rollup-plugin-preprocessor',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-preprocessor',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 1,
    },
  },
})
