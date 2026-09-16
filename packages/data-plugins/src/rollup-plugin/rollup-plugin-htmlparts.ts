import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-htmlparts',
  description: 'Converts HTML files into modules',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'html',
    'string',
    'template',
  ],
  source: {
    github: 'sanand0/rollup-plugin-htmlparts',
    npm: 'rollup-plugin-htmlparts',
  },
  links: {
    github: 'https://github.com/sanand0/rollup-plugin-htmlparts',
    npm: 'https://www.npmjs.com/package/rollup-plugin-htmlparts',
    website: 'https://github.com/sanand0/rollup-plugin-htmlparts#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 17,
      weekly: 2,
    },
  },
})
