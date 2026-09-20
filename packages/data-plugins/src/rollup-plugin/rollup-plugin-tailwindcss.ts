import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-tailwindcss',
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
  links: {
    github: 'https://github.com/alexdilley/rollup-plugin-tailwindcss',
    npm: 'https://www.npmjs.com/package/rollup-plugin-tailwindcss',
    website: 'https://github.com/alexdilley/rollup-plugin-tailwindcss#readme',
  },
  source: {
    github: 'alexdilley/rollup-plugin-tailwindcss',
    npm: 'rollup-plugin-tailwindcss',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 347,
      weekly: 61,
    },
  },
})
