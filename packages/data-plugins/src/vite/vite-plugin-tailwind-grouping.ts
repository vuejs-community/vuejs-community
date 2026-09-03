import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tailwind-grouping',
  description: 'Vite plugin to expand grouped Tailwind utility classes',
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
