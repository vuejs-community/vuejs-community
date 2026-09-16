import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lunapress/rollup-plugin-external',
  description: '',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'lunapress',
    'rollup-plugin',
    'rollup',
  ],
  source: {
    github: 'lunapress/npm-packages',
    npm: '@lunapress/rollup-plugin-external',
  },
  links: {
    github: 'https://github.com/lunapress/npm-packages',
    npm: 'https://www.npmjs.com/package/@lunapress/rollup-plugin-external',
    website: 'https://github.com/lunapress/npm-packages#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 71,
      weekly: 12,
    },
  },
})
