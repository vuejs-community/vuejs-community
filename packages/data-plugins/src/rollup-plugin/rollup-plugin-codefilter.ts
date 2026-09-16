import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-codefilter',
  description: 'A plugin for rollup/vite to filter code by dotenv variables',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
  ],
  source: {
    github: 'cary-mao/rollup-plugin-codefilter',
    npm: 'rollup-plugin-codefilter',
  },
  links: {
    github: 'https://github.com/cary-mao/rollup-plugin-codefilter',
    npm: 'https://www.npmjs.com/package/rollup-plugin-codefilter',
    website: 'https://github.com/cary-mao/rollup-plugin-codefilter#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 31,
      weekly: 5,
    },
  },
})
