import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-rename',
  description: 'A Vite plugin that automatically renames HTML files based on entry names during the build process',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'CNLHB/vite-plugin-html-rename',
    npm: 'vite-plugin-html-rename',
  },
  links: {
    github: 'https://github.com/CNLHB/vite-plugin-html-rename',
    npm: 'https://www.npmjs.com/package/vite-plugin-html-rename',
    website: 'https://github.com/CNLHB/vite-plugin-html-rename#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 7,
      weekly: 0,
    },
  },
})
