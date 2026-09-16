import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-git-info',
  description: 'Automatically put the git info file in your project dist folder',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'version',
  ],
  source: {
    github: 'zhuchaoling/vite-plugin-git-info',
    npm: 'vite-plugin-git-info',
  },
  links: {
    github: 'https://github.com/zhuchaoling/vite-plugin-git-info',
    npm: 'https://www.npmjs.com/package/vite-plugin-git-info',
    website: 'https://github.com/zhuchaoling/vite-plugin-git-info#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 1,
    },
  },
})
