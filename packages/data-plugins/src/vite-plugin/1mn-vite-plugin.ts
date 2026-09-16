import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@1mn/vite-plugin',
  description: 'Vite plugin for 1mn — uploads hidden source maps at build time so client-side errors symbolicate to original source. Pairs with @1mn/react.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    '1mn',
    'vite',
    'vite-plugin',
    'sourcemaps',
    'source-maps',
    'error-tracking',
    'sentry',
  ],
  source: {
    github: 'usefulagents/1mn-sdk',
    npm: '@1mn/vite-plugin',
  },
  links: {
    github: 'https://github.com/usefulagents/1mn-sdk',
    npm: 'https://www.npmjs.com/package/@1mn/vite-plugin',
    website: 'https://github.com/usefulagents/1mn-sdk/tree/main/vite-plugin#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 56,
      weekly: 5,
    },
  },
})
