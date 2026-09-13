import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-api-types-gen',
  description: '根据 Swagger/OpenAPI 文档或运行时 API 响应，自动生成 TypeScript 类型定义的 Vite 插件',
  icon: 'logos:vite-icon',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'swagger',
    'openapi',
    'typescript',
    'types',
    'codegen',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'Yquian/vite-plugin-api-types-gen',
    npm: 'vite-plugin-api-types-gen',
  },
  links: {
    github: 'https://github.com/Yquian/vite-plugin-api-types-gen',
    npm: 'https://www.npmjs.com/package/vite-plugin-api-types-gen',
  },
  stats: {
    downloads: {
      monthly: 124,
      weekly: 124,
    },
  },
})
