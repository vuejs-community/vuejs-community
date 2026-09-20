import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@animus-ui/vite-plugin',
  description: 'Animus static CSS extraction Vite plugin',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'animus',
    'css',
    'css-in-js',
    'styled',
    'vite',
    'vite-plugin',
    'zero-runtime',
  ],
  links: {
    github: 'https://github.com/codecaaron/animus',
    npm: 'https://www.npmjs.com/package/@animus-ui/vite-plugin',
    website: 'https://github.com/codecaaron/animus/tree/main/packages/vite-plugin#readme',
  },
  source: {
    github: 'codecaaron/animus',
    npm: '@animus-ui/vite-plugin',
  },
  stats: {
    stars: 9,
    downloads: {
      monthly: 319,
      weekly: 27,
    },
  },
})
