import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@basswood/fiddle',
  description: 'Fiddle in your app: the Vite plugin (the toolbar\'s tag, source tags, stories), stories of components and flows reviewed with comments, the toolbar for React or any page, and the `fiddle` CLI that publishes stories to fiddle.page.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'fiddle',
    'stories',
    'review',
    'comments',
    'vite-plugin',
    'react',
    'msw',
  ],
  links: {
    github: 'https://github.com/nicmeriano/nickmeriano.com',
    npm: 'https://www.npmjs.com/package/@basswood/fiddle',
    website: 'https://fiddle.fyi/docs/stories',
  },
  source: {
    github: 'nicmeriano/nickmeriano.com',
    npm: '@basswood/fiddle',
  },
})
