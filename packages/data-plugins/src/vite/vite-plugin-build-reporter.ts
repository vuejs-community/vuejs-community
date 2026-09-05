import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-build-reporter',
  description: '一个 Vite 插件，在 build 之后把构建分析（耗时、产物体积、Top chunk、gzip）打印到终端，不生成任何报告文件。',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'analyzer',
    'build',
    'bundle',
    'cli',
    'report',
    'rolldown',
    'rollup',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/pohoc/vite-plugin-build-reporter',
    npm: 'https://www.npmjs.com/package/vite-plugin-build-reporter',
  },
  stats: {
    downloads: {
      monthly: 53,
      weekly: 5,
    },
  },
})
