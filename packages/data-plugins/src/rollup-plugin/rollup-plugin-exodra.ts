import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-exodra',
  description: 'Rollup plugin that compiles Exodra JSX (delegates to the canonical Babel pipeline)',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'exodra',
    'rollup',
    'rollup-plugin',
    'jsx',
  ],
  source: {
    github: 'abaikov/exodra',
    npm: 'rollup-plugin-exodra',
  },
  links: {
    github: 'https://github.com/abaikov/exodra',
    npm: 'https://www.npmjs.com/package/rollup-plugin-exodra',
    website: 'https://exodra.org',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 3,
    },
  },
})
