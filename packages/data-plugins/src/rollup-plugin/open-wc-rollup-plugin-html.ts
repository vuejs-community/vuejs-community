import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@open-wc/rollup-plugin-html',
  description: 'Plugin for generating an html file with rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'minify',
    'html',
    'polyfill',
  ],
  source: {
    github: 'open-wc/open-wc',
    npm: '@open-wc/rollup-plugin-html',
  },
  links: {
    github: 'https://github.com/open-wc/open-wc',
    npm: 'https://www.npmjs.com/package/@open-wc/rollup-plugin-html',
    website: 'https://github.com/open-wc/open-wc/packages/rollup-plugin-html',
  },
  stats: {
    stars: 2398,
    downloads: {
      monthly: 7214,
      weekly: 1754,
    },
  },
})
