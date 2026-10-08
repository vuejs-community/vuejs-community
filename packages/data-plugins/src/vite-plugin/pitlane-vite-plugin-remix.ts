import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pitlane/vite-plugin-remix',
  description: 'Vite plugin for Remix development and production builds.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'pitlane',
    'remix',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/pitlane-tools/pitlane',
    npm: 'https://www.npmjs.com/package/@pitlane/vite-plugin-remix',
    website: 'https://pitlane.tools/package/vite-plugin-remix/',
  },
  source: {
    github: 'pitlane-tools/pitlane',
    npm: '@pitlane/vite-plugin-remix',
  },
})
