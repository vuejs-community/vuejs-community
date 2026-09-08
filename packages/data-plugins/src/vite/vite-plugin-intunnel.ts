import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-intunnel',
  description: 'A Vite plugin that securely exposes local development servers to the internet using Ngrok.',
  icon: 'logos:vite-icon',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'intunnel',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'Coder-King3/vite-plugin-intunnel',
    npm: 'vite-plugin-intunnel',
  },
  links: {
    github: 'https://github.com/Coder-King3/vite-plugin-intunnel',
    npm: 'https://www.npmjs.com/package/vite-plugin-intunnel',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 0,
    },
  },
})
