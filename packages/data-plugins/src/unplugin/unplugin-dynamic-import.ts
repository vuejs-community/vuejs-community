import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-dynamic-import',
  description: 'Unplugin for dynamic import transformation in various build tools',
  icon: 'icon:dark-unplugin',
  version: '1.0.0',
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
    github: 'CaoMeiYouRen/unplugin-dynamic-import',
    npm: 'unplugin-dynamic-import',
  },
  links: {
    github: 'https://github.com/CaoMeiYouRen/unplugin-dynamic-import',
    npm: 'https://www.npmjs.com/package/unplugin-dynamic-import',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 3,
    },
  },
})
