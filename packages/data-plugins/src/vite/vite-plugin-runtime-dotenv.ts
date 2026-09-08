import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-runtime-dotenv',
  description: 'Plugin for runtime environment variables in Vite',
  icon: 'logos:vite-icon',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'env',
    'dotenv',
    'runtime-env',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'DidacBA/vite-plugin-runtime-dotenv',
    npm: 'vite-plugin-runtime-dotenv',
  },
  links: {
    github: 'https://github.com/DidacBA/vite-plugin-runtime-dotenv',
    npm: 'https://www.npmjs.com/package/vite-plugin-runtime-dotenv',
  },
  stats: {
    downloads: {
      monthly: 808,
      weekly: 220,
    },
  },
})
