import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-intunnel',
  description: 'A Vite plugin that securely exposes local development servers to the internet using Ngrok.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'intunnel',
  ],
  source: {
    github: 'Coder-King3/vite-plugin-intunnel',
    npm: 'vite-plugin-intunnel',
  },
  links: {
    github: 'https://github.com/Coder-King3/vite-plugin-intunnel',
    npm: 'https://www.npmjs.com/package/vite-plugin-intunnel',
    website: 'https://github.com/Coder-King3/vite-plugin-intunnel',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
