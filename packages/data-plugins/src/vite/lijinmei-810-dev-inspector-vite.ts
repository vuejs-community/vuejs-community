import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@lijinmei-810/dev-inspector-vite',
  description: 'Dev Inspector 配套 Vite 插件：提供 CSS 落盘、style-intent 收集、handoff 打包等服务端 hook',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'devtools',
    'css-inspector',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/lijinmei915/dev-inspector',
    npm: 'https://www.npmjs.com/package/@lijinmei-810/dev-inspector-vite',
  },
  stats: {
    downloads: {
      monthly: 34,
      weekly: 11,
    },
  },
})
