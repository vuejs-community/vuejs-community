import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tailwind-attributify',
  description: 'A Vite plugin that aims to use HTML attributes as Tailwind pseudo selectors in order to reduce the length of the class attribute.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/deslunes/vite-plugin-tailwind-attributify',
    npm: 'https://www.npmjs.com/package/vite-plugin-tailwind-attributify',
    website: 'https://github.com/deslunes/vite-plugin-tailwind-attributify#readme',
  },
  source: {
    github: 'deslunes/vite-plugin-tailwind-attributify',
    npm: 'vite-plugin-tailwind-attributify',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 28,
      weekly: 3,
    },
  },
})
