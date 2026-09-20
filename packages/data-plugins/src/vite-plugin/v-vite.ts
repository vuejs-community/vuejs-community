import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'v-vite',
  description: 'A Vite.js plugin for integrating the V programming language with modern frontend tooling.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'v',
    'vite',
    'vitejs',
    'vite-plugin',
    'vlang',
    'v-vite',
  ],
  links: {
    github: 'https://github.com/siguici/v-vite',
    npm: 'https://www.npmjs.com/package/v-vite',
    website: 'https://siguici.github.io/v-vite',
  },
  source: {
    github: 'siguici/v-vite',
    npm: 'v-vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 4,
    },
  },
})
