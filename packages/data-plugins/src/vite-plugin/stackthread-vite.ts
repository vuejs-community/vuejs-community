import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@stackthread/vite',
  description: 'Vite plugin for stackthread: click any element in your React app and follow it through your code.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'react',
    'developer-tools',
    'inspector',
    'source-location',
    'stackthread',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@stackthread/vite',
    website: 'https://pypi.org/project/stackthread/',
  },
  source: {
    npm: '@stackthread/vite',
  },
})
