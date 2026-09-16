import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-image-sizes',
  description: 'A Vite plugin to automatically add width and height attributes to img and source tags.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'image',
    'size',
    'cls',
  ],
  source: {
    github: 'ozekimasaki/vite-plugin-image-sizes',
    npm: 'vite-plugin-image-sizes',
  },
  links: {
    github: 'https://github.com/ozekimasaki/vite-plugin-image-sizes',
    npm: 'https://www.npmjs.com/package/vite-plugin-image-sizes',
    website: 'https://github.com/ozekimasaki/vite-plugin-image-sizes#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 302,
      weekly: 14,
    },
  },
})
