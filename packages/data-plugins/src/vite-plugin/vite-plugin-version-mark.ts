import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-version-mark',
  description: 'A Vite/Nuxt plugin that automatically injects version information (package.json version, git commit SHA, or custom commands) into your application via console, global variables, meta tags, and static files.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'version',
    'vue',
    'nuxt',
    'react',
    'git',
    'commit',
    'log',
    'plugin',
    'vite-plugin',
  ],
  source: {
    github: 'ZhongxuYang/vite-plugin-version-mark',
    npm: 'vite-plugin-version-mark',
  },
  links: {
    github: 'https://github.com/ZhongxuYang/vite-plugin-version-mark',
    npm: 'https://www.npmjs.com/package/vite-plugin-version-mark',
    website: 'https://github.com/ZhongxuYang/vite-plugin-version-mark.git',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15371,
      weekly: 2517,
    },
  },
})
