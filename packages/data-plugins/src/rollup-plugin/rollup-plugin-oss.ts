import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-oss',
  description: 'A rollup plugin to list dependency licenses and zip source files',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'vite',
    'vite-plugin',
    'rolldown',
    'license',
    'oss',
  ],
  links: {
    github: 'https://github.com/ameinhardt/rollup-plugin-oss',
    npm: 'https://www.npmjs.com/package/rollup-plugin-oss',
    website: 'https://github.com/ameinhardt/rollup-plugin-oss#readme',
  },
  source: {
    github: 'ameinhardt/rollup-plugin-oss',
    npm: 'rollup-plugin-oss',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 176,
      weekly: 68,
    },
  },
})
