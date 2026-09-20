import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@n5s/vite-plugin-mjml',
  description: 'Vite plugin that compiles MJML email templates to HTML with a live dev preview',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'mjml',
    'email',
    'html-email',
    'email-templates',
    'preview',
    'preact',
  ],
  links: {
    github: 'https://github.com/nlemoine/packages',
    npm: 'https://www.npmjs.com/package/@n5s/vite-plugin-mjml',
    website: 'https://github.com/nlemoine/packages/tree/main/packages/vite-plugin-mjml#readme',
  },
  source: {
    github: 'nlemoine/packages',
    npm: '@n5s/vite-plugin-mjml',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 251,
      weekly: 9,
    },
  },
})
