import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@typora-community-plugin/rollup-plugin-typora',
  description: 'Build typora community plugin with rollup.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'typora-plugin',
  ],
  source: {
    npm: '@typora-community-plugin/rollup-plugin-typora',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@typora-community-plugin/rollup-plugin-typora',
    website: 'https://github.com/typora-community-plugin/typora-community-plugin/tree/main/packages/rollup-plugin#README.md',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 334,
      weekly: 25,
    },
  },
})
