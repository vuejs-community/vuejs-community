import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'gantry-web',
  description: 'Frontend half of the Gantry desktop app framework: window chrome, native bridge, Tea runtime, Vite plugin',
  version: '0.4.1',
  category: 'plugin',
  tags: [
    'gantry',
    'desktop',
    'webview',
    'go',
    'react',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/B-Commissions/Gantry',
    npm: 'https://www.npmjs.com/package/gantry-web',
  },
  stats: {
    downloads: {
      monthly: 71,
      weekly: 9,
    },
  },
})
