import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pz-mxu/vite-imagetools',
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
    npm: 'https://www.npmjs.com/package/@pz-mxu/vite-imagetools',
    website: 'https://github.com/JonasKruckenberg/imagetools/tree/main/packages/vite',
  },
  source: {
    github: 'JonasKruckenberg/imagetools',
    npm: '@pz-mxu/vite-imagetools',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 23,
      weekly: 1,
    },
  },
})
