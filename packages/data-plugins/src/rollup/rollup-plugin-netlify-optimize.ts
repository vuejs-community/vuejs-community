import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-netlify-optimize',
  description: 'Optimizes a single-page-application for hosting on netlify. Pre-renders pages with skeleton html',
  version: '0.0.12',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/calebeby/rollup-plugin-netlify-optimize',
    npm: 'https://www.npmjs.com/package/rollup-plugin-netlify-optimize',
  },
  stats: {
    downloads: {
      monthly: 71,
      weekly: 23,
    },
  },
})
