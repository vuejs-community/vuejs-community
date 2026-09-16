import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@akagiyui/vite-plugin-git-revision',
  description: 'Vite 插件：在构建时注入当前 Git 提交哈希、提交时间和构建时间',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'git',
    'revision',
    'commit',
    'build-info',
  ],
  source: {
    github: 'AkagiYui/vite-plugin-git-revision',
    npm: '@akagiyui/vite-plugin-git-revision',
  },
  links: {
    github: 'https://github.com/AkagiYui/vite-plugin-git-revision',
    npm: 'https://www.npmjs.com/package/@akagiyui/vite-plugin-git-revision',
    website: 'https://github.com/AkagiYui/vite-plugin-git-revision',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 40,
      weekly: 5,
    },
  },
})
