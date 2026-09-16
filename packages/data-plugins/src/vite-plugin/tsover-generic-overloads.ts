import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'tsover-generic-overloads',
  description: 'Temporary fork of tsover with generic operator overload inference',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'esbuild-plugin',
    'operator-overloading',
    'rollup-plugin',
    'typescript',
    'unplugin',
    'vite-plugin',
    'webpack-plugin',
  ],
  source: {
    github: 'saiashirwad/tsover',
    npm: 'tsover-generic-overloads',
  },
  links: {
    github: 'https://github.com/saiashirwad/tsover',
    npm: 'https://www.npmjs.com/package/tsover-generic-overloads',
    website: 'https://tsover.swmansion.com',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 5,
    },
  },
})
