import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gutternote-devs/vite-plugin',
  description: 'Stamps DOM elements with their source location during preview builds, so a comment on an element can be traced back to a line of code',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'gutternote',
    'preview',
    'source-location',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@gutternote-devs/vite-plugin',
    website: 'https://docs.gutternote.com/reference/vite-plugin/',
  },
  source: {
    npm: '@gutternote-devs/vite-plugin',
  },
})
