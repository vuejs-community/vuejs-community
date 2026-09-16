import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-tailwindcss-shortener',
  description: 'Shorten the classes of Tailwind CSS',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  source: {
    github: 'northernCold/unplugin-tailwindcss-shortener',
    npm: 'unplugin-tailwindcss-shortener',
  },
  links: {
    github: 'https://github.com/northernCold/unplugin-tailwindcss-shortener',
    npm: 'https://www.npmjs.com/package/unplugin-tailwindcss-shortener',
    website: 'https://github.com/northernCold/unplugin-tailwindcss-shortener#readme',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 21,
      weekly: 2,
    },
  },
})
