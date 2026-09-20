import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@webrium/vite-plugin',
  description: 'Official Vite plugin for the Webrium PHP framework — includes TailwindCSS, live reload, and customizable dev server logging.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'webrium',
    'vite',
    'vite-plugin',
    'tailwindcss',
    'php',
    'framework',
    'live-reload',
  ],
  links: {
    github: 'https://github.com/webrium/vite-plugin',
    npm: 'https://www.npmjs.com/package/@webrium/vite-plugin',
    website: 'https://github.com/webrium/vite-plugin#readme',
  },
  source: {
    github: 'webrium/vite-plugin',
    npm: '@webrium/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 5,
    },
  },
})
