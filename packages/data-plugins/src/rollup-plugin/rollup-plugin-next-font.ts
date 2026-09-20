import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-next-font',
  description: 'Use Next.js\'s Font API in Rollup environments.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/kijv/next-font',
    npm: 'https://www.npmjs.com/package/rollup-plugin-next-font',
    website: 'https://github.com/kijv/next-font#readme',
  },
  source: {
    github: 'kijv/next-font',
    npm: 'rollup-plugin-next-font',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
