import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-robots-txt',
  description: 'Vite plugin to generate robots.txt with presets, per-bot rules, and dev mode blocking',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'robots.txt',
    'robots',
    'seo',
    'crawlers',
    'ai-crawlers',
  ],
  source: {
    github: 'kjanat/vite-robots-txt',
    npm: 'vite-robots-txt',
  },
  links: {
    github: 'https://github.com/kjanat/vite-robots-txt',
    npm: 'https://www.npmjs.com/package/vite-robots-txt',
    website: 'https://github.com/kjanat/vite-robots-txt#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 615,
      weekly: 516,
    },
  },
})
