import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-fonts',
  description: 'Zero-config font optimization for Vite - auto-detect fonts from CSS, download, and self-host with fallback metrics',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'fonts',
    'webfonts',
    'google-fonts',
    'bunny-fonts',
    'fontsource',
    'font-optimization',
    'self-hosting',
    'performance',
  ],
  source: {
    github: 'ZainW/vite-fonts',
    npm: 'vite-fonts',
  },
  links: {
    github: 'https://github.com/ZainW/vite-fonts',
    npm: 'https://www.npmjs.com/package/vite-fonts',
    website: 'https://github.com/ZainW/vite-fonts#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 192,
      weekly: 39,
    },
  },
})
