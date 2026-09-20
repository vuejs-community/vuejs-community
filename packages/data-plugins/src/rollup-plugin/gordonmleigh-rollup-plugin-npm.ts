import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gordonmleigh/rollup-plugin-npm',
  description: 'A Rollup plugin to install npm packages into the output',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rollup',
  ],
  links: {
    github: 'https://github.com/gordonmleigh/rollup-plugin-npm',
    npm: 'https://www.npmjs.com/package/@gordonmleigh/rollup-plugin-npm',
    website: 'https://github.com/gordonmleigh/rollup-plugin-npm#readme',
  },
  source: {
    github: 'gordonmleigh/rollup-plugin-npm',
    npm: '@gordonmleigh/rollup-plugin-npm',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 29,
      weekly: 8,
    },
  },
})
