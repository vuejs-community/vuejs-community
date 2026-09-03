import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-pngine',
  description: 'Vite plugin for bundling PNGine apps into single HTML files',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'pngine',
    'webgpu',
    'singlefile',
    'inline',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-pngine',
  },
  stats: {
    downloads: {
      monthly: 143,
      weekly: 1,
    },
  },
})
