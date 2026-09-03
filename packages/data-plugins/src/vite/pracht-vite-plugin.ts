import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@pracht/vite-plugin',
  description: 'Vite plugin for Pracht apps with virtual modules, dev SSR, prerendering, route inspection, and multi-adapter builds.',
  version: '0.11.1',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/JoviDeCroock/pracht',
    npm: 'https://www.npmjs.com/package/@pracht/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 2100,
      weekly: 568,
    },
  },
})
