import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-inline-lit-element',
  description: 'Rollup plugin to inline external styles in lit-element',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'lit-element',
    'web-components',
    'custom-elements',
    'rollup',
    'plugin',
  ],
  source: {
    github: 'aelbore/rollup-plugin-inline-lit-element',
    npm: 'rollup-plugin-inline-lit-element',
  },
  links: {
    github: 'https://github.com/aelbore/rollup-plugin-inline-lit-element',
    npm: 'https://www.npmjs.com/package/rollup-plugin-inline-lit-element',
    website: 'https://github.com/aelbore/rollup-plugin-inline-lit-element#readme',
  },
  stats: {
    stars: 11,
    downloads: {
      monthly: 25,
      weekly: 2,
    },
  },
})
