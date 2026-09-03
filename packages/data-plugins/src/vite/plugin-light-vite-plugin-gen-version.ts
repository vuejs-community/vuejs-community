import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@plugin-light/vite-plugin-gen-version',
  description: '输出当前版本，包括构建信息、最后一次提交信息',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'plugin-light',
    'vite-plugin-gen-version',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/novlan1/plugin-light',
    npm: 'https://www.npmjs.com/package/@plugin-light/vite-plugin-gen-version',
  },
  stats: {
    downloads: {
      monthly: 1184,
      weekly: 203,
    },
  },
})
