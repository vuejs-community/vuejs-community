import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-class-mangler',
  description: 'Vite plugin for minifying and obfuscating CSS class names in production',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'tailwind',
    'class minifier',
  ],
  links: {
    github: 'https://github.com/kiosion/vite-plugin-class-mangler',
    npm: 'https://www.npmjs.com/package/vite-plugin-class-mangler',
    website: 'https://github.com/kiosion/vite-plugin-class-mangler#readme',
  },
  source: {
    github: 'kiosion/vite-plugin-class-mangler',
    npm: 'vite-plugin-class-mangler',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
