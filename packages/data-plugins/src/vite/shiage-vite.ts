import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@shiage/vite',
  description: 'Vite plugin for Shiage — inspect and edit CSS in Chrome DevTools, save changes to source as Tailwind classes.',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'tailwind',
    'tailwindcss',
    'css',
    'devtools',
    'dx',
    'shiage',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/horacechoi/shiage',
    npm: 'https://www.npmjs.com/package/@shiage/vite',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 4,
    },
  },
})
