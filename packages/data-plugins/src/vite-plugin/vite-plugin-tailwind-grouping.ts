import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tailwind-grouping',
  description: 'Vite plugin to expand grouped Tailwind utility classes',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'rschristian/tailwind-grouping',
    npm: 'vite-plugin-tailwind-grouping',
  },
  links: {
    github: 'https://github.com/rschristian/tailwind-grouping',
    npm: 'https://www.npmjs.com/package/vite-plugin-tailwind-grouping',
    website: 'https://github.com/rschristian/tailwind-grouping#readme',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 23,
      weekly: 3,
    },
  },
})
