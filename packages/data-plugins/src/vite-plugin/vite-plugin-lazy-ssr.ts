import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-lazy-ssr',
  description: 'Vite Plugin to lazilly produce Server-Side Rendered pages using Puppeteer',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'ssr',
    'webcomponents',
    'puppeteer',
    'vite',
  ],
  source: {
    github: 'keplersj/vite-plugin-lazy-ssr',
    npm: 'vite-plugin-lazy-ssr',
  },
  links: {
    github: 'https://github.com/keplersj/vite-plugin-lazy-ssr',
    npm: 'https://www.npmjs.com/package/vite-plugin-lazy-ssr',
    website: 'https://github.com/keplersj/vite-plugin-lazy-ssr#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
