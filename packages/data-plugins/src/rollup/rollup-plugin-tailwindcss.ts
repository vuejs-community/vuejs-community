import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-tailwindcss',
  description: 'Bundle Tailwind CSS stylesheet as a Rollup asset',
  icon: 'logos:rollupjs',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'tailwind',
    'tailwindcss',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'alexdilley/rollup-plugin-tailwindcss',
    npm: 'rollup-plugin-tailwindcss',
  },
  links: {
    github: 'https://github.com/alexdilley/rollup-plugin-tailwindcss',
    npm: 'https://www.npmjs.com/package/rollup-plugin-tailwindcss',
  },
  stats: {
    downloads: {
      monthly: 352,
      weekly: 103,
    },
  },
})
