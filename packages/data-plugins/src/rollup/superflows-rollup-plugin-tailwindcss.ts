import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@superflows/rollup-plugin-tailwindcss',
  description: 'Bundle Tailwind CSS stylesheet as a Rollup asset',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'tailwind',
    'tailwindcss',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/alexdilley/rollup-plugin-tailwindcss',
    npm: 'https://www.npmjs.com/package/@superflows/rollup-plugin-tailwindcss',
  },
  stats: {
    downloads: {
      monthly: 37,
      weekly: 12,
    },
  },
})
