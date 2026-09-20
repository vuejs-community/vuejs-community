import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@fe-fast/vite-plugin-font-subset',
  description: 'Font subsetting plugin for Vite, Webpack, Rollup & Rspack - 基于项目实际使用字符自动子集化字体并生成 WOFF2',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'webpack',
    'webpack-plugin',
    'rollup',
    'rollup-plugin',
    'rspack',
    'font',
    'subset',
    'woff2',
    'multi-tool',
    'build-tool',
  ],
  links: {
    github: 'https://github.com/william-xue/vite-plugin-font-subset',
    npm: 'https://www.npmjs.com/package/@fe-fast/vite-plugin-font-subset',
    website: 'https://github.com/william-xue/vite-plugin-font-subset#readme',
  },
  source: {
    github: 'william-xue/vite-plugin-font-subset',
    npm: '@fe-fast/vite-plugin-font-subset',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 72,
      weekly: 33,
    },
  },
})
