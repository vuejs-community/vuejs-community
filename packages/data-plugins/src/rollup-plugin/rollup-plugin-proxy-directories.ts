import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-proxy-directories',
  description: 'creates proxy directories for libraries without configuration to make direct imports easier.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'npm',
    'modules',
    'proxy-directories',
  ],
  source: {
    github: 'adriankremer/rollup-plugin-proxy-directories',
    npm: 'rollup-plugin-proxy-directories',
  },
  links: {
    github: 'https://github.com/adriankremer/rollup-plugin-proxy-directories',
    npm: 'https://www.npmjs.com/package/rollup-plugin-proxy-directories',
    website: 'https://github.com/adriankremer/rollup-plugin-proxy-directories#readme',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 75,
      weekly: 21,
    },
  },
})
