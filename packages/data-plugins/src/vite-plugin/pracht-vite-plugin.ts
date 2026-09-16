import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pracht/vite-plugin',
  description: 'Vite plugin for Pracht apps with virtual modules, dev SSR, prerendering, route inspection, and multi-adapter builds.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'pracht',
    'preact',
    'vite',
    'vite-plugin',
    'ssr',
    'ssg',
    'prerender',
    'routing',
    'cloudflare',
    'vercel',
  ],
  source: {
    github: 'JoviDeCroock/pracht',
    npm: '@pracht/vite-plugin',
  },
  links: {
    github: 'https://github.com/JoviDeCroock/pracht',
    npm: 'https://www.npmjs.com/package/@pracht/vite-plugin',
    website: 'https://github.com/JoviDeCroock/pracht/tree/main/packages/vite-plugin',
  },
  stats: {
    stars: 97,
    downloads: {
      monthly: 1413,
      weekly: 232,
    },
  },
})
