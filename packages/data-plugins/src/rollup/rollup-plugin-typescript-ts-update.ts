import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-typescript-ts-update',
  description: 'Seamless integration between Rollup and TypeScript.',
  icon: 'logos:rollupjs',
  version: '0.8.2',
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
    npm: 'rollup-plugin-typescript-ts-update',
  },
  links: {
    github: 'https://github.com/rollup/rollup-plugin-typescript',
    npm: 'https://www.npmjs.com/package/rollup-plugin-typescript-ts-update',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
