import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-zipdir',
  description: 'Rollup plugin to zip the entire output directory',
  icon: 'logos:rollupjs',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'plugin',
    'zip',
    'fflate',
    'folder',
    'output',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'elijaholmos/rollup-plugin-zipdir',
    npm: 'rollup-plugin-zipdir',
  },
  links: {
    github: 'https://github.com/elijaholmos/rollup-plugin-zipdir',
    npm: 'https://www.npmjs.com/package/rollup-plugin-zipdir',
  },
  stats: {
    downloads: {
      monthly: 89,
      weekly: 14,
    },
  },
})
