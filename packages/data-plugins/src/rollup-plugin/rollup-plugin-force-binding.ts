import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-force-binding',
  description: 'Force RollupJS to use an existing import rather than create a new binding.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollupjs',
    'rollup-plugin',
    'import',
    'export',
    'bind',
  ],
  links: {
    github: 'https://github.com/tehvgg/rollup-plugin-force-binding',
    npm: 'https://www.npmjs.com/package/rollup-plugin-force-binding',
    website: 'https://github.com/tehvgg/rollup-plugin-force-binding#readme',
  },
  source: {
    github: 'tehvgg/rollup-plugin-force-binding',
    npm: 'rollup-plugin-force-binding',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 407,
      weekly: 87,
    },
  },
})
