import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-version-date-mark',
  description: 'Automatically insert the version or git_commit_sha in your Vite/Nuxt project.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/ZhongxuYang/vite-plugin-version-mark',
    npm: 'https://www.npmjs.com/package/vite-plugin-version-date-mark',
    website: 'https://github.com/ZhongxuYang/vite-plugin-version-mark.git',
  },
  source: {
    github: 'ZhongxuYang/vite-plugin-version-mark',
    npm: 'vite-plugin-version-date-mark',
  },
  stats: {
    stars: 91,
    downloads: {
      monthly: 36,
      weekly: 5,
    },
  },
})
