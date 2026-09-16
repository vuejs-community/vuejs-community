import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-glsl',
  description: 'Import, inline (and compress) GLSL shader files by unified plugin system.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  source: {
    github: 'YunYouJun/unplugin-glsl',
    npm: 'unplugin-glsl',
  },
  links: {
    github: 'https://github.com/YunYouJun/unplugin-glsl',
    npm: 'https://www.npmjs.com/package/unplugin-glsl',
    website: 'https://github.com/YunYouJun/unplugin-glsl#readme',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 62,
      weekly: 28,
    },
  },
})
