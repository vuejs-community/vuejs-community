import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-version-mark',
  description: 'A Vite/Nuxt plugin that automatically injects version information (package.json version, git commit SHA, or custom commands) into your application via console, global variables, meta tags, and static files.',
  version: '0.2.2',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ZhongxuYang/vite-plugin-version-mark',
    npm: 'https://www.npmjs.com/package/vite-plugin-version-mark',
  },
  stats: {
    downloads: {
      monthly: 20599,
      weekly: 3545,
    },
  },
})
