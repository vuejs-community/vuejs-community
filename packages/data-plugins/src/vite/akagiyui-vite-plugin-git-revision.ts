import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@akagiyui/vite-plugin-git-revision',
  description: 'Vite 插件：在构建时注入当前 Git 提交哈希、提交时间和构建时间',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'git',
    'revision',
    'commit',
    'build-info',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/AkagiYui/vite-plugin-git-revision',
    npm: 'https://www.npmjs.com/package/@akagiyui/vite-plugin-git-revision',
  },
  stats: {
    downloads: {
      monthly: 58,
      weekly: 7,
    },
  },
})
