import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-node-resolve-jail',
  description: 'Bundle third-party dependencies in node_modules (with jail feature)',
  version: '3.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'npm',
    'modules',
    'jail',
    'chroot',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/rezzza/rollup-plugin-node-resolve',
    npm: 'https://www.npmjs.com/package/rollup-plugin-node-resolve-jail',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 6,
    },
  },
})
