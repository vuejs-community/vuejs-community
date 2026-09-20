import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@piyushpawar/vite-plugin-react-material-symbols',
  description: 'Vite plugin to discover material symbols from react project and inject a Google Fonts stylesheet link with only the icons used in the application.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'material-symbols-icons',
  ],
  links: {
    github: 'https://github.com/piyush-pawar-17/vite-plugin-react-material-symbols',
    npm: 'https://www.npmjs.com/package/@piyushpawar/vite-plugin-react-material-symbols',
    website: 'https://github.com/piyush-pawar-17/vite-plugin-react-material-symbols#readme',
  },
  source: {
    github: 'piyush-pawar-17/vite-plugin-react-material-symbols',
    npm: '@piyushpawar/vite-plugin-react-material-symbols',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
