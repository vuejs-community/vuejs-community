import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-mjml-inline',
  description: 'Compile MJML templates with Rollup and automatically inline them in your bundle',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'vite-plugin',
    'mjml',
  ],
  source: {
    npm: 'rollup-plugin-mjml-inline',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-mjml-inline',
    website: 'https://github.com/asyncbanana/rollup-plugin-mjml-inline',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 6,
    },
  },
})
