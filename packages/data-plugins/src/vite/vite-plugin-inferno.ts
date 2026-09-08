import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-inferno',
  description: 'inferno preset for the vite bundler',
  icon: 'logos:vite-icon',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-preset',
    'vite-plugin',
    'vite-plugin-inferno',
    'inferno',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'guocaoyi/vite-plugin-inferno',
    npm: 'vite-plugin-inferno',
  },
  links: {
    github: 'https://github.com/guocaoyi/vite-plugin-inferno',
    npm: 'https://www.npmjs.com/package/vite-plugin-inferno',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 6,
    },
  },
})
