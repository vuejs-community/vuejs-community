import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-node-resolve-jail',
  description: 'Bundle third-party dependencies in node_modules (with jail feature)',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'rezzza/rollup-plugin-node-resolve',
    npm: 'rollup-plugin-node-resolve-jail',
  },
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
