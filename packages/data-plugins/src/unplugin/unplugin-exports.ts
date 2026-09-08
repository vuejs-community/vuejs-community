import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-exports',
  description: 'Add export macros in your project with unplugin.',
  icon: 'icon:dark-unplugin',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'antfu/unplugin-starter',
    npm: 'unplugin-exports',
  },
  links: {
    github: 'https://github.com/antfu/unplugin-starter',
    npm: 'https://www.npmjs.com/package/unplugin-exports',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
