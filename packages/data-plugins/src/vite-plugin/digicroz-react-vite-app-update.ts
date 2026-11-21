import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@digicroz/react-vite-app-update',
  description: 'Detect new deployments of a Vite + React single-page app and prompt users to refresh. Includes a Vite plugin, a React banner/hook and a stale-chunk auto-reload safety net.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'update',
    'new-version',
    'refresh',
    'stale-chunk',
    'spa',
    'deployment',
  ],
  links: {
    github: 'https://github.com/digicroz/react-vite-app-update',
    npm: 'https://www.npmjs.com/package/@digicroz/react-vite-app-update',
    website: 'https://github.com/digicroz/react-vite-app-update#readme',
  },
  source: {
    github: 'digicroz/react-vite-app-update',
    npm: '@digicroz/react-vite-app-update',
  },
})
