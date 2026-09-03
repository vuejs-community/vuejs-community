import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@piyushpawar/vite-plugin-react-material-symbols',
  description: 'Vite plugin to discover material symbols from react project and inject a Google Fonts stylesheet link with only the icons used in the application.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'material-symbols-icons',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/piyush-pawar-17/vite-plugin-react-material-symbols',
    npm: 'https://www.npmjs.com/package/@piyushpawar/vite-plugin-react-material-symbols',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 2,
    },
  },
})
