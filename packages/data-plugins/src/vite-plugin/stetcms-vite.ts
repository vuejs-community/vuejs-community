import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@stetcms/vite',
  description: 'Vite plugin for Stet, the CMS for marketing and engineering: generates a typed content client and publishes your tracking plan.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/jamiedavenport/stet',
    npm: 'https://www.npmjs.com/package/@stetcms/vite',
    website: 'https://docs.stetcms.com/reference/codegen',
  },
  source: {
    github: 'jamiedavenport/stet',
    npm: '@stetcms/vite',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 40,
      weekly: 4,
    },
  },
})
