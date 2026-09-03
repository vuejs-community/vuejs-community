import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-image-types',
  description: 'This [vite](https://vitejs.dev/) plugin generates a type file for the image paths in the `public` directory.',
  version: '1.5.5',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'plugin',
    'image',
    'image types',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/RobertOstermann/vite-plugin-image-types',
    npm: 'https://www.npmjs.com/package/vite-plugin-image-types',
  },
  stats: {
    downloads: {
      monthly: 61,
      weekly: 2,
    },
  },
})
