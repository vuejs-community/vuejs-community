import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-openinvscode',
  description: 'URL input path and file name directly open the corresponding file in vscode',
  icon: 'logos:vite-icon',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vscode',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'ovensi/vite-plugin-openinvscode',
    npm: 'vite-plugin-openinvscode',
  },
  links: {
    github: 'https://github.com/ovensi/vite-plugin-openinvscode',
    npm: 'https://www.npmjs.com/package/vite-plugin-openinvscode',
  },
  stats: {
    downloads: {
      monthly: 28,
      weekly: 6,
    },
  },
})
