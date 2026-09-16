import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rk-web/vite-plugin-seo',
  description: 'Плагин для SEO оптимизации',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'seo',
    'sitemap',
    'robots',
  ],
  source: {
    npm: '@rk-web/vite-plugin-seo',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@rk-web/vite-plugin-seo',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
