import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'devtools-workspace',
  description: 'Chrome DevTools Automatic Workspace Folders - 自动创建 DevTools 工作区配置文件，支持所有项目类型（Vite、Webpack、Rollup、Next.js、React、Vue等）',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/QINGYUAI/devtools-workspace',
    npm: 'https://www.npmjs.com/package/devtools-workspace',
    website: 'https://github.com/QINGYUAI/devtools-workspace#readme',
  },
  source: {
    github: 'QINGYUAI/devtools-workspace',
    npm: 'devtools-workspace',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 21,
      weekly: 1,
    },
  },
})
