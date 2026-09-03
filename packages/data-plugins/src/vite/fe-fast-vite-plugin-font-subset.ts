import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@fe-fast/vite-plugin-font-subset',
  description: 'Font subsetting plugin for Vite, Webpack, Rollup & Rspack - 基于项目实际使用字符自动子集化字体并生成 WOFF2',
  version: '1.1.1',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/william-xue/vite-plugin-font-subset',
    npm: 'https://www.npmjs.com/package/@fe-fast/vite-plugin-font-subset',
  },
  stats: {
    downloads: {
      monthly: 91,
      weekly: 21,
    },
  },
})
