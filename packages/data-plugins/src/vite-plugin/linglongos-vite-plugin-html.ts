import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@linglongos/vite-plugin-html',
  description: 'Fork of vite-plugin-html with Vite 8 support, EJS template and HTML minification for index.html',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'html',
    'minify',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/chudongsong/vite-plugin-html2',
    npm: 'https://www.npmjs.com/package/@linglongos/vite-plugin-html',
    website: 'https://github.com/chudongsong/vite-plugin-html2#readme',
  },
  source: {
    github: 'chudongsong/vite-plugin-html2',
    npm: '@linglongos/vite-plugin-html',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 23,
      weekly: 2,
    },
  },
})
