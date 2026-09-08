import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-element-plus',
  description: 'Import Element Plus on demand. Support Vite, Webpack, Vue CLI, Rollup and esbuild.',
  icon: 'icon:dark-unplugin',
  version: '0.11.2',
  category: 'plugin',
  tags: [
    'element-plus',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'esbuild',
    'plugin',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'element-plus/unplugin-element-plus',
    npm: 'unplugin-element-plus',
  },
  links: {
    github: 'https://github.com/element-plus/unplugin-element-plus',
    npm: 'https://www.npmjs.com/package/unplugin-element-plus',
  },
  stats: {
    downloads: {
      monthly: 156368,
      weekly: 41926,
    },
  },
})
