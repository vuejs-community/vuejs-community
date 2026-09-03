import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@hotpatch/unplugin-glob',
  description: 'Imports or exports files using glob match for ES Module.',
  version: '0.3.4',
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
  links: {
    github: 'https://github.com/sxzz/unplugin-glob',
    npm: 'https://www.npmjs.com/package/@hotpatch/unplugin-glob',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 5,
    },
  },
})
