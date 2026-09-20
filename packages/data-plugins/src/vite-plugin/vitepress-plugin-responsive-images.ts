import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vitepress-plugin-responsive-images',
  description: 'Improve PageSpeed and load times for VitePress docs by auto-generating modern, responsive picture elements from local Markdown images.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/shishengkai/vitepress-plugin-responsive-images',
    npm: 'https://www.npmjs.com/package/vitepress-plugin-responsive-images',
    website: 'https://github.com/shishengkai/vitepress-plugin-responsive-images#readme',
  },
  source: {
    github: 'shishengkai/vitepress-plugin-responsive-images',
    npm: 'vitepress-plugin-responsive-images',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 56,
      weekly: 4,
    },
  },
})
