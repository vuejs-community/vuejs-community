import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-http-basic-auth',
  description: 'A Vite plugin adding HTTP Basic Auth support',
  icon: 'logos:vite-icon',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'CzechCyberTeam/vite-plugin-http-auth',
    npm: 'vite-plugin-http-basic-auth',
  },
  links: {
    github: 'https://github.com/CzechCyberTeam/vite-plugin-http-auth',
    npm: 'https://www.npmjs.com/package/vite-plugin-http-basic-auth',
  },
  stats: {
    downloads: {
      monthly: 296,
      weekly: 104,
    },
  },
})
