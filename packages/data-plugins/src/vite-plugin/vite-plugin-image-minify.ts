import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-image-minify',
  description: 'Vite plugin to minify images.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'Vite',
    'Image',
    'Minify',
    'Minifier',
    'squoosh',
    'svgo',
  ],
  source: {
    github: 'fisker/vite-plugin-image-minify',
    npm: 'vite-plugin-image-minify',
  },
  links: {
    github: 'https://github.com/fisker/vite-plugin-image-minify',
    npm: 'https://www.npmjs.com/package/vite-plugin-image-minify',
    website: 'https://github.com/fisker/vite-plugin-image-minify#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 4,
    },
  },
})
