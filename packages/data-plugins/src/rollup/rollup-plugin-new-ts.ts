import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-new-ts',
  description: 'Seamless integration between Rollup and TypeScript.',
  icon: 'logos:rollupjs',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'typescript',
    'es2015',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'rollup/rollup-plugin-typescript',
    npm: 'rollup-plugin-new-ts',
  },
  links: {
    github: 'https://github.com/rollup/rollup-plugin-typescript',
    npm: 'https://www.npmjs.com/package/rollup-plugin-new-ts',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
