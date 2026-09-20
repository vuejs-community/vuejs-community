import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-embed',
  description: 'embeds any file as a base64 string into the source code',
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
    'embed',
    'base64',
    'esbuild',
    'rspack',
  ],
  links: {
    github: 'https://github.com/zhangfisher/unplugin-embed',
    npm: 'https://www.npmjs.com/package/unplugin-embed',
    website: 'https://github.com/zhangfisher/unplugin-embed/blob/master/README.md',
  },
  source: {
    github: 'zhangfisher/unplugin-embed',
    npm: 'unplugin-embed',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
