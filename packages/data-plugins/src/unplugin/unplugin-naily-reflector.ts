import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-naily-reflector',
  description: 'Simple reflection library based on TypeScript written using unplugin, so you can use it in vite, rspack, nuxt, webpack, etc.',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'reflection',
    'typescript',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/nailyjs/unplugin-reflector',
    npm: 'https://www.npmjs.com/package/unplugin-naily-reflector',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 4,
    },
  },
})
