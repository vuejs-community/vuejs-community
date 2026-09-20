import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-sitemap-gen',
  description: 'Vite plugin to auto-generate sitemap.xml and robots.txt for SvelteKit at build time',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'plugin',
    'sitemap',
    'seo',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Posterior-AI/vite-sitemap',
    npm: 'https://www.npmjs.com/package/vite-sitemap-gen',
    website: 'https://github.com/Posterior-AI/vite-sitemap#readme',
  },
  source: {
    github: 'Posterior-AI/vite-sitemap',
    npm: 'vite-sitemap-gen',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 356,
      weekly: 82,
    },
  },
})
