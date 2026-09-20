import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@senojs/vite-plugin-sitemap-tanstack-router',
  description: 'Vite plugin to generate sitemap.xml from TanStack Router route tree',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'seno',
    'vite-plugin',
    'sitemap',
    'tanstack-router',
    'seo',
  ],
  links: {
    github: 'https://github.com/senoteam/vite-plugin',
    npm: 'https://www.npmjs.com/package/@senojs/vite-plugin-sitemap-tanstack-router',
    website: 'https://github.com/senoteam/vite-plugin/tree/main/packages/sitemap-tanstack-router',
  },
  source: {
    github: 'senoteam/vite-plugin',
    npm: '@senojs/vite-plugin-sitemap-tanstack-router',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 125,
      weekly: 8,
    },
  },
})
