import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-builder-io-start',
  description: 'Wraps TanStack Start\'s Vite plugin with Builder.io CMS-driven prerendering and spec-compliant sitemap generation.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'builder.io',
    'prerender',
    'sitemap',
    'tanstack-start',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'ADamian17/vite-plugin-builder-io-start',
    npm: 'vite-plugin-builder-io-start',
  },
  links: {
    github: 'https://github.com/ADamian17/vite-plugin-builder-io-start',
    npm: 'https://www.npmjs.com/package/vite-plugin-builder-io-start',
    website: 'https://github.com/ADamian17/vite-plugin-builder-io-start#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 43,
      weekly: 3,
    },
  },
})
