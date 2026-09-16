import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'voicss',
  description: '⚡ Ultra-Light Compile-Time CSS-in-TS',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'css-in-ts',
    'compile-time-css',
    'zero-runtime-css',
    'vite-plugin',
    'next-plugin',
  ],
  source: {
    github: 'kh4f/voicss',
    npm: 'voicss',
  },
  links: {
    github: 'https://github.com/kh4f/voicss',
    npm: 'https://www.npmjs.com/package/voicss',
    website: 'https://github.com/kh4f/voicss',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 199,
      weekly: 46,
    },
  },
})
