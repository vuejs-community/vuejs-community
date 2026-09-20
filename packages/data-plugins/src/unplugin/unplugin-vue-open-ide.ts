import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-open-ide',
  description: 'jump to local IDE source code while click the element of browser automatically.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'vite',
    'webpack',
    'esbuild',
    'rollup',
    'open ide',
    'vue',
    'unplugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/unplugin-vue-open-ide',
  },
  source: {
    npm: 'unplugin-vue-open-ide',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 24,
      weekly: 1,
    },
  },
})
