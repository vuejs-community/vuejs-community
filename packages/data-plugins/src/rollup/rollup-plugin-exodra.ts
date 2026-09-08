import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-exodra',
  description: 'Rollup plugin that compiles Exodra JSX (delegates to the canonical Babel pipeline)',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'abaikov/exodra',
    npm: 'rollup-plugin-exodra',
  },
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
