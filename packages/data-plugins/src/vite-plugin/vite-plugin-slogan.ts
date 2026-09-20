import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-slogan',
  description: 'Print Slogan when dev for Vite Project',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'typescript',
  ],
  links: {
    github: 'https://github.com/OceanPresentChao/vite-plugin-slogan',
    npm: 'https://www.npmjs.com/package/vite-plugin-slogan',
    website: 'https://github.com/OceanPresentChao/vite-plugin-slogan',
  },
  source: {
    github: 'OceanPresentChao/vite-plugin-slogan',
    npm: 'vite-plugin-slogan',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
