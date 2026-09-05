import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-eta3',
  description: 'Plugin to precompile Eta functions, making it possible to be used in serverless context like Cloudflare Workers',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
    'eta',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/badasintended/unplugin-eta3',
    npm: 'https://www.npmjs.com/package/unplugin-eta3',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 3,
    },
  },
})
