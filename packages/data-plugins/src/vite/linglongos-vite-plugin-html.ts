import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@linglongos/vite-plugin-html',
  description: 'Fork of vite-plugin-html with Vite 8 support, EJS template and HTML minification for index.html',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'html',
    'minify',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/chudongsong/vite-plugin-html2',
    npm: 'https://www.npmjs.com/package/@linglongos/vite-plugin-html',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 6,
    },
  },
})
