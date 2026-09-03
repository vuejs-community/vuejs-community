import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vitepress-plugin-responsive-images',
  description: 'Improve PageSpeed and load times for VitePress docs by auto-generating modern, responsive picture elements from local Markdown images.',
  version: '0.3.4',
  category: 'plugin',
  tags: [
    'vitepress',
    'vitepress-plugin',
    'vite-plugin',
    'responsive-images',
    'srcset',
    'picture',
    'webp',
    'avif',
    'pagespeed',
    'lighthouse',
    'core-web-vitals',
    'sharp',
    'markdown-it',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/shishengkai/vitepress-plugin-responsive-images',
    npm: 'https://www.npmjs.com/package/vitepress-plugin-responsive-images',
  },
  stats: {
    downloads: {
      monthly: 57,
      weekly: 4,
    },
  },
})
