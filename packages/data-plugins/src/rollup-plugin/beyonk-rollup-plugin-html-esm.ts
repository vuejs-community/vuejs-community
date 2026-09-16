import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@beyonk/rollup-plugin-html-esm',
  description: 'Generates html for modular ECMAScript',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'html',
    'html-generate',
  ],
  source: {
    github: 'zenoplex/rollup-plugin-generate-html',
    npm: '@beyonk/rollup-plugin-html-esm',
  },
  links: {
    github: 'https://github.com/zenoplex/rollup-plugin-generate-html',
    npm: 'https://www.npmjs.com/package/@beyonk/rollup-plugin-html-esm',
    website: 'https://github.com/zenoplex/rollup-plugin-generate-html#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 91,
      weekly: 4,
    },
  },
})
