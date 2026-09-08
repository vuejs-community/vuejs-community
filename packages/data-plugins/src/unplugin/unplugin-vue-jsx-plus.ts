import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-jsx-plus',
  description: 'Vue JSX plugin for both Vue 2 and 3.',
  icon: 'icon:dark-unplugin',
  version: '0.6.2',
  category: 'plugin',
  tags: [
    'unplugin',
    'rollup',
    'vite',
    'esbuild',
    'webpack',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'unplugin/unplugin-vue-jsx',
    npm: 'unplugin-vue-jsx-plus',
  },
  links: {
    github: 'https://github.com/unplugin/unplugin-vue-jsx',
    npm: 'https://www.npmjs.com/package/unplugin-vue-jsx-plus',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 2,
    },
  },
})
