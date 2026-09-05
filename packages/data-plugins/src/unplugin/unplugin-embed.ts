import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-embed',
  description: 'embeds any file as a base64 string into the source code',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
    'embed',
    'base64',
    'esbuild',
    'rspack',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/zhangfisher/unplugin-embed',
    npm: 'https://www.npmjs.com/package/unplugin-embed',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
