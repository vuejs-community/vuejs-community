import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-prototype-ejs',
  description: '```html <% if (user) { %>   <h2><%= user.name %></h2> <% } %> ```',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'ejs',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/NguyenTuDong/vite-prototype',
    npm: 'https://www.npmjs.com/package/vite-plugin-prototype-ejs',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 4,
    },
  },
})
