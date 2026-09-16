import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sepveneto/plugin-uni-dispatch-comp',
  description: 'Register global imports on demand for Vite and Webpack',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  source: {
    github: 'SepVeneto/mp-plugin',
    npm: '@sepveneto/plugin-uni-dispatch-comp',
  },
  links: {
    github: 'https://github.com/SepVeneto/mp-plugin',
    npm: 'https://www.npmjs.com/package/@sepveneto/plugin-uni-dispatch-comp',
    website: 'https://github.com/SepVeneto/mp-plugin#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 2,
    },
  },
})
