import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@aloha66/upload-sourcemap-plugin',
  description: 'Register global imports on demand for Vite and Webpack',
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
  ],
  links: {
    github: 'https://github.com/antfu/unplugin-starter',
    npm: 'https://www.npmjs.com/package/@aloha66/upload-sourcemap-plugin',
    website: 'https://github.com/antfu/unplugin-starter#readme',
  },
  source: {
    github: 'antfu/unplugin-starter',
    npm: '@aloha66/upload-sourcemap-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 1,
    },
  },
})
