import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-next-font',
  description: 'Use Next.js\'s Font API in Rollup environments.',
  icon: 'logos:rollupjs',
  version: '1.0.0-beta.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'kijv/next-font',
    npm: 'rollup-plugin-next-font',
  },
  links: {
    github: 'https://github.com/kijv/next-font',
    npm: 'https://www.npmjs.com/package/rollup-plugin-next-font',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
