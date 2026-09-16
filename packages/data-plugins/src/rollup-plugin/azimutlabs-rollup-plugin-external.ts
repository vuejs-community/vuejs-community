import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@azimutlabs/rollup-plugin-external',
  description: 'Rollup plugin to exclude external dependencies from bundle',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'plugin',
    'rollup',
    'rollup-plugin',
    'alabs',
    'azimutlabs',
  ],
  source: {
    github: 'azimutlabs/rollup',
    npm: '@azimutlabs/rollup-plugin-external',
  },
  links: {
    github: 'https://github.com/azimutlabs/rollup',
    npm: 'https://www.npmjs.com/package/@azimutlabs/rollup-plugin-external',
    website: 'https://github.com/azimutlabs/rollup#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 2,
    },
  },
})
