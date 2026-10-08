import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pitlane/assets',
  description: 'Framework-neutral asset resolution for bundled applications.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'assets',
    'import-map',
    'manifest',
    'modulepreload',
    'pitlane',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/pitlane-tools/pitlane',
    npm: 'https://www.npmjs.com/package/@pitlane/assets',
    website: 'https://pitlane.tools/package/assets/',
  },
  source: {
    github: 'pitlane-tools/pitlane',
    npm: '@pitlane/assets',
  },
})
