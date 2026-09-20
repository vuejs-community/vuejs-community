import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sean-bunnings/rollup-plugin-html',
  description: 'HTML import plugin for rollup with updated html-minifier-terser to fix security issue',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'html',
  ],
  links: {
    github: 'https://github.com/sean-bunnings/rollup-plugin-html',
    npm: 'https://www.npmjs.com/package/@sean-bunnings/rollup-plugin-html',
    website: 'https://github.com/sean-bunnings/rollup-plugin-html',
  },
  source: {
    github: 'sean-bunnings/rollup-plugin-html',
    npm: '@sean-bunnings/rollup-plugin-html',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
