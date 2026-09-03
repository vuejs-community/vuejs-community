import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@minar-kotonoha/janus-unplugin',
  description: 'Janus 构建插件：Schema 扫描 + virtual module 注入 + SW 脚本注入（基于 unplugin 全平台适配）',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'unplugin',
    'service-worker',
    'vite',
    'webpack',
    'rollup',
    'esbuild',
    'rspack',
    'schema',
    'json-schema',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/minar-kotonoha/janus',
    npm: 'https://www.npmjs.com/package/@minar-kotonoha/janus-unplugin',
  },
  stats: {
    downloads: {
      monthly: 85,
      weekly: 10,
    },
  },
})
