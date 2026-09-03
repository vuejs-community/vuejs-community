import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-exodra',
  description: 'Rollup plugin that compiles Exodra JSX (delegates to the canonical Babel pipeline)',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'exodra',
    'rollup',
    'rollup-plugin',
    'jsx',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/abaikov/exodra',
    npm: 'https://www.npmjs.com/package/rollup-plugin-exodra',
  },
  stats: {
    downloads: {
      monthly: 34,
      weekly: 6,
    },
  },
})
