import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-inferno',
  description: 'inferno preset for the vite bundler',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-preset',
    'vite-plugin',
    'vite-plugin-inferno',
    'inferno',
  ],
  source: {
    github: 'guocaoyi/vite-plugin-inferno',
    npm: 'vite-plugin-inferno',
  },
  links: {
    github: 'https://github.com/guocaoyi/vite-plugin-inferno',
    npm: 'https://www.npmjs.com/package/vite-plugin-inferno',
    website: 'https://github.com/guocaoyi/vite-plugin-inferno',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 33,
      weekly: 2,
    },
  },
})
