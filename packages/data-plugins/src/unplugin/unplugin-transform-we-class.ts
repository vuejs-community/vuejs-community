import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-transform-we-class',
  description: '转换微信小程序中带有转义字符的class',
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
    'we',
    'class',
  ],
  source: {
    github: 'MellowCo/unplugin-transform-we-class',
    npm: 'unplugin-transform-we-class',
  },
  links: {
    github: 'https://github.com/MellowCo/unplugin-transform-we-class',
    npm: 'https://www.npmjs.com/package/unplugin-transform-we-class',
    website: 'https://github.com/MellowCo/unplugin-transform-we-class#readme',
  },
  stats: {
    stars: 13,
    downloads: {
      monthly: 103,
      weekly: 28,
    },
  },
})
