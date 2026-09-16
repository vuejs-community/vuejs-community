import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@brillout/vite-plugin-ssr',
  description: 'Like Next.js/Nuxt but as do-one-thing-do-it-well Vite plugin.',
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
  source: {
    github: 'brillout/vite-plugin-ssr',
    npm: '@brillout/vite-plugin-ssr',
  },
  links: {
    github: 'https://github.com/brillout/vite-plugin-ssr',
    npm: 'https://www.npmjs.com/package/@brillout/vite-plugin-ssr',
    website: 'https://github.com/brillout/vite-plugin-ssr#readme',
  },
  stats: {
    stars: 18,
    downloads: {
      monthly: 24,
      weekly: 8,
    },
  },
})
