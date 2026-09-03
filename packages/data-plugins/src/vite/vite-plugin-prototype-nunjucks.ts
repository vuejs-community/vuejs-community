import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-prototype-nunjucks',
  description: '```twig <ul id="navigation">     {% for item in [\'Home\', \'About\'] %}         <li>{{ item }}</li>     {% endfor %} </ul> ```',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'nunjucks',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/NguyenTuDong/vite-prototype',
    npm: 'https://www.npmjs.com/package/vite-plugin-prototype-nunjucks',
  },
  stats: {
    downloads: {
      monthly: 28,
      weekly: 8,
    },
  },
})
