import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-hjson',
  description: 'Converts hjson files to modules',
  icon: 'logos:rollupjs',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'hjson',
    'json',
    'template',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'iltimasd/rollup-plugin-string',
    npm: 'rollup-plugin-hjson',
  },
  links: {
    github: 'https://github.com/iltimasd/rollup-plugin-string',
    npm: 'https://www.npmjs.com/package/rollup-plugin-hjson',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
