import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@phoria/vite-plugin-dotnet-dev-certs',
  description: 'Use dotnet dev-certs with your Vite development server.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'dotnet',
    'aspnet',
    'vite',
    'vite-plugin',
    'https',
    'ssl',
    'dev-certs',
  ],
  source: {
    github: 'CMeeg/phoria',
    npm: '@phoria/vite-plugin-dotnet-dev-certs',
  },
  links: {
    github: 'https://github.com/CMeeg/phoria',
    npm: 'https://www.npmjs.com/package/@phoria/vite-plugin-dotnet-dev-certs',
    website: 'https://github.com/CMeeg/phoria#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 205,
      weekly: 6,
    },
  },
})
