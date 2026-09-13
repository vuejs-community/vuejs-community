import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-netlify-optimize',
  description: 'Optimizes a single-page-application for hosting on netlify. Pre-renders pages with skeleton html',
  icon: 'logos:rollupjs',
  version: '0.0.12',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'calebeby/rollup-plugin-netlify-optimize',
    npm: 'rollup-plugin-netlify-optimize',
  },
  links: {
    github: 'https://github.com/calebeby/rollup-plugin-netlify-optimize',
    npm: 'https://www.npmjs.com/package/rollup-plugin-netlify-optimize',
  },
  stats: {
    downloads: {
      monthly: 70,
      weekly: 9,
    },
  },
})
