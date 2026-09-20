import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'olovastart',
  description: 'Vite plugin for Olova SSR/SSG framework with React',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'olova',
    'ssr',
    'ssg',
    'react',
    'static-site-generation',
    'server-side-rendering',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/olovastart',
  },
  source: {
    npm: 'olovastart',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 71,
      weekly: 4,
    },
  },
})
