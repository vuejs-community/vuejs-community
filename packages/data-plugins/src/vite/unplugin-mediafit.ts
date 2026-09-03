import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-mediafit',
  description: '转换图片、视频等资源成自己想要的样子，易扩展，响应式页面开发利器，内置 ffmpeg（处理视频）、sharp（处理图片）支持',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'mediafit',
    'vite',
    'vite-plugin',
    'sharp',
    'ffmpeg',
    'unplugin',
    'responsive',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/unplugin-mediafit',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
