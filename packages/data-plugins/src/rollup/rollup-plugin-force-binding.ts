import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-force-binding',
  description: 'Force RollupJS to use an existing import rather than create a new binding.',
  version: '1.0.6',
  category: 'plugin',
  tags: [
    'rollupjs',
    'rollup-plugin',
    'import',
    'export',
    'bind',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/tehvgg/rollup-plugin-force-binding',
    npm: 'https://www.npmjs.com/package/rollup-plugin-force-binding',
  },
  stats: {
    downloads: {
      monthly: 330,
      weekly: 164,
    },
  },
})
