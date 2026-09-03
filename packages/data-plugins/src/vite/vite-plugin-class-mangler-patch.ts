import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-class-mangler-patch',
  description: 'Vite plugin for minifying and obfuscating CSS class names in production',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'tailwind',
    'class minifier',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/kiosion/vite-plugin-class-mangler',
    npm: 'https://www.npmjs.com/package/vite-plugin-class-mangler-patch',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 2,
    },
  },
})
