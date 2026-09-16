import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vituum/vite-plugin-send',
  description: 'Vite plugin for sending emails via nodemailer for testing',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vituum',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'vituum/vite-plugin-send',
    npm: '@vituum/vite-plugin-send',
  },
  links: {
    github: 'https://github.com/vituum/vite-plugin-send',
    npm: 'https://www.npmjs.com/package/@vituum/vite-plugin-send',
    website: 'https://github.com/vituum/vite-plugin-send#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 928,
      weekly: 167,
    },
  },
})
