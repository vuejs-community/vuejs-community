import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-openinvscode',
  description: 'URL input path and file name directly open the corresponding file in vscode',
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
  links: {
    github: 'https://github.com/ovensi/vite-plugin-openinvscode',
    npm: 'https://www.npmjs.com/package/vite-plugin-openinvscode',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 7,
    },
  },
})
