import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@function-decorator/unplugin',
  description: 'Function decorator polyfill for vite, rollup, rolldown, webpack and more.',
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
    github: 'Groupguanfang/function-decorator',
    npm: '@function-decorator/unplugin',
  },
  links: {
    github: 'https://github.com/Groupguanfang/function-decorator',
    npm: 'https://www.npmjs.com/package/@function-decorator/unplugin',
    website: 'https://github.com/Groupguanfang/function-decorator',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
