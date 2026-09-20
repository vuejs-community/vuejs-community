import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-sizes',
  description: 'Show info about files/packages included with your rollup bundle',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'filesizes',
    'bundler',
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/tivac/rollup-plugin-sizes',
    npm: 'https://www.npmjs.com/package/rollup-plugin-sizes',
    website: 'https://github.com/tivac/rollup-plugin-sizes#readme',
  },
  source: {
    github: 'tivac/rollup-plugin-sizes',
    npm: 'rollup-plugin-sizes',
  },
  stats: {
    stars: 90,
    downloads: {
      monthly: 45069,
      weekly: 8884,
    },
  },
})
