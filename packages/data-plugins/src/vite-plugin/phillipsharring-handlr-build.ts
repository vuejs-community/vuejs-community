import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@phillipsharring/handlr-build',
  description: 'Build mechanics for Handlr sites: HTML compiler, page baker, Vite dev plugin',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'handlr',
    'html',
    'static-site',
    'vite-plugin',
    'build',
  ],
  source: {
    npm: '@phillipsharring/handlr-build',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@phillipsharring/handlr-build',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 142,
      weekly: 6,
    },
  },
})
