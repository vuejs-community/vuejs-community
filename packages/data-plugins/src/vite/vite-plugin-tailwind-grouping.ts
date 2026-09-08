import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tailwind-grouping',
  description: 'Vite plugin to expand grouped Tailwind utility classes',
  icon: 'logos:vite-icon',
  version: '0.1.8',
  category: 'plugin',
  tags: [
    'tailwind',
    'tailwindcss',
    'twind',
    'class',
    'classes',
    'groups',
    'grouping',
    'vite',
    'vite-plugin',
    'rollup-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'rschristian/tailwind-grouping',
    npm: 'vite-plugin-tailwind-grouping',
  },
  links: {
    github: 'https://github.com/rschristian/tailwind-grouping',
    npm: 'https://www.npmjs.com/package/vite-plugin-tailwind-grouping',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 3,
    },
  },
})
