import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@apex-stack/vite',
  description: 'Vite plugin for Apex JS .alpine single-file components',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'alpine',
    'alpinejs',
    'vite',
    'vite-plugin',
    'apex',
    'apexjs',
  ],
  source: {
    github: 'andrecorugda/apexjs',
    npm: '@apex-stack/vite',
  },
  links: {
    github: 'https://github.com/andrecorugda/apexjs',
    npm: 'https://www.npmjs.com/package/@apex-stack/vite',
    website: 'https://apexjs.site',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 113,
      weekly: 9,
    },
  },
})
