import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@typora-community-plugin/rollup-plugin-typora',
  description: 'Build typora community plugin with rollup.',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'typora-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@typora-community-plugin/rollup-plugin-typora',
  },
  stats: {
    downloads: {
      monthly: 281,
      weekly: 237,
    },
  },
})
