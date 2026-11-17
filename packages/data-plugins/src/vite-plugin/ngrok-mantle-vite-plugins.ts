import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ngrok/mantle-vite-plugins',
  description: 'Vite plugins for @ngrok/mantle.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'mantle',
    'ngrok',
    'shiki',
    'tailwindcss',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ngrok/mantle',
    npm: 'https://www.npmjs.com/package/@ngrok/mantle-vite-plugins',
    website: 'https://mantle.ngrok.com',
  },
  source: {
    github: 'ngrok/mantle',
    npm: '@ngrok/mantle-vite-plugins',
  },
})
