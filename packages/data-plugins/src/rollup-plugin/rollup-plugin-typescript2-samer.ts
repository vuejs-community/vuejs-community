import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-typescript2-samer',
  description: 'Seamless integration between Rollup and TypeScript. Samer\'s patch.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'typescript',
    'es2015',
  ],
  source: {
    github: 'ezolenko/rollup-plugin-typescript2',
    npm: 'rollup-plugin-typescript2-samer',
  },
  links: {
    github: 'https://github.com/ezolenko/rollup-plugin-typescript2',
    npm: 'https://www.npmjs.com/package/rollup-plugin-typescript2-samer',
    website: 'https://github.com/ezolenko/rollup-plugin-typescript2',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 32,
      weekly: 7,
    },
  },
})
