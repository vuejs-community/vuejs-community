import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ssr',
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
  links: {
    github: 'https://github.com/brillout/vite-plugin-ssr',
    npm: 'https://www.npmjs.com/package/vite-plugin-ssr',
    website: 'https://github.com/brillout/vite-plugin-ssr#readme',
  },
  source: {
    github: 'brillout/vite-plugin-ssr',
    npm: 'vite-plugin-ssr',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 53464,
      weekly: 6802,
    },
  },
})
