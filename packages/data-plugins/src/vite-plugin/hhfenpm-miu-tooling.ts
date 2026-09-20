import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@hhfenpm/miu-tooling',
  description: 'MIU 微前端构建工具集 — manifest 生成、子应用 SDK 外部化、发布树装配与 ES5 断言',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'webpack-plugin',
    'microfrontend',
    'miu',
    'manifest',
    'external',
    'ie11',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@hhfenpm/miu-tooling',
  },
  source: {
    npm: '@hhfenpm/miu-tooling',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 412,
      weekly: 42,
    },
  },
})
