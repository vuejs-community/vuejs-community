import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-conditional-definition',
  description: 'A plugin that selectively compiles code based on environmental variables,for Vite & Webpack & Esbuild & Rollup',
  icon: 'icon:dark-unplugin',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'rolldown',
    'rspack',
    'transfrom',
    'conditioonal definition',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'lykl/unplugin-conditional-compilation',
    npm: 'unplugin-conditional-definition',
  },
  links: {
    github: 'https://github.com/lykl/unplugin-conditional-compilation',
    npm: 'https://www.npmjs.com/package/unplugin-conditional-definition',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
