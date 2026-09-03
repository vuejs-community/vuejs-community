import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-unused',
  description: 'Check unused dependencies.',
  version: '0.6.0',
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
    github: 'https://github.com/unplugin/unplugin-unused',
    npm: 'https://www.npmjs.com/package/unplugin-unused',
  },
  stats: {
    downloads: {
      monthly: 101817,
      weekly: 24162,
    },
  },
})
