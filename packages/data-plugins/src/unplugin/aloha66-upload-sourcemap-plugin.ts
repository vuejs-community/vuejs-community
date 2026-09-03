import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@aloha66/upload-sourcemap-plugin',
  description: 'Register global imports on demand for Vite and Webpack',
  version: '0.1.1-beta.3',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/antfu/unplugin-starter',
    npm: 'https://www.npmjs.com/package/@aloha66/upload-sourcemap-plugin',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 8,
    },
  },
})
