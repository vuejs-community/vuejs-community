import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-office-addin-bun',
  description: 'Office Add-ins development using Vite with Bun and Node.js support. Based on vite-plugin-office-addin by Jozef Izso.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'bun',
    'vite',
    'vite-plugin',
    'office-addin',
    'vite-plugin-office-addin',
  ],
  source: {
    github: 'sebastianjg/bun-vite-plugin-office-addin',
    npm: 'vite-plugin-office-addin-bun',
  },
  links: {
    github: 'https://github.com/sebastianjg/bun-vite-plugin-office-addin',
    npm: 'https://www.npmjs.com/package/vite-plugin-office-addin-bun',
    website: 'https://github.com/sebastianjg/bun-vite-plugin-office-addin#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
