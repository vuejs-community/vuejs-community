import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ngrok',
  description: 'A Vite plugin for seamless integration with ngrok, allowing you to easily share your local development server with anyone, anywhere.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'ngrok',
  ],
  source: {
    github: 'aphex/vite-plugin-ngrok',
    npm: 'vite-plugin-ngrok',
  },
  links: {
    github: 'https://github.com/aphex/vite-plugin-ngrok',
    npm: 'https://www.npmjs.com/package/vite-plugin-ngrok',
    website: 'https://github.com/aphex/vite-plugin-ngrok#readme',
  },
  stats: {
    stars: 39,
    downloads: {
      monthly: 5831,
      weekly: 1507,
    },
  },
})
