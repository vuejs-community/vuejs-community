import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@warp-ts/unplugin',
  description: 'Warp 的 unplugin 适配：在 Vite / Rspack / webpack 里编译 .warp 单文件组件与 JSX',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'warp',
    'unplugin',
    'vite-plugin',
    'webpack-plugin',
    'rspack',
    'sfc',
    'jsx',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@warp-ts/unplugin',
  },
  source: {
    npm: '@warp-ts/unplugin',
  },
})
