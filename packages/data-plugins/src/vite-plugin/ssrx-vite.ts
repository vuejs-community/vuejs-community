import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ssrx/vite',
  description: 'A Vite plugin that improves the DX of developing SSR apps.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'ssr',
  ],
  links: {
    github: 'https://github.com/marbemac/ssrx',
    npm: 'https://www.npmjs.com/package/@ssrx/vite',
    website: 'https://github.com/marbemac/ssrx#readme',
  },
  source: {
    github: 'marbemac/ssrx',
    npm: '@ssrx/vite',
  },
  stats: {
    stars: 155,
    downloads: {
      monthly: 264,
      weekly: 68,
    },
  },
})
