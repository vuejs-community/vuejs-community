import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-bundle-guard',
  description: 'A rollup plugin that makes sure you don\'t accidentally import something statically, which could have an effect on your bundle size.',
  version: '2.2.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rollup',
    'import',
    'guard',
    'static-import',
    'dynamic-import',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/tjenkinson/rollup-plugin-bundle-guard',
    npm: 'https://www.npmjs.com/package/rollup-plugin-bundle-guard',
  },
  stats: {
    downloads: {
      monthly: 69,
      weekly: 10,
    },
  },
})
