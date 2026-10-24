import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@tuvix.js/vite',
  description: 'Vite plugin that puts micro-app island CSS and modulepreload links into the server-rendered <head>',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'microfrontend',
    'vite',
    'vite-plugin',
    'ssr',
    'css',
    'tuvix',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@tuvix.js/vite',
  },
  source: {
    npm: '@tuvix.js/vite',
  },
})
