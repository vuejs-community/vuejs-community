import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@intaj/vite',
  description: 'Vite plugin: environments, SSR, per-route ssr/spa/ssg (RFC 0003)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'intaj',
    'framework',
    'fullstack',
    'vite',
    'vite-plugin',
    'ssr',
    'ssg',
    'spa',
  ],
  source: {
    github: 'intaj-dev/intaj',
    npm: '@intaj/vite',
  },
  links: {
    github: 'https://github.com/intaj-dev/intaj',
    npm: 'https://www.npmjs.com/package/@intaj/vite',
    website: 'https://github.com/intaj-dev/intaj#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 2,
    },
  },
})
