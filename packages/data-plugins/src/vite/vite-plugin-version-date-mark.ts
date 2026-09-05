import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-version-date-mark',
  description: 'Automatically insert the version or git_commit_sha in your Vite/Nuxt project.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'git',
    'commit',
    'log',
    'version',
    'vite',
    'plugin',
    'vite-plugin',
    'nuxt',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ZhongxuYang/vite-plugin-version-mark',
    npm: 'https://www.npmjs.com/package/vite-plugin-version-date-mark',
  },
  stats: {
    downloads: {
      monthly: 38,
      weekly: 18,
    },
  },
})
