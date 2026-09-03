import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@plugin-123/my-f-plugin',
  description: 'Register global imports on demand for Vite and Webpack',
  version: '0.0.3',
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
    npm: 'https://www.npmjs.com/package/@plugin-123/my-f-plugin',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 4,
    },
  },
})
