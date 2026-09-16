import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-zipdir',
  description: 'Rollup plugin to zip the entire output directory',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'plugin',
    'zip',
    'fflate',
    'folder',
    'output',
  ],
  source: {
    github: 'elijaholmos/rollup-plugin-zipdir',
    npm: 'rollup-plugin-zipdir',
  },
  links: {
    github: 'https://github.com/elijaholmos/rollup-plugin-zipdir',
    npm: 'https://www.npmjs.com/package/rollup-plugin-zipdir',
    website: 'https://github.com/elijaholmos/rollup-plugin-zipdir',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 187,
      weekly: 91,
    },
  },
})
