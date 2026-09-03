import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@phillipsharring/handlr-build',
  description: 'Build mechanics for Handlr sites: HTML compiler, page baker, Vite dev plugin',
  version: '0.17.0',
  category: 'plugin',
  tags: [
    'handlr',
    'html',
    'static-site',
    'vite-plugin',
    'build',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@phillipsharring/handlr-build',
  },
  stats: {
    downloads: {
      monthly: 384,
      weekly: 26,
    },
  },
})
