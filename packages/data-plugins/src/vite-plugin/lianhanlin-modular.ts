import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'lianhanlin-modular',
  description: '文件路径即依赖网格 (Mesh)，零装配、零反射的轻量 TypeScript 全栈 Path-IoC 模块引擎。内置 Vite 与 Webpack 官方插件，支持 DAG 拓扑排序、80% CPU 提速静态图预编译与 100% 类型自动生成。',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'path-ioc',
    'ioc',
    'di',
    'dependency-injection',
    'mesh',
    'modular',
    'typescript',
    'type-safe',
    'zero-boilerplate',
    'dag',
    'topological-sort',
    'vite',
    'vite-plugin',
    'webpack',
    'webpack-plugin',
    'fullstack',
    'hono',
    'architecture',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/lianhanlin-modular',
  },
  source: {
    npm: 'lianhanlin-modular',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 387,
      weekly: 29,
    },
  },
})
