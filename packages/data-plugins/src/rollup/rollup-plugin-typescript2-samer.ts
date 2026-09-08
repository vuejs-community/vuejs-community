import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-typescript2-samer',
  description: 'Seamless integration between Rollup and TypeScript. Samer\'s patch.',
  icon: 'logos:rollupjs',
  version: '0.5.6',
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
    github: 'ezolenko/rollup-plugin-typescript2',
    npm: 'rollup-plugin-typescript2-samer',
  },
  links: {
    github: 'https://github.com/ezolenko/rollup-plugin-typescript2',
    npm: 'https://www.npmjs.com/package/rollup-plugin-typescript2-samer',
  },
  stats: {
    downloads: {
      monthly: 87,
      weekly: 4,
    },
  },
})
