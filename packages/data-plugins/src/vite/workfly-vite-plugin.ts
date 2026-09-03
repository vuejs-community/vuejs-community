import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@workfly/vite-plugin',
  description: 'WorkFly 小程序的 Vite 插件：dev 自动发现 + wf SDK 注入 + 权限门控；build 校验并打包 .wfapp.zip。',
  version: '0.2.2',
  category: 'plugin',
  tags: [
    'workfly',
    'miniapp',
    'vite-plugin',
    'wfapp',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@workfly/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 589,
      weekly: 12,
    },
  },
})
