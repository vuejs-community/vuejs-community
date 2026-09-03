import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'telecall',
  description: 'No more HTTP API. Call back-end NodeJS functions directly from front-end, with full Typescript typing support.',
  version: '2.0.5',
  category: 'plugin',
  tags: [
    'telecall',
    'api',
    'typescript',
    'rpc',
    'rollup-plugin',
    'vite-plugin',
    'babel-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/beeplin/telecall',
    npm: 'https://www.npmjs.com/package/telecall',
  },
  stats: {
    downloads: {
      monthly: 47,
      weekly: 16,
    },
  },
})
