import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-typescript-fix',
  description: 'Seamless integration between Rollup and TypeScript.',
  icon: 'logos:rollupjs',
  version: '0.8.4',
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
    npm: 'rollup-plugin-typescript-fix',
  },
  links: {
    github: 'https://github.com/rollup/rollup-plugin-typescript',
    npm: 'https://www.npmjs.com/package/rollup-plugin-typescript-fix',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 4,
    },
  },
})
