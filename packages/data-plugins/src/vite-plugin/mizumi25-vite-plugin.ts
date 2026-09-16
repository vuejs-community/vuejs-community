import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mizumi25/vite-plugin',
  description: 'Vite plugin for Mizumi CSS framework',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'mizumi',
    'css',
    'gsap',
  ],
  source: {
    github: 'Mizumi25/MizumiPackage',
    npm: '@mizumi25/vite-plugin',
  },
  links: {
    github: 'https://github.com/Mizumi25/MizumiPackage',
    npm: 'https://www.npmjs.com/package/@mizumi25/vite-plugin',
    website: 'https://github.com/Mizumi25/MizumiPackage#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 2,
    },
  },
})
