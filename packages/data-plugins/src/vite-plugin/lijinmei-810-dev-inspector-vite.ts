import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lijinmei-810/dev-inspector-vite',
  description: 'Dev Inspector 配套 Vite 插件：提供 CSS 落盘、style-intent 收集、handoff 打包等服务端 hook',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'devtools',
    'css-inspector',
  ],
  source: {
    github: 'lijinmei915/dev-inspector',
    npm: '@lijinmei-810/dev-inspector-vite',
  },
  links: {
    github: 'https://github.com/lijinmei915/dev-inspector',
    npm: 'https://www.npmjs.com/package/@lijinmei-810/dev-inspector-vite',
    website: 'https://github.com/lijinmei915/dev-inspector#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 28,
      weekly: 5,
    },
  },
})
