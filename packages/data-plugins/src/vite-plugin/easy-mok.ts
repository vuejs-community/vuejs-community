import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'easy-mok',
  description: '开发期 mock 中间件: mock 写一次, 场景, 延迟, 状态码在浏览器里切, 真实响应一键存成 mock; 支持 vite, webpack-dev-server, express, fastify 与独立运行',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'mock',
    'mock-server',
    'api-mock',
    'mock-api',
    'mock-data',
    'middleware',
    'dev-server',
    'vite-plugin',
    'webpack-dev-server',
    'express',
    'fastify',
    'proxy',
    'msw-alternative',
  ],
  links: {
    github: 'https://github.com/HeavenSky/easy-pkgs',
    npm: 'https://www.npmjs.com/package/easy-mok',
    website: 'https://github.com/HeavenSky/easy-pkgs/tree/main/packages/easy-mok#readme',
  },
  source: {
    github: 'HeavenSky/easy-pkgs',
    npm: 'easy-mok',
  },
})
