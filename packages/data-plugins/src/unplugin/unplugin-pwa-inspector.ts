import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@unplugin-pwa/inspector',
  description: 'Inspector UI for unplugin-pwa. Inspect and debug your PWA during development, served by the integrations via middleware or DevFrame.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'pwa',
    'pwa-inspector',
    'inspector',
    'devtools',
    'service-worker',
    'workbox',
    'unplugin',
    'vite',
    'devframe',
    'debugger',
  ],
  links: {
    github: 'https://github.com/vite-pwa/unplugin-pwa',
    npm: 'https://www.npmjs.com/package/@unplugin-pwa/inspector',
    website: 'https://github.com/vite-pwa/unplugin-pwa/#readme',
  },
  source: {
    github: 'vite-pwa/unplugin-pwa',
    npm: '@unplugin-pwa/inspector',
  },
})
