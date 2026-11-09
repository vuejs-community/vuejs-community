import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-build-meta-info',
  description: 'Vite plugin that emits Git and build metadata as version.json for release traceability',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'version',
    'build-info',
    'git',
    'release',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-build-meta-info',
  },
  source: {
    npm: 'vite-plugin-build-meta-info',
  },
})
