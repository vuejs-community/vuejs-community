import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-lazy-ssr',
  description: 'Vite Plugin to lazilly produce Server-Side Rendered pages using Puppeteer',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'ssr',
    'webcomponents',
    'puppeteer',
    'vite',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/keplersj/vite-plugin-lazy-ssr',
    npm: 'https://www.npmjs.com/package/vite-plugin-lazy-ssr',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
