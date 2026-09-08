import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-es-toolkit',
  description: 'Vite plugin for replacing Lodash with es-toolkit',
  icon: 'logos:vite-icon',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'plugin',
    'lodash',
    'es-toolkit',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'wojtekmaj/vite-plugin-es-toolkit',
    npm: 'vite-plugin-es-toolkit',
  },
  links: {
    github: 'https://github.com/wojtekmaj/vite-plugin-es-toolkit',
    npm: 'https://www.npmjs.com/package/vite-plugin-es-toolkit',
  },
  stats: {
    downloads: {
      monthly: 5357,
      weekly: 1918,
    },
  },
})
