import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@baleada/rollup-plugin-source-transform',
  description: 'Rollup plugin that allows you to transform files\' content during your build step.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'baleada',
    'rollup-plugin',
    'source transform',
  ],
  source: {
    github: 'baleada/rollup-plugin-source-transform',
    npm: '@baleada/rollup-plugin-source-transform',
  },
  links: {
    github: 'https://github.com/baleada/rollup-plugin-source-transform',
    npm: 'https://www.npmjs.com/package/@baleada/rollup-plugin-source-transform',
    website: 'https://baleada.netlify.com',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 313,
      weekly: 68,
    },
  },
})
