import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-baked-env',
  description: 'Import process.env as a module for baking environment variables inside your bundle at build time.',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'environment variables',
    'env',
    'bake',
    'baked',
    'define',
    'constants',
    'process.env',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/victornpb/rollup-plugin-baked-env',
    npm: 'https://www.npmjs.com/package/rollup-plugin-baked-env',
  },
  stats: {
    downloads: {
      monthly: 720,
      weekly: 217,
    },
  },
})
