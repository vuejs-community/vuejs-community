import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-eta3',
  description: 'Plugin to precompile Eta functions, making it possible to be used in serverless context like Cloudflare Workers',
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
    'eta',
  ],
  links: {
    github: 'https://github.com/badasintended/unplugin-eta3',
    npm: 'https://www.npmjs.com/package/unplugin-eta3',
    website: 'https://github.com/badasintended/unplugin-eta3#readme',
  },
  source: {
    github: 'badasintended/unplugin-eta3',
    npm: 'unplugin-eta3',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
