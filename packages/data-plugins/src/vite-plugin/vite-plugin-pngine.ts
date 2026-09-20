import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-pngine',
  description: 'Vite plugin for bundling PNGine apps into single HTML files',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'pngine',
    'webgpu',
    'singlefile',
    'inline',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-pngine',
    website: 'https://hugodaniel.com/pages/pngine',
  },
  source: {
    npm: 'vite-plugin-pngine',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 2,
    },
  },
})
