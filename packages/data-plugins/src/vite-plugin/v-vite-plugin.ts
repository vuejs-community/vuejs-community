import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'v-vite-plugin',
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
  source: {
    github: 'siguici/v-vite',
    npm: 'v-vite-plugin',
  },
  links: {
    github: 'https://github.com/siguici/v-vite',
    npm: 'https://www.npmjs.com/package/v-vite-plugin',
    website: 'https://siguici.github.io/v-vite',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
