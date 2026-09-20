import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dmitrytavern/vite-imagetools',
  description: 'Load and transform images using a toolbox of import directives!',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'resize-images',
    'responsive-images',
    'vite',
    'image',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/JonasKruckenberg/imagetools',
    npm: 'https://www.npmjs.com/package/@dmitrytavern/vite-imagetools',
    website: 'https://github.com/JonasKruckenberg/imagetools/tree/main/packages/vite',
  },
  source: {
    github: 'JonasKruckenberg/imagetools',
    npm: '@dmitrytavern/vite-imagetools',
  },
  stats: {
    stars: 1144,
    downloads: {
      monthly: 21,
      weekly: 3,
    },
  },
})
