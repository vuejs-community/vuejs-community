import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-images',
  description: '自动扫描你的图片目录，生成可直接导入使用的常量映射文件（默认 `src/assets/r.ts`）。基于 [unplugin](https://github.com/unjs/unplugin)，兼容 Vite、Rollup、Webpack、Rspack、esbuild、Farm、Nuxt、Astro 等生态。',
  version: '1.2.1',
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
    github: 'https://github.com/goodswifter/unplugin-images',
    npm: 'https://www.npmjs.com/package/unplugin-images',
  },
  stats: {
    downloads: {
      monthly: 249,
      weekly: 22,
    },
  },
})
