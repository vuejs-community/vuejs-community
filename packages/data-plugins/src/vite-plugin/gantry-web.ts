import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'gantry-web',
  description: 'Frontend half of the Gantry desktop app framework: window chrome, native bridge, Tea runtime, Vite plugin',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'gantry',
    'desktop',
    'webview',
    'go',
    'react',
    'vite-plugin',
  ],
  source: {
    github: 'B-Commissions/Gantry',
    npm: 'gantry-web',
  },
  links: {
    github: 'https://github.com/B-Commissions/Gantry',
    npm: 'https://www.npmjs.com/package/gantry-web',
    website: 'https://github.com/B-Commissions/Gantry',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 35,
      weekly: 4,
    },
  },
})
