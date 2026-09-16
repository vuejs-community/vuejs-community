import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'telecall',
  description: 'No more HTTP API. Call back-end NodeJS functions directly from front-end, with full Typescript typing support.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'telecall',
    'api',
    'typescript',
    'rpc',
    'rollup-plugin',
    'vite-plugin',
    'babel-plugin',
  ],
  source: {
    github: 'beeplin/telecall',
    npm: 'telecall',
  },
  links: {
    github: 'https://github.com/beeplin/telecall',
    npm: 'https://www.npmjs.com/package/telecall',
    website: 'https://github.com/beeplin/telecall#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 30,
      weekly: 3,
    },
  },
})
