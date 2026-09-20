import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gen/rollup-plugin-generate-html',
  description: 'Simple html generation plugin for rollup',
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
  links: {
    github: 'https://github.com/zenoplex/rollup-plugin-generate-html',
    npm: 'https://www.npmjs.com/package/@gen/rollup-plugin-generate-html',
    website: 'https://github.com/zenoplex/rollup-plugin-generate-html#readme',
  },
  source: {
    github: 'zenoplex/rollup-plugin-generate-html',
    npm: '@gen/rollup-plugin-generate-html',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 50,
      weekly: 12,
    },
  },
})
