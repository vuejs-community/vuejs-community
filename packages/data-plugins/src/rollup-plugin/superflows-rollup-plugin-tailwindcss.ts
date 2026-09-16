import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@superflows/rollup-plugin-tailwindcss',
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
    npm: '@superflows/rollup-plugin-tailwindcss',
  },
  links: {
    github: 'https://github.com/alexdilley/rollup-plugin-tailwindcss',
    npm: 'https://www.npmjs.com/package/@superflows/rollup-plugin-tailwindcss',
    website: 'https://github.com/alexdilley/rollup-plugin-tailwindcss#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 51,
      weekly: 4,
    },
  },
})
