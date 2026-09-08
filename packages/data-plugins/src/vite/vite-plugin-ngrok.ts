import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ngrok',
  description: 'A Vite plugin for seamless integration with ngrok, allowing you to easily share your local development server with anyone, anywhere.',
  icon: 'logos:vite-icon',
  version: '2.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'ngrok',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'aphex/vite-plugin-ngrok',
    npm: 'vite-plugin-ngrok',
  },
  links: {
    github: 'https://github.com/aphex/vite-plugin-ngrok',
    npm: 'https://www.npmjs.com/package/vite-plugin-ngrok',
  },
  stats: {
    downloads: {
      monthly: 5429,
      weekly: 1198,
    },
  },
})
