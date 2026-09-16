import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-baked-env',
  description: 'Import process.env as a module for baking environment variables inside your bundle at build time.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
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
  source: {
    github: 'victornpb/rollup-plugin-baked-env',
    npm: 'rollup-plugin-baked-env',
  },
  links: {
    github: 'https://github.com/victornpb/rollup-plugin-baked-env',
    npm: 'https://www.npmjs.com/package/rollup-plugin-baked-env',
    website: 'https://github.com/victornpb/rollup-plugin-baked-env',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 683,
      weekly: 141,
    },
  },
})
