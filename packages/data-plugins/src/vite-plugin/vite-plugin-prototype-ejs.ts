import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-prototype-ejs',
  description: '```html <% if (user) { %>   <h2><%= user.name %></h2> <% } %> ```',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'ejs',
  ],
  links: {
    github: 'https://github.com/NguyenTuDong/vite-prototype',
    npm: 'https://www.npmjs.com/package/vite-plugin-prototype-ejs',
    website: 'https://github.com/NguyenTuDong/vite-prototype#readme',
  },
  source: {
    github: 'NguyenTuDong/vite-prototype',
    npm: 'vite-plugin-prototype-ejs',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 1,
    },
  },
})
