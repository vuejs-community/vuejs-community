import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-typescript-path-mapping',
  description: 'Resolving module path which applies typescript\'s path mapping rule',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'resolve',
    'alias',
    'typescript',
    'path-mapping',
  ],
  links: {
    github: 'https://github.com/Mutefish0/rollup-plugin-typescript-path-mapping',
    npm: 'https://www.npmjs.com/package/rollup-plugin-typescript-path-mapping',
    website: 'https://github.com/Mutefish0/rollup-plugin-typescript-path-mapping#readme',
  },
  source: {
    github: 'Mutefish0/rollup-plugin-typescript-path-mapping',
    npm: 'rollup-plugin-typescript-path-mapping',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 31,
      weekly: 5,
    },
  },
})
