import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@workfly/vite-plugin',
  description: 'WorkFly 小程序的 Vite 插件：dev 自动发现 + wf SDK 注入 + 权限门控；build 校验并打包 .wfapp.zip。',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'workfly',
    'miniapp',
    'vite-plugin',
    'wfapp',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@workfly/vite-plugin',
  },
  source: {
    npm: '@workfly/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 63,
      weekly: 4,
    },
  },
})
