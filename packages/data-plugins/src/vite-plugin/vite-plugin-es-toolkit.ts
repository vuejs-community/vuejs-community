import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-es-toolkit',
  description: 'Vite plugin for replacing Lodash with es-toolkit',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'plugin',
    'lodash',
    'es-toolkit',
  ],
  links: {
    github: 'https://github.com/wojtekmaj/vite-plugin-es-toolkit',
    npm: 'https://www.npmjs.com/package/vite-plugin-es-toolkit',
    website: 'https://github.com/wojtekmaj/vite-plugin-es-toolkit#readme',
  },
  source: {
    github: 'wojtekmaj/vite-plugin-es-toolkit',
    npm: 'vite-plugin-es-toolkit',
  },
  stats: {
    stars: 39,
    downloads: {
      monthly: 5236,
      weekly: 979,
    },
  },
})
