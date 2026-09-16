import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@minar-kotonoha/janus-unplugin',
  description: 'Janus 构建插件：Schema 扫描 + virtual module 注入 + SW 脚本注入（基于 unplugin 全平台适配）',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  source: {
    github: 'minar-kotonoha/janus',
    npm: '@minar-kotonoha/janus-unplugin',
  },
  links: {
    github: 'https://github.com/minar-kotonoha/janus',
    npm: 'https://www.npmjs.com/package/@minar-kotonoha/janus-unplugin',
    website: 'https://github.com/minar-kotonoha/janus#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 35,
      weekly: 4,
    },
  },
})
