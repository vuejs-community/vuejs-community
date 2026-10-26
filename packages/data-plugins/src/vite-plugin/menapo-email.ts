import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@menapo/email',
  description: 'Transactional e-mail as HTML and text: email(props => ({ subject, body: html`…` })) and render(), with the app\'s vicss styles inlined, Outlook-safe tables for buttons, boxes and rows, dark mode, vi18n per recipient and a dev preview',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'email',
    'html-email',
    'transactional-email',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/menapo/kit',
    npm: 'https://www.npmjs.com/package/@menapo/email',
    website: 'https://github.com/menapo/kit/blob/main/packages/email/README.md',
  },
  source: {
    github: 'menapo/kit',
    npm: '@menapo/email',
  },
})
