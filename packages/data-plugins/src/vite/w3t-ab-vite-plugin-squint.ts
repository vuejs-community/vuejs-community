import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@w3t-ab/vite-plugin-squint',
  description: 'A Vite plugin to compile squint-cljs',
  version: '0.0.5',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'cljs',
    'clojurescript',
    'squint-cljs',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/w3t-se/vite-plugin-squint',
    npm: 'https://www.npmjs.com/package/@w3t-ab/vite-plugin-squint',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 5,
    },
  },
})
