import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@sebastianspeitel/rollup-plugin-assemblyscript-loader',
  description: 'A Rollup plugin to import assembly script modules using @assemblyscript/loader.',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'assets',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/SebastianSpeitel/rollup-plugin-assemblyscript-loader',
    npm: 'https://www.npmjs.com/package/@sebastianspeitel/rollup-plugin-assemblyscript-loader',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 4,
    },
  },
})
