import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'imgit',
  description: 'Transform images, video and YouTube links to HTML optimized for web vitals.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/elringus/imgit',
    npm: 'https://www.npmjs.com/package/imgit',
    website: 'https://imgit.dev',
  },
  source: {
    github: 'elringus/imgit',
    npm: 'imgit',
  },
  stats: {
    stars: 24,
    downloads: {
      monthly: 95,
      weekly: 11,
    },
  },
})
