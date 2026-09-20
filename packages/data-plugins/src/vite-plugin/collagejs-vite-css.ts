import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@collagejs/vite-css',
  description: 'Vite plug-in for automatic CSS injection in CollageJS micro-frontends',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'micro-frontend',
    'mfe',
    'microfrontend',
    'collagejs',
    'vite',
    'vite-plugin',
    'css',
  ],
  links: {
    github: 'https://github.com/collagejs/vite',
    npm: 'https://www.npmjs.com/package/@collagejs/vite-css',
    website: 'https://collagejs.dev',
  },
  source: {
    github: 'collagejs/vite',
    npm: '@collagejs/vite-css',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 274,
      weekly: 45,
    },
  },
})
