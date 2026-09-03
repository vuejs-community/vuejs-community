import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'lianhanlin-modular',
  description: '文件路径即依赖网格 (Mesh)，零装配、零反射的轻量 TypeScript 全栈 Path-IoC 模块引擎。内置 Vite 与 Webpack 官方插件，支持 DAG 拓扑排序、80% CPU 提速静态图预编译与 100% 类型自动生成。',
  version: '0.0.12',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/lianhanlin-modular',
  },
  stats: {
    downloads: {
      monthly: 534,
      weekly: 87,
    },
  },
})
