import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@w3t-ab/vite-plugin-squint',
  description: 'A Vite plugin to compile squint-cljs',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'cljs',
    'clojurescript',
    'squint-cljs',
  ],
  source: {
    github: 'w3t-se/vite-plugin-squint',
    npm: '@w3t-ab/vite-plugin-squint',
  },
  links: {
    github: 'https://github.com/w3t-se/vite-plugin-squint',
    npm: 'https://www.npmjs.com/package/@w3t-ab/vite-plugin-squint',
    website: 'https://github.com/w3t-se/vite-plugin-squint#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 3,
    },
  },
})
