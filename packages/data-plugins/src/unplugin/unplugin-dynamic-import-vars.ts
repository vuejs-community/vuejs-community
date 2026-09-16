import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-dynamic-import-vars',
  description: 'A universal bundler plugin to support variables in dynamic imports in Bundler.',
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
    github: 'antfu/unplugin-dynamic-import-vars',
    npm: 'unplugin-dynamic-import-vars',
  },
  links: {
    github: 'https://github.com/antfu/unplugin-dynamic-import-vars',
    npm: 'https://www.npmjs.com/package/unplugin-dynamic-import-vars',
    website: 'https://github.com/antfu/unplugin-dynamic-import-vars#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
