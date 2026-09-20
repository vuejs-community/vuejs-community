import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tailwind',
  description: 'vite tailwind plugin with jit compiler enabled',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'tailwind',
    'tailwind-jit',
  ],
  links: {
    github: 'https://github.com/axe-me/vite-plugin-tailwind',
    npm: 'https://www.npmjs.com/package/vite-plugin-tailwind',
    website: 'https://github.com/axe-me/vite-plugin-tailwind#readme',
  },
  source: {
    github: 'axe-me/vite-plugin-tailwind',
    npm: 'vite-plugin-tailwind',
  },
  stats: {
    stars: 15,
    downloads: {
      monthly: 535,
      weekly: 159,
    },
  },
})
