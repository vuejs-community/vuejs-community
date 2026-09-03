import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'tsover-generic-overloads',
  description: 'Temporary fork of tsover with generic operator overload inference',
  version: '6.0.2-generic.0',
  category: 'plugin',
  tags: [
    'esbuild-plugin',
    'operator-overloading',
    'rollup-plugin',
    'typescript',
    'unplugin',
    'vite-plugin',
    'webpack-plugin',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/saiashirwad/tsover',
    npm: 'https://www.npmjs.com/package/tsover-generic-overloads',
  },
  stats: {
    downloads: {
      monthly: 26,
      weekly: 2,
    },
  },
})
