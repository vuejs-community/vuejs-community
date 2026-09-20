import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-data-files',
  description: 'Bundle web workers that work in nodejs and the browser, without a separate build target.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/brandonocasey/rollup-plugin-data-files',
    npm: 'https://www.npmjs.com/package/rollup-plugin-data-files',
    website: 'https://github.com/brandonocasey/rollup-plugin-data-files',
  },
  source: {
    github: 'brandonocasey/rollup-plugin-data-files',
    npm: 'rollup-plugin-data-files',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 281,
      weekly: 33,
    },
  },
})
