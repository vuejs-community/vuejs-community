import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-http-basic-auth',
  description: 'A Vite plugin adding HTTP Basic Auth support',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/CzechCyberTeam/vite-plugin-http-auth',
    npm: 'https://www.npmjs.com/package/vite-plugin-http-basic-auth',
    website: 'https://github.com/CzechCyberTeam/vite-plugin-http-auth#readme',
  },
  source: {
    github: 'CzechCyberTeam/vite-plugin-http-auth',
    npm: 'vite-plugin-http-basic-auth',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 267,
      weekly: 51,
    },
  },
})
