import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-fonts',
  description: 'Zero-config font optimization for Vite - auto-detect fonts from CSS, download, and self-host with fallback metrics',
  version: '0.2.0',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ZainW/vite-fonts',
    npm: 'https://www.npmjs.com/package/vite-fonts',
  },
  stats: {
    downloads: {
      monthly: 273,
      weekly: 56,
    },
  },
})
