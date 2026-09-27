import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dorsk/yubisashi',
  description: 'Point at elements of your running app from a review panel: an iframe picker, a Vite plugin and a `yubi dev` proxy that inject it in dev.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'svelte',
    'svelte5',
    'review',
    'feedback',
    'picker',
    'iframe',
    'postmessage',
    'devtools',
    'coding-agent',
  ],
  links: {
    github: 'https://github.com/DorskFR/yubisashi',
    npm: 'https://www.npmjs.com/package/@dorsk/yubisashi',
    website: 'https://github.com/DorskFR/yubisashi',
  },
  source: {
    github: 'DorskFR/yubisashi',
    npm: '@dorsk/yubisashi',
  },
})
