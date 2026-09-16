import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-openinvscode',
  description: 'URL input path and file name directly open the corresponding file in vscode',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vscode',
  ],
  source: {
    github: 'ovensi/vite-plugin-openinvscode',
    npm: 'vite-plugin-openinvscode',
  },
  links: {
    github: 'https://github.com/ovensi/vite-plugin-openinvscode',
    npm: 'https://www.npmjs.com/package/vite-plugin-openinvscode',
    website: 'https://github.com/ovensi/vite-plugin-openinvscode',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 23,
      weekly: 1,
    },
  },
})
