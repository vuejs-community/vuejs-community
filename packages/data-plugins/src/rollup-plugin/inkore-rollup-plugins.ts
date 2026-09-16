import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@inkore/rollup-plugins',
  description: 'A collection of some commonly used rollup plugins.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rollup',
    'inkore',
    'plugin',
  ],
  source: {
    github: 'iNKORE-NET/Nodejs.RollupPlugins',
    npm: '@inkore/rollup-plugins',
  },
  links: {
    github: 'https://github.com/iNKORE-NET/Nodejs.RollupPlugins',
    npm: 'https://www.npmjs.com/package/@inkore/rollup-plugins',
    website: 'https://docs.inkore.net/rollup-plugins',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 26,
      weekly: 4,
    },
  },
})
