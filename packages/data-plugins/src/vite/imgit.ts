import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'imgit',
  description: 'Transform images, video and YouTube links to HTML optimized for web vitals.',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'CLS',
    'lazy-load',
    'embed',
    'size',
    'encode',
    'compress',
    'md',
    'avif',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/elringus/imgit',
    npm: 'https://www.npmjs.com/package/imgit',
  },
  stats: {
    downloads: {
      monthly: 241,
      weekly: 40,
    },
  },
})
