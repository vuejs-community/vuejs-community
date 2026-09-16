import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nessframework/tailwind',
  description: 'Tailwind CSS integration for Ness.js',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'ness',
    'nessjs',
    'plugin',
    'tailwind',
    'tailwindcss',
    'css',
    'vite',
    'vite-plugin',
    'postcss',
    'cssnano',
    'css-minification',
  ],
  source: {
    github: 'leroyanders/Ness.js',
    npm: '@nessframework/tailwind',
  },
  links: {
    github: 'https://github.com/leroyanders/Ness.js',
    npm: 'https://www.npmjs.com/package/@nessframework/tailwind',
    website: 'https://nessjs.com/docs/plugins/tailwind',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 696,
      weekly: 15,
    },
  },
})
