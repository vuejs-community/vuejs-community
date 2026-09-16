import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-load-css-module',
  description: 'A plugin to extend vite\'s css module rules, not just ".module" suffix',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'css-module',
  ],
  source: {
    github: 'jsonz1993/vite-plugin-load-css-module',
    npm: 'vite-plugin-load-css-module',
  },
  links: {
    github: 'https://github.com/jsonz1993/vite-plugin-load-css-module',
    npm: 'https://www.npmjs.com/package/vite-plugin-load-css-module',
    website: 'https://github.com/jsonz1993/vite-plugin-load-css-module',
  },
  stats: {
    stars: 20,
    downloads: {
      monthly: 2571,
      weekly: 604,
    },
  },
})
