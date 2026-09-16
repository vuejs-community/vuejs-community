import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-hjson',
  description: 'Converts hjson files to modules',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'hjson',
    'json',
    'template',
  ],
  source: {
    github: 'iltimasd/rollup-plugin-string',
    npm: 'rollup-plugin-hjson',
  },
  links: {
    github: 'https://github.com/iltimasd/rollup-plugin-string',
    npm: 'https://www.npmjs.com/package/rollup-plugin-hjson',
    website: 'https://github.com/iltimasd/rollup-plugin-string',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
