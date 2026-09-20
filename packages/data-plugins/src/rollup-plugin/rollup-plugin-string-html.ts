import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-string-html',
  description: 'Converts html files to modules',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'stringify',
    'string',
    'html',
  ],
  links: {
    github: 'https://github.com/hyhappy/rollup-plugin-string-html',
    npm: 'https://www.npmjs.com/package/rollup-plugin-string-html',
    website: 'https://github.com/hyhappy/rollup-plugin-string-html',
  },
  source: {
    github: 'hyhappy/rollup-plugin-string-html',
    npm: 'rollup-plugin-string-html',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 42,
      weekly: 20,
    },
  },
})
