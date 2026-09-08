import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-slogan',
  description: 'Print Slogan when dev for Vite Project',
  icon: 'logos:vite-icon',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'OceanPresentChao/vite-plugin-slogan',
    npm: 'vite-plugin-slogan',
  },
  links: {
    github: 'https://github.com/OceanPresentChao/vite-plugin-slogan',
    npm: 'https://www.npmjs.com/package/vite-plugin-slogan',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 0,
    },
  },
})
