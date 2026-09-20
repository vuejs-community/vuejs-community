import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-prototype-nunjucks',
  description: '```twig <ul id="navigation">     {% for item in [\'Home\', \'About\'] %}         <li>{{ item }}</li>     {% endfor %} </ul> ```',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'nunjucks',
  ],
  links: {
    github: 'https://github.com/NguyenTuDong/vite-prototype',
    npm: 'https://www.npmjs.com/package/vite-plugin-prototype-nunjucks',
    website: 'https://github.com/NguyenTuDong/vite-prototype#readme',
  },
  source: {
    github: 'NguyenTuDong/vite-prototype',
    npm: 'vite-plugin-prototype-nunjucks',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 27,
      weekly: 1,
    },
  },
})
