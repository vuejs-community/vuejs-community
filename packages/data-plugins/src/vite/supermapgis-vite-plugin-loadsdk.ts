import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@supermapgis/vite-plugin-loadsdk',
  description: 'Vite 插件，用于在 Vite 项目中集成 @supermapgis/clientx 或 @supermapgis/iclient3d。通过 target 参数切换目标包。提供以下功能：1) 开发/预览服务器静态资源代理（wasm/worker/图片等）；2) 构建后自动复制运行时静态资源到产物目录（支持 glob 过滤）；3) 自动配置 resolve.mainFields 和 optimizeDeps，支持 SourceRelease 源码按需加载与 tree-shaking，同时预打包 CJS 依',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'supermap',
    'clientx',
    'iclient3d',
    'supermap3d',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@supermapgis/vite-plugin-loadsdk',
  },
  stats: {
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
