import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-inject-localize',
  description: 'Split your index.html into multiple files and inject them where ever you want! And add localize, if you want.',
  icon: 'logos:vite-icon',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'load html',
    'split html',
    'inject html',
    'html',
    'html-loader',
    'loader',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'DmitriiNazimov/vite-plugin-html-inject-localize',
    npm: 'vite-plugin-html-inject-localize',
  },
  links: {
    github: 'https://github.com/DmitriiNazimov/vite-plugin-html-inject-localize',
    npm: 'https://www.npmjs.com/package/vite-plugin-html-inject-localize',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
