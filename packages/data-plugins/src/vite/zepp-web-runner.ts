import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'zepp-web-runner',
  description: 'Run Zepp OS watch app pages in the browser — Vite plugin + React renderer that shims @zos/ui hmUI widgets.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'zepp',
    'zeppos',
    'watch',
    'hmUI',
    'simulator',
    'vite-plugin',
    'react',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/AntonLapshin/zepp-web-runner',
    npm: 'https://www.npmjs.com/package/zepp-web-runner',
  },
  stats: {
    downloads: {
      monthly: 58,
      weekly: 3,
    },
  },
})
