import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@velvet-thunder/holt',
  description: 'Local server for the holt Chrome extension: writes screenshots, recordings and QA notes straight into your repo as markdown. CLI + Vite plugin, zero dependencies.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'qa',
    'screenshot',
    'screen-recording',
    'notes',
    'markdown',
    'vite-plugin',
    'chrome-extension',
  ],
  links: {
    github: 'https://github.com/eric435/holt',
    npm: 'https://www.npmjs.com/package/@velvet-thunder/holt',
    website: 'https://github.com/eric435/holt#readme',
  },
  source: {
    github: 'eric435/holt',
    npm: '@velvet-thunder/holt',
  },
})
