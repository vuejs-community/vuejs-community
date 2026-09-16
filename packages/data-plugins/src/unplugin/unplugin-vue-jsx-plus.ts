import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-jsx-plus',
  description: 'Vue JSX plugin for both Vue 2 and 3.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'rollup',
    'vite',
    'esbuild',
    'webpack',
  ],
  source: {
    github: 'unplugin/unplugin-vue-jsx',
    npm: 'unplugin-vue-jsx-plus',
  },
  links: {
    github: 'https://github.com/unplugin/unplugin-vue-jsx',
    npm: 'https://www.npmjs.com/package/unplugin-vue-jsx-plus',
    website: 'https://github.com/unplugin/unplugin-vue-jsx#readme',
  },
  stats: {
    stars: 32,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
