import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-macros',
  description: 'Macros for bundlers.',
  icon: 'icon:dark-unplugin',
  version: '0.23.2',
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
    github: 'unplugin/unplugin-macros',
    npm: 'unplugin-macros',
  },
  links: {
    github: 'https://github.com/unplugin/unplugin-macros',
    npm: 'https://www.npmjs.com/package/unplugin-macros',
  },
  stats: {
    downloads: {
      monthly: 33114,
      weekly: 8472,
    },
  },
})
