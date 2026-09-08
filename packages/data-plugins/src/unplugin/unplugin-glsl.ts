import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-glsl',
  description: 'Import, inline (and compress) GLSL shader files by unified plugin system.',
  icon: 'icon:dark-unplugin',
  version: '0.1.9',
  category: 'plugin',
  tags: [
    'glsl',
    'shader',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'rspack',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'YunYouJun/unplugin-glsl',
    npm: 'unplugin-glsl',
  },
  links: {
    github: 'https://github.com/YunYouJun/unplugin-glsl',
    npm: 'https://www.npmjs.com/package/unplugin-glsl',
  },
  stats: {
    downloads: {
      monthly: 177,
      weekly: 7,
    },
  },
})
