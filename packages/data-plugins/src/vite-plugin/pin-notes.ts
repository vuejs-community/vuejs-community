import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'pin-notes',
  description: 'Pin notes on a page in the browser and hand them to Claude Code: a dev-only overlay, its Vite plugin, a note store and a CLI.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'claude-code',
    'feedback',
    'annotations',
    'overlay',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/pin-notes',
  },
  source: {
    npm: 'pin-notes',
  },
})
