import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@shinjinseop/page-dep-map-vite-plugin',
  description: 'Vite plugin that injects the page-dep-map inspect helper into the host app during dev',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'react',
    'inspect',
    'page-dep-map',
    'devtools',
  ],
  source: {
    github: 'yeo11200/page-dep-map',
    npm: '@shinjinseop/page-dep-map-vite-plugin',
  },
  links: {
    github: 'https://github.com/yeo11200/page-dep-map',
    npm: 'https://www.npmjs.com/package/@shinjinseop/page-dep-map-vite-plugin',
    website: 'https://page-dep-map-landing.vercel.app/',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 18,
      weekly: 5,
    },
  },
})
