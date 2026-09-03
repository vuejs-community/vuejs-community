import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-puppeteer',
  description: 'Rollup plugin for integrating puppeteer with rollup.',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-puppeteer',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
