import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'zepp-web-runner',
  description: 'Run Zepp OS watch app pages in the browser — Vite plugin + React renderer that shims @zos/ui hmUI widgets.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'zepp',
    'zeppos',
    'watch',
    'hmUI',
    'simulator',
    'vite-plugin',
    'react',
  ],
  source: {
    github: 'AntonLapshin/zepp-web-runner',
    npm: 'zepp-web-runner',
  },
  links: {
    github: 'https://github.com/AntonLapshin/zepp-web-runner',
    npm: 'https://www.npmjs.com/package/zepp-web-runner',
    website: 'https://github.com/AntonLapshin/zepp-web-runner#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 29,
      weekly: 0,
    },
  },
})
