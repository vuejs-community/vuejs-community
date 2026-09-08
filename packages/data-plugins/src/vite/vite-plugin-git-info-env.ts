import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-git-info-env',
  description: 'A Vite plugin to inject git info into your app',
  icon: 'logos:vite-icon',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'git',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'jinbekim/vite-plugin-git-info',
    npm: 'vite-plugin-git-info-env',
  },
  links: {
    github: 'https://github.com/jinbekim/vite-plugin-git-info',
    npm: 'https://www.npmjs.com/package/vite-plugin-git-info-env',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 0,
    },
  },
})
