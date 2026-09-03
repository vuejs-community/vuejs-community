import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@stetcms/vite',
  description: 'Vite plugin for Stet, the CMS for marketing and engineering: generates a typed content client and publishes your tracking plan.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'cms',
    'codegen',
    'content',
    'headless-cms',
    'plugin',
    'stet',
    'stetcms',
    'typegen',
    'typescript',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jamiedavenport/stet',
    npm: 'https://www.npmjs.com/package/@stetcms/vite',
  },
  stats: {
    downloads: {
      monthly: 349,
      weekly: 11,
    },
  },
})
