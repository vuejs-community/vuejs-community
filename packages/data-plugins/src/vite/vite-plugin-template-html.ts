import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-template-html',
  description: '`vite-plugin-template-html` 的设计思路受 [vite-plugin-html](https://github.com/vbenjs/vite-plugin-html) 启发，沿用了其 EJS 模板、HTML 压缩等功能，不一样的是 `vite-plugin-template-html` 可以自定义路由转发，用户可以随心所欲的配置路由与访问的html文件间的关系，且有更良好的多页应用的支持。',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'vitejs',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/includeios/vite-plugin-template-html',
    npm: 'https://www.npmjs.com/package/vite-plugin-template-html',
  },
  stats: {
    downloads: {
      monthly: 496,
      weekly: 112,
    },
  },
})
