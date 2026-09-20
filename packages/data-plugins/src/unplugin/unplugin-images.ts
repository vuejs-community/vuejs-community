import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-images',
  description: '自动扫描你的图片目录，生成可直接导入使用的常量映射文件（默认 `src/assets/r.ts`）。基于 [unplugin](https://github.com/unjs/unplugin)，兼容 Vite、Rollup、Webpack、Rspack、esbuild、Farm、Nuxt、Astro 等生态。',
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
  ],
  links: {
    github: 'https://github.com/goodswifter/unplugin-images',
    npm: 'https://www.npmjs.com/package/unplugin-images',
    website: 'https://github.com/goodswifter/unplugin-images#readme',
  },
  source: {
    github: 'goodswifter/unplugin-images',
    npm: 'unplugin-images',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 148,
      weekly: 32,
    },
  },
})
