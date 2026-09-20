import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@baleada/rollup-plugin-virtual',
  description: 'Rollup plugin that allows you to reference virtual files at build time.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'baleada',
    'rollup-plugin',
    'virtual',
  ],
  links: {
    github: 'https://github.com/baleada/rollup-plugin-virtual',
    npm: 'https://www.npmjs.com/package/@baleada/rollup-plugin-virtual',
    website: 'https://baleada.netlify.com',
  },
  source: {
    github: 'baleada/rollup-plugin-virtual',
    npm: '@baleada/rollup-plugin-virtual',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 117,
      weekly: 6,
    },
  },
})
