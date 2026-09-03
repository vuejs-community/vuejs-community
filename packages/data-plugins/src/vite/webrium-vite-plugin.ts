import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@webrium/vite-plugin',
  description: 'Official Vite plugin for the Webrium PHP framework — includes TailwindCSS, live reload, and customizable dev server logging.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'webrium',
    'vite',
    'vite-plugin',
    'tailwindcss',
    'php',
    'framework',
    'live-reload',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/webrium/vite-plugin',
    npm: 'https://www.npmjs.com/package/@webrium/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 5,
    },
  },
})
