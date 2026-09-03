import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@gws-emul/vite',
  description: 'Vite plugin for gws-emul — runs a GAS backend in the dev server, injects google.script.run/history, mounts the dashboard.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'google-apps-script',
    'gas',
    'emulator',
    'vite',
    'vite-plugin',
    'dev-server',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/juhyeonni/gws-emul',
    npm: 'https://www.npmjs.com/package/@gws-emul/vite',
  },
  stats: {
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
