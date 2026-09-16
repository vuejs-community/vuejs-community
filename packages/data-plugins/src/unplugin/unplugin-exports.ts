import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-exports',
  description: 'Add export macros in your project with unplugin.',
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
    github: 'antfu/unplugin-starter',
    npm: 'unplugin-exports',
  },
  links: {
    github: 'https://github.com/antfu/unplugin-starter',
    npm: 'https://www.npmjs.com/package/unplugin-exports',
    website: 'https://github.com/antfu/unplugin-starter#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
