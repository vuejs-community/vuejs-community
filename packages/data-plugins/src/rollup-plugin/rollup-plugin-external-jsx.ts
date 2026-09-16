import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-external-jsx',
  description: 'Converts JSX files to modules',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'jsx',
    'template',
  ],
  source: {
    github: 'edoardocavazza/rollup-plugin-external-jsx',
    npm: 'rollup-plugin-external-jsx',
  },
  links: {
    github: 'https://github.com/edoardocavazza/rollup-plugin-external-jsx',
    npm: 'https://www.npmjs.com/package/rollup-plugin-external-jsx',
    website: 'https://github.com/edoardocavazza/rollup-plugin-external-jsx',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 27,
      weekly: 2,
    },
  },
})
