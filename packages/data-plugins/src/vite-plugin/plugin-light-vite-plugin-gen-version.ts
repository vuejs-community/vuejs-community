import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@plugin-light/vite-plugin-gen-version',
  description: '输出当前版本，包括构建信息、最后一次提交信息',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'plugin-light',
    'vite-plugin-gen-version',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/novlan1/plugin-light',
    npm: 'https://www.npmjs.com/package/@plugin-light/vite-plugin-gen-version',
    website: 'https://novlan1.github.io/docs/plugin-light/zh/vite-plugin-gen-version.html',
  },
  source: {
    github: 'novlan1/plugin-light',
    npm: '@plugin-light/vite-plugin-gen-version',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 793,
      weekly: 292,
    },
  },
})
