import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-rename',
  description: 'A Vite plugin that automatically renames HTML files based on entry names during the build process',
  version: '1.1.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'load html',
    'split html',
    'inject html',
    'html',
    'html-loader',
    'loader',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/CNLHB/vite-plugin-html-rename',
    npm: 'https://www.npmjs.com/package/vite-plugin-html-rename',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
