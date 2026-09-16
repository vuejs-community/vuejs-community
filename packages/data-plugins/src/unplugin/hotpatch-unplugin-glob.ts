import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@hotpatch/unplugin-glob',
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
  source: {
    github: 'sxzz/unplugin-glob',
    npm: '@hotpatch/unplugin-glob',
  },
  links: {
    github: 'https://github.com/sxzz/unplugin-glob',
    npm: 'https://www.npmjs.com/package/@hotpatch/unplugin-glob',
    website: 'https://github.com/sxzz/unplugin-glob#readme',
  },
  stats: {
    stars: 38,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
