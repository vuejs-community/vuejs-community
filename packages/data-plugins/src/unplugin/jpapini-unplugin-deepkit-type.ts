import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@jpapini/unplugin-deepkit-type',
  description: 'Unplugin for using Deepkit type with various build tools.',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'jpapini',
    'deepkit',
    'deepkit-type',
    'unplugin',
    'vite',
    'esbuild',
    'rollup',
    'webpack',
    'plugins',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/jpapini/shared-packages',
    npm: 'https://www.npmjs.com/package/@jpapini/unplugin-deepkit-type',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 8,
    },
  },
})
