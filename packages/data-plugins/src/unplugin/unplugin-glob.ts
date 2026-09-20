import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-glob',
  description: 'Imports or exports files using glob match for ES Module.',
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
  links: {
    github: 'https://github.com/sxzz/unplugin-glob',
    npm: 'https://www.npmjs.com/package/unplugin-glob',
    website: 'https://github.com/sxzz/unplugin-glob#readme',
  },
  source: {
    github: 'sxzz/unplugin-glob',
    npm: 'unplugin-glob',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 380,
      weekly: 106,
    },
  },
})
