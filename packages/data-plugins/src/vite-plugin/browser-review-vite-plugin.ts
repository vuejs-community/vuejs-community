import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@browser-review/vite-plugin',
  description: 'Vite plugin that tags JSX elements with data-review-src so browser-review can jump straight to the source line.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'jsx',
    'browser-review',
    'source-mapping',
  ],
  links: {
    github: 'https://github.com/kechol/browser-review',
    npm: 'https://www.npmjs.com/package/@browser-review/vite-plugin',
    website: 'https://github.com/kechol/browser-review#readme',
  },
  source: {
    github: 'kechol/browser-review',
    npm: '@browser-review/vite-plugin',
  },
})
