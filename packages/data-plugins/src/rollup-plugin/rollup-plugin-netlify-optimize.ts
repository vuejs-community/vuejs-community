import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-netlify-optimize',
  description: 'Optimizes a single-page-application for hosting on netlify. Pre-renders pages with skeleton html',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/calebeby/rollup-plugin-netlify-optimize',
    npm: 'https://www.npmjs.com/package/rollup-plugin-netlify-optimize',
    website: 'https://github.com/calebeby/rollup-plugin-netlify-optimize#readme',
  },
  source: {
    github: 'calebeby/rollup-plugin-netlify-optimize',
    npm: 'rollup-plugin-netlify-optimize',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 57,
      weekly: 6,
    },
  },
})
