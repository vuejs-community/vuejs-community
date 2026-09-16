import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rituraj-yactraq/rollup-plugin-tailwindcss',
  description: 'Bundle Tailwind CSS stylesheet as a Rollup asset',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'tailwind',
    'tailwindcss',
  ],
  source: {
    github: 'alexdilley/rollup-plugin-tailwindcss',
    npm: '@rituraj-yactraq/rollup-plugin-tailwindcss',
  },
  links: {
    github: 'https://github.com/alexdilley/rollup-plugin-tailwindcss',
    npm: 'https://www.npmjs.com/package/@rituraj-yactraq/rollup-plugin-tailwindcss',
    website: 'https://github.com/alexdilley/rollup-plugin-tailwindcss#readme',
  },
  stats: {
    stars: 13,
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
