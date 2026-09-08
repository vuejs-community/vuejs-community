import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-baked-env',
  description: 'Import process.env as a module for baking environment variables inside your bundle at build time.',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'victornpb/rollup-plugin-baked-env',
    npm: 'rollup-plugin-baked-env',
  },
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
