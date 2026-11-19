import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@exportlab/screenpro-vite',
  description: 'Tells ScreenPro which file and line produced an element on screen. Vite plugin.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'screenpro',
    'feedback',
    'source-location',
  ],
  links: {
    github: 'https://github.com/contentrise/screen-pro',
    npm: 'https://www.npmjs.com/package/@exportlab/screenpro-vite',
    website: 'https://github.com/contentrise/screen-pro#readme',
  },
  source: {
    github: 'contentrise/screen-pro',
    npm: '@exportlab/screenpro-vite',
  },
})
