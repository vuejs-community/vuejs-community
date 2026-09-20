import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-image-types',
  description: 'This [vite](https://vitejs.dev/) plugin generates a type file for the image paths in the `public` directory.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'plugin',
    'image',
    'image types',
    'typescript',
  ],
  links: {
    github: 'https://github.com/RobertOstermann/vite-plugin-image-types',
    npm: 'https://www.npmjs.com/package/vite-plugin-image-types',
    website: 'https://github.com/RobertOstermann/vite-plugin-image-types',
  },
  source: {
    github: 'RobertOstermann/vite-plugin-image-types',
    npm: 'vite-plugin-image-types',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 47,
      weekly: 8,
    },
  },
})
