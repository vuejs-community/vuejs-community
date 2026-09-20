import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@velocitykode/velocity-vite-plugin',
  description: 'Vite plugin for Velocity Framework apps - manages public/hot, sets build defaults, and wires entrypoints so the framework\'s bond/vite Go helper resolves the right URLs in dev and prod.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'velocity',
    'velocitykode',
    'inertia',
  ],
  links: {
    github: 'https://github.com/velocitykode/velocity-vite-plugin',
    npm: 'https://www.npmjs.com/package/@velocitykode/velocity-vite-plugin',
    website: 'https://github.com/velocitykode/velocity-vite-plugin',
  },
  source: {
    github: 'velocitykode/velocity-vite-plugin',
    npm: '@velocitykode/velocity-vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 456,
      weekly: 25,
    },
  },
})
