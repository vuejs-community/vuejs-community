import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@shiage/vite',
  description: 'Vite plugin for Shiage — inspect and edit CSS in Chrome DevTools, save changes to source as Tailwind classes.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'horacechoi/shiage',
    npm: '@shiage/vite',
  },
  links: {
    github: 'https://github.com/horacechoi/shiage',
    npm: 'https://www.npmjs.com/package/@shiage/vite',
    website: 'https://shiage.dev',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 19,
      weekly: 2,
    },
  },
})
