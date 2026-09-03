import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@n5s/vite-plugin-mjml',
  description: 'Vite plugin that compiles MJML email templates to HTML with a live dev preview',
  version: '0.2.0',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/nlemoine/packages',
    npm: 'https://www.npmjs.com/package/@n5s/vite-plugin-mjml',
  },
  stats: {
    downloads: {
      monthly: 241,
      weekly: 29,
    },
  },
})
