import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'devtools-workspace',
  description: 'Chrome DevTools Automatic Workspace Folders - 自动创建 DevTools 工作区配置文件，支持所有项目类型（Vite、Webpack、Rollup、Next.js、React、Vue等）',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'devtools',
    'chrome',
    'workspace',
    'automatic',
    'vite-plugin',
    'webpack-plugin',
    'rollup-plugin',
    'nextjs-plugin',
    'react',
    'vue',
    'angular',
    'svelte',
    'development',
    'debugging',
    'universal',
    'all-projects',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/QINGYUAI/devtools-workspace',
    npm: 'https://www.npmjs.com/package/devtools-workspace',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 3,
    },
  },
})
