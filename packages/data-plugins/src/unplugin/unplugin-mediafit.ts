import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-mediafit',
  description: '转换图片、视频等资源成自己想要的样子，易扩展，响应式页面开发利器，内置 ffmpeg（处理视频）、sharp（处理图片）支持',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'mediafit',
    'vite',
    'vite-plugin',
    'sharp',
    'ffmpeg',
    'unplugin',
    'responsive',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/unplugin-mediafit',
  },
  source: {
    npm: 'unplugin-mediafit',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
