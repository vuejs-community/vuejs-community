import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pitlane/vite-plugin-fetch-server',
  description: 'Vite development server bridge that sends requests to an app\'s Fetch handler.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'fetch',
    'pitlane',
    'ssr',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/pitlane-tools/pitlane',
    npm: 'https://www.npmjs.com/package/@pitlane/vite-plugin-fetch-server',
    website: 'https://pitlane.tools/package/vite-plugin-fetch-server/',
  },
  source: {
    github: 'pitlane-tools/pitlane',
    npm: '@pitlane/vite-plugin-fetch-server',
  },
})
