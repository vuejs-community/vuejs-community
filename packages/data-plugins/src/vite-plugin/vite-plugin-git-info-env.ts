import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-git-info-env',
  description: 'A Vite plugin to inject git info into your app',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'git',
  ],
  source: {
    github: 'jinbekim/vite-plugin-git-info',
    npm: 'vite-plugin-git-info-env',
  },
  links: {
    github: 'https://github.com/jinbekim/vite-plugin-git-info',
    npm: 'https://www.npmjs.com/package/vite-plugin-git-info-env',
    website: 'https://github.com/jinbekim/vite-plugin-git-info#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
