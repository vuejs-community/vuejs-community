import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-class-mangler-patch',
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
    npm: 'https://www.npmjs.com/package/vite-plugin-class-mangler-patch',
    website: 'https://github.com/kiosion/vite-plugin-class-mangler#readme',
  },
  source: {
    github: 'kiosion/vite-plugin-class-mangler',
    npm: 'vite-plugin-class-mangler-patch',
  },
  stats: {
    stars: 33,
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
