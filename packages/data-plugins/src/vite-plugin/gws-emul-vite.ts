import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gws-emul/vite',
  description: 'Vite plugin for gws-emul — runs a GAS backend in the dev server, injects google.script.run/history, mounts the dashboard.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'google-apps-script',
    'gas',
    'emulator',
    'vite',
    'vite-plugin',
    'dev-server',
  ],
  source: {
    github: 'juhyeonni/gws-emul',
    npm: '@gws-emul/vite',
  },
  links: {
    github: 'https://github.com/juhyeonni/gws-emul',
    npm: 'https://www.npmjs.com/package/@gws-emul/vite',
    website: 'https://github.com/juhyeonni/gws-emul#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 39,
      weekly: 17,
    },
  },
})
