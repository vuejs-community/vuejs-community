import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-node-resolve-jail',
  description: 'Bundle third-party dependencies in node_modules (with jail feature)',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'npm',
    'modules',
    'jail',
    'chroot',
  ],
  source: {
    github: 'rezzza/rollup-plugin-node-resolve',
    npm: 'rollup-plugin-node-resolve-jail',
  },
  links: {
    github: 'https://github.com/rezzza/rollup-plugin-node-resolve',
    npm: 'https://www.npmjs.com/package/rollup-plugin-node-resolve-jail',
    website: 'https://github.com/rezzza/rollup-plugin-node-resolve#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 8,
    },
  },
})
