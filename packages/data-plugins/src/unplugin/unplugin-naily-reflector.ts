import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-naily-reflector',
  description: 'Simple reflection library based on TypeScript written using unplugin, so you can use it in vite, rspack, nuxt, webpack, etc.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'reflection',
    'typescript',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
  ],
  links: {
    github: 'https://github.com/nailyjs/unplugin-reflector',
    npm: 'https://www.npmjs.com/package/unplugin-naily-reflector',
    website: 'https://github.com/nailyjs/unplugin-reflector',
  },
  source: {
    github: 'nailyjs/unplugin-reflector',
    npm: 'unplugin-naily-reflector',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
