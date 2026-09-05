import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tailwind-attributify',
  description: 'A Vite plugin that aims to use HTML attributes as Tailwind pseudo selectors in order to reduce the length of the class attribute.',
  version: '1.0.8',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/deslunes/vite-plugin-tailwind-attributify',
    npm: 'https://www.npmjs.com/package/vite-plugin-tailwind-attributify',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 5,
    },
  },
})
